# Tek Kebapçı Memo 2000 Menu and Price Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the categories, items, prices, weights, and descriptions in the digital menu database to match the new physical menu, write a custom Node.js script to push these updates to the active Redis instance, and verify with tests.

**Architecture:** We update the static config file `data.js` containing `DEFAULT_MENU_DATA`. Then, we create and execute a Node.js seed script that uses the existing `ioredis` library to write the updated configuration directly to the live Redis database using the server's connection credentials.

**Tech Stack:** JavaScript ES Modules, ioredis, Node.js Test Runner.

## Global Constraints
- Do not modify visual designs or layout styles.
- Preserve all existing translation structures and fallbacks.
- Keep standard login PIN and admin logic intact.

---

### Task 1: Update `DEFAULT_MENU_DATA` in `data.js`

**Files:**
- Modify: `c:/Users/Senan/OneDrive/Рабочий стол/memo_menu/data.js`

**Interfaces:**
- Produces: The updated `DEFAULT_MENU_DATA` export containing new categories, updated prices/weights/names, new items with descriptions, and consolidated drinks.

- [ ] **Step 1: Replace the contents of `data.js`**
  Modify [data.js](file:///c:/Users/Senan/OneDrive/Рабочий%20стол/memo_menu/data.js) to specify the new categories list and items list with all updated names, weights, translations, descriptions, and prices. Show the exact complete content.

- [ ] **Step 2: Commit Task 1**
  ```bash
  git add data.js
  git commit -m "feat: update DEFAULT_MENU_DATA with new categories, prices, and items"
  ```

---

### Task 2: Create local migration script and run it

**Files:**
- Create: `c:/Users/Senan/OneDrive/Рабочий стол/memo_menu/scripts/sync-menu.js`

**Interfaces:**
- Consumes: `DEFAULT_MENU_DATA` from `data.js`.
- Produces: A script that writes the updated data to the live Redis database using the `REDIS_URL` or `KV_URL` environment variables.

- [ ] **Step 1: Create `scripts/sync-menu.js`**
  Write a script to read `DEFAULT_MENU_DATA` and write it directly to Redis under the key `memo_menu_data` to synchronize the database:
  ```javascript
  import Redis from 'ioredis';
  import { DEFAULT_MENU_DATA } from '../data.js';

  const connectionString = process.env.REDIS_URL || 
                           process.env.KV_URL || 
                           process.env.STORAGE_URL;

  if (!connectionString) {
    console.error("ERROR: No REDIS_URL or KV_URL found in environment variables!");
    process.exit(1);
  }

  async function sync() {
    console.log("Connecting to Redis...");
    const redis = new Redis(connectionString);
    try {
      console.log("Setting 'memo_menu_data' key with new default data...");
      await redis.set('memo_menu_data', JSON.stringify(DEFAULT_MENU_DATA));
      console.log("Successfully synchronized menu data to Redis!");
    } catch (err) {
      console.error("Redis operation failed:", err);
      process.exit(1);
    } finally {
      redis.disconnect();
    }
  }

  sync();
  ```

- [ ] **Step 2: Run the sync script**
  Run: `node scripts/sync-menu.js` (Note: Ensure environment variables are loaded or tell the user to run it with environment keys if needed, or check if they are already in the system).
  
- [ ] **Step 3: Commit Task 2**
  ```bash
  git add scripts/sync-menu.js
  git commit -m "feat: add scripts/sync-menu.js for manual database synchronization"
  ```

---

### Task 3: Update and expand unit tests

**Files:**
- Modify: `c:/Users/Senan/OneDrive/Рабочий стол/memo_menu/tests/menu.test.js`

**Interfaces:**
- Consumes: `DEFAULT_MENU_DATA` from `data.js` and `app.js` API functions.
- Produces: Passing unit tests asserting the correctness of the updated schema and new items.

- [ ] **Step 1: Modify unit tests in `tests/menu.test.js`**
  Add assertions verifying that:
  - New category `pideler` is present.
  - New items `kusbasili-pide`, `cig-kofte`, `turk-kahvesi` exist with correct prices.
  - Old items like `dimes-karisik` and `dimes-seftali` have been removed.
  - Prices for updated items (e.g., `adana-kebap` to 590, `adana-durum` to 330) are correct.

  Modify the file starting around line 1:
  ```javascript
  import test from 'node:test';
  import assert from 'node:assert';
  import { DEFAULT_MENU_DATA } from '../data.js';
  import { getTranslation, checkIsOpen, state } from '../app.js';
  import { verifyPin, saveProduct, deleteProduct, toggleProductStatus, saveCategory, deleteCategory } from '../admin.js';

  test('DEFAULT_MENU_DATA structure validity', () => {
    assert.ok(DEFAULT_MENU_DATA.categories.length > 0);
    assert.ok(DEFAULT_MENU_DATA.items.length > 0);
    
    // Check that all items have required fields
    DEFAULT_MENU_DATA.items.forEach(item => {
      assert.ok(item.id);
      assert.ok(item.category);
      assert.ok(item.price > 0);
      assert.strictEqual(typeof item.active, 'boolean');
      assert.ok(item.translations.tr);
      assert.ok(item.translations.tr.name);
    });

    // Check specific new categories and items
    const catIds = DEFAULT_MENU_DATA.categories.map(c => c.id);
    assert.ok(catIds.includes('pideler'), 'Category pideler must exist');
    assert.ok(!catIds.includes('izgaralar'), 'Category izgaralar must be removed');

    const itemIds = DEFAULT_MENU_DATA.items.map(i => i.id);
    assert.ok(itemIds.includes('kusbasili-pide'), 'kusbasili-pide must be present');
    assert.ok(itemIds.includes('cig-kofte'), 'cig-kofte must be present');
    assert.ok(itemIds.includes('turk-kahvesi'), 'turk-kahvesi must be present');
    assert.ok(!itemIds.includes('dimes-karisik'), 'dimes-karisik must be consolidated');
    assert.ok(!itemIds.includes('dimes-seftali'), 'dimes-seftali must be consolidated');
    assert.ok(!itemIds.includes('meysu-cola-1l'), 'meysu-cola-1l must be removed');

    // Check updated prices
    const adanaKebap = DEFAULT_MENU_DATA.items.find(i => i.id === 'adana-kebap');
    assert.strictEqual(adanaKebap.price, 590);
    assert.strictEqual(adanaKebap.translations.tr.name, 'Adana Kebap (170 gr)');

    const adanaDurum = DEFAULT_MENU_DATA.items.find(i => i.id === 'adana-durum');
    assert.strictEqual(adanaDurum.price, 330);
    assert.strictEqual(adanaDurum.translations.tr.name, 'Adana Dürüm (85 gr)');
  });
  ```

- [ ] **Step 2: Run unit tests**
  Run: `node --test tests/menu.test.js`
  Expected output: 9/9 tests pass.

- [ ] **Step 3: Commit Task 3**
  ```bash
  git add tests/menu.test.js
  git commit -m "test: expand assertions to verify new menu structure and values"
  ```
