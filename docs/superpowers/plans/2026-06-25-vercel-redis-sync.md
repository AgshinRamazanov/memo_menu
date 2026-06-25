# Vercel & Redis Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate Vercel Serverless Functions and a Redis (Upstash) database to dynamically persist and synchronize the restaurant menu globally, replacing the local-only browser storage.

**Architecture:** A static frontend SPA communicating with serverless endpoints (`/api/menu`) on page load and admin save operations. Updates are validated server-side using the admin PIN code.

**Tech Stack:** HTML5 / CSS3 / ES Modules, Vercel Serverless Functions (Node.js), Upstash Redis REST Client (`@upstash/redis`).

## Global Constraints
- Node.js v18+ environment.
- Admin security code PIN: `"1234"` (configurable via environment variable `ADMIN_PIN`).
- Keep code fully compatible with local unit tests.
- Wrap DOM/LocalStorage/Fetch calls so that Node tests do not fail on import.
- No changes to visual design/themes.

---

### Task 1: Initialize Project Dependencies and Serverless API

**Files:**
- Create: `package.json`
- Create: `api/menu.js`

**Interfaces:**
- Produces: `package.json` containing `@upstash/redis` dependency, and `api/menu.js` Serverless Function handler.

- [ ] **Step 1: Create `package.json`**
  Create `package.json` at the root of the project to specify dependencies for Vercel:
  ```json
  {
    "name": "tek-durumci-memo-menu",
    "version": "1.0.0",
    "type": "module",
    "dependencies": {
      "@upstash/redis": "^1.31.5"
    }
  }
  ```

- [ ] **Step 2: Create Serverless Function `/api/menu.js`**
  Create `/api/menu.js` to process requests:
  ```javascript
  import { Redis } from '@upstash/redis';

  // Initialize Upstash Redis REST client using environment variables
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  const DEFAULT_PIN = "1234";

  export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    if (req.method === 'GET') {
      try {
        const menuData = await redis.get('memo_menu_data');
        return res.status(200).json({ menuData: menuData || null });
      } catch (error) {
        console.error('Redis GET error:', error);
        return res.status(500).json({ error: 'Failed to retrieve menu data' });
      }
    }

    if (req.method === 'POST') {
      try {
        const { pin, menuData } = req.body;
        const expectedPin = process.env.ADMIN_PIN || DEFAULT_PIN;

        if (pin !== expectedPin) {
          return res.status(401).json({ error: 'Invalid PIN code' });
        }

        if (!menuData || !menuData.categories || !menuData.items) {
          return res.status(400).json({ error: 'Invalid menu data structure' });
        }

        await redis.set('memo_menu_data', menuData);
        return res.status(200).json({ success: true });
      } catch (error) {
        console.error('Redis SET error:', error);
        return res.status(500).json({ error: 'Failed to save menu data' });
      }
    }

    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
  ```

- [ ] **Step 3: Commit Task 1**
  ```bash
  git add package.json api/menu.js
  git commit -m "feat: add root package.json and api/menu serverless function"
  ```

---

### Task 2: Connect Frontend `app.js` to Redis API

**Files:**
- Modify: `app.js`

**Interfaces:**
- Consumes: `/api/menu` API endpoint.
- Produces: Asynchronous live menu fetching on page load, updating client-side state.

- [ ] **Step 1: Update `saveState` signature and body in `app.js`**
  Modify `saveState` (around lines 246-250) to accept a `pin` parameter and perform a POST request to sync data to Redis:
  ```javascript
  // Save dynamic menuState to local storage and sync to Redis if PIN is provided
  export async function saveState(pin = null) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('memo_menu_data', JSON.stringify(state.menuData));
    }
    
    if (pin && typeof fetch !== 'undefined') {
      try {
        const response = await fetch('/api/menu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pin: pin,
            menuData: state.menuData
          })
        });
        if (!response.ok) {
          const errData = await response.json();
          console.error('Failed to sync state to server:', errData.error);
          alert('Sunucu eşitleme hatası: ' + errData.error);
        }
      } catch (err) {
        console.error('Failed to connect to backend api:', err);
      }
    }
  }
  ```

- [ ] **Step 2: Add dynamic menu fetching function in `app.js`**
  Define `fetchLiveMenu` in `app.js` to retrieve live Redis data asynchronously:
  ```javascript
  // Fetch live menu data from Redis and refresh the DOM
  export async function fetchLiveMenu() {
    if (typeof fetch === 'undefined') return;
    try {
      const res = await fetch('/api/menu');
      const data = await res.json();
      if (data && data.menuData) {
        state.menuData = data.menuData;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('memo_menu_data', JSON.stringify(state.menuData));
        }
        renderCategoryTabs();
        renderMenuGrid();
        
        // Re-render admin lists if open
        const adminProducts = document.getElementById('admin-products-list');
        if (adminProducts && window.renderAdminProducts) {
          window.renderAdminProducts();
        }
        const adminCategories = document.getElementById('admin-categories-list');
        if (adminCategories && window.renderAdminCategories) {
          window.renderAdminCategories();
        }
      }
    } catch (err) {
      console.error('Failed to fetch live menu data from Redis:', err);
    }
  }
  ```

- [ ] **Step 3: Trigger `fetchLiveMenu` on page load**
  In the `DOMContentLoaded` event listener (around line 511), call `fetchLiveMenu()`:
  ```javascript
    document.addEventListener('DOMContentLoaded', () => {
      // Theme initialization
      document.documentElement.setAttribute('data-theme', state.theme);

      // Initialize UI strings
      renderLanguageStrings();

      // Fetch live database updates
      fetchLiveMenu();
      
      // Initialize Lucide Icons
      lucide.createIcons();
  ```

- [ ] **Step 4: Commit Task 2**
  ```bash
  git add app.js
  git commit -m "feat: hook up app.js state initialization and saveState to serverless api"
  ```

---

### Task 3: Adapt Admin Dashboard `admin.js` to Propagate Changes

**Files:**
- Modify: `admin.js`

**Interfaces:**
- Consumes: Module-scoped `authenticatedPin` variable.
- Produces: Propagating writes to Redis on save, delete, toggle, import, and reset.

- [ ] **Step 1: Add authentication tracking variable in `admin.js`**
  Add a module-level variable to store the validated PIN:
  ```javascript
  // ================= GLOBAL STATE =================
  let authenticatedPin = '';
  ```

- [ ] **Step 2: Update `verifyPin` to capture PIN in `admin.js`**
  Update `verifyPin(pin)` to set `authenticatedPin` if validation passes:
  ```javascript
  // Check PIN and toggle authorization state
  export function verifyPin(pin) {
    const isValid = pin === "1234";
    if (isValid) {
      authenticatedPin = pin;
    }
    return isValid;
  }
  ```

- [ ] **Step 3: Update `admin.js` CRUD operations to pass the PIN**
  Ensure all CRUD functions pass the `authenticatedPin` to `saveState()`:
  - Inside `saveProduct(productData)`: Change `saveState()` to `saveState(authenticatedPin)`.
  - Inside `deleteProduct(productId)`: Change `saveState()` to `saveState(authenticatedPin)`.
  - Inside `toggleProductStatus(productId)`: Change `saveState()` to `saveState(authenticatedPin)`.
  - Inside `saveCategory(categoryData)`: Change `saveState()` to `saveState(authenticatedPin)`.
  - Inside `deleteCategory(categoryId)`: Change `saveState()` to `saveState(authenticatedPin)`.

- [ ] **Step 4: Implement Server-Side Reset and update JSON import**
  Add a reset state function that syncs the defaults to Redis:
  ```javascript
  import { DEFAULT_MENU_DATA } from './data.js';

  export async function resetState(pin) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('memo_menu_data');
    }
    if (pin && typeof fetch !== 'undefined') {
      try {
        const response = await fetch('/api/menu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pin: pin,
            menuData: DEFAULT_MENU_DATA
          })
        });
        if (!response.ok) {
          const errData = await response.json();
          alert('Sunucu sıfırlama hatası: ' + errData.error);
        }
      } catch (err) {
        console.error('Failed to reset state on server:', err);
      }
    }
  }
  ```
  Update the reset button click listener to use `resetState`:
  ```javascript
      // Reset Database back to defaults
      document.getElementById('reset-db-btn').addEventListener('click', async () => {
        const confirmMsg = UI_STRINGS[state.lang].resetConfirm;
        if (confirm(confirmMsg)) {
          await resetState(authenticatedPin);
          window.location.reload();
        }
      });
  ```
  Update the file import change listener to await sync:
  ```javascript
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const importedData = JSON.parse(event.target.result);
            if (importedData && importedData.categories && importedData.items) {
              state.menuData = importedData;
              await saveState(authenticatedPin);
              window.location.reload();
            } else {
              alert(state.lang === 'tr' ? 'Geçersiz veri yapısı!' : 'Invalid data structure!');
            }
          } catch (err) {
            alert(state.lang === 'tr' ? 'JSON ayrıştırma hatası!' : 'JSON parse error!');
          }
        };
        reader.readAsText(file);
      });
  ```

- [ ] **Step 5: Expose Admin methods to window object for lifecycle callbacks**
  At the end of `admin.js`, expose the render functions to global scope so `app.js` can trigger them on async loads:
  ```javascript
  if (typeof window !== 'undefined') {
    window.renderAdminProducts = renderAdminProducts;
    window.renderAdminCategories = renderAdminCategories;
  }
  ```

- [ ] **Step 6: Commit Task 3**
  ```bash
  git add admin.js
  git commit -m "feat: propagate admin credentials to saveState and implement server reset"
  ```

---

### Task 4: Local Verification and Test Adjustments

**Files:**
- Modify: `tests/menu.test.js`

- [ ] **Step 1: Check unit tests**
  Run: `node tests/menu.test.js`
  Check if any tests fail due to async functions or Node differences. If needed, mock `fetch` in test context or confirm execution works without changes.

- [ ] **Step 2: Commit and verify clean build**
  ```bash
  git add tests/menu.test.js
  git commit -m "test: ensure tests remain passing under new signature"
  ```
