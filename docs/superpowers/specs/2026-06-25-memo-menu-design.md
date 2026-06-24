# Design Specification: Tek Dürümcü Memo Digital Menu

**Date**: 2026-06-25  
**Project**: Tek Dürümcü Memo Digital Menu (Mobile & Laptop)  
**Status**: Approved (Design Phase)

---

## 1. Overview & Goals
The goal is to build a modern, high-performance, and visually stunning digital restaurant menu for **Tek Dürümcü Memo** (an Üsküdar/İstanbul-based Kebab restaurant). The app works seamlessly on both mobile (horizontal swiping, clean vertical scrolling, thumb-friendly buttons) and desktop/laptop (rich layouts, hover effects). It is translation-ready and includes an admin interface for live editing, QR code generation, and configuration backup.

---

## 2. Technical Stack & Architecture
* **Frontend**: Pure HTML5, Vanilla CSS3 (custom CSS custom properties for styling and themes), and Modern Vanilla ES6 JavaScript.
* **Build Steps**: None. It is a client-side SPA (Single Page Application) that runs directly in any browser.
* **Persistence**: Client-side storage via `localStorage`.
* **Libraries**:
  * **QR Code**: `qrcode.js` (via CDN) for generating the menu QR codes dynamically in the browser.
  * **Icons**: Inline SVGs or Lucide Icons (via CDN) for a premium, lightweight look.
  * **Fonts**: Google Fonts (`Outfit` or `Inter` + `Playfair Display` for elegant typography matching kebab house aesthetics).

---

## 3. UI/UX & Themes
The visual design utilizes modern web aesthetics (warm dark mode, glassmorphism, responsive grid layout) to create an immediate "wow" factor.

### Color System
* **Warm Dark Theme (Default)**
  * Background: `#121212` (Rich Dark Charcoal)
  * Card Background: `#1E1E1E` with subtle border
  * Accent Primary: `#D35400` (Warm Terracotta / Clay)
  * Accent Secondary: `#F39C12` (Golden Yellow)
  * Text Primary: `#F5F5F5` (Off-white)
  * Text Secondary: `#A0A0A0` (Muted Gray)
* **Warm Light Theme**
  * Background: `#FAF7F0` (Soft Cream)
  * Card Background: `#FFFFFF`
  * Accent Primary: `#8E2800` (Deep Brick Red)
  * Accent Secondary: `#D35400`
  * Text Primary: `#2C3E50` (Dark Slate)
  * Text Secondary: `#7F8C8D`

### Key Screens / Components
1. **Hero Header**: Covers the brand name, rating (`3.9 ⭐`), Üsküdar address, live working status (computed dynamic label "Open" or "Closed" according to the 08:00 to 04:00 hours), contact actions, and a theme/language toggle.
2. **Sticky Category Bar**: Top-anchored navigation bar containing horizontally scrollable category tags (e.g. Kebabs, Wraps, Soups, Drinks, Desserts). Active category is highlighted dynamically.
3. **Search Bar**: Real-time filtering text box with instant fuzzy search on titles and descriptions.
4. **Product Cards Grid**: Responsive layout (1 column on mobile, 2-3 columns on desktop). Cards display product name, description, price, availability status, and a beautiful placeholder or dynamic image.
5. **Admin Dashboard Overlay**: A modal dashboard accessible via a secure PIN code panel (`1234`).
6. **QR Code Generator Modal**: Pop-up window displaying a QR code that encodes the current web page URL. Includes sizing parameters and a "Download PNG" button.

---

## 4. Multi-language (i18n) Framework
The application natively handles three languages: **Turkish (tr)**, **English (en)**, and **Russian (ru)**.

* The selected language is stored in `localStorage.getItem('memo_menu_lang')` and defaults to `tr`.
* A global translations dictionary covers UI strings (e.g., search text, open/close alerts, buttons).
* For menu categories and products, the schema structures translations explicitly:
  ```json
  {
    "id": "patlicanli-kebap",
    "category": "kebaplar",
    "price": 750,
    "active": true,
    "translations": {
      "tr": {
        "name": "Patlıcanlı Kebap",
        "description": "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile"
      },
      "en": {
        "name": "Eggplant Kebab",
        "description": "With bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme salad, flatbread"
      },
      "ru": {
        "name": "Баклажановый Кебаб",
        "description": "Подается с булгуром, луком, запеченным луком, помидором, перцем, эзме и лавашом"
      }
    }
  }
  ```
* Fallback logic: If `en` or `ru` fields are undefined or empty, the application falls back to `tr`.

---

## 5. Admin Panel & Persistence Mechanics
The admin panel is client-side only and provides full CRUD options:

### Data Flow
1. On first load, the app checks if `localStorage.getItem('memo_menu_data')` exists.
2. If absent, the app initializes the store using the default hardcoded Turkish menu data provided in the prompt.
3. When edits occur, the app updates the store in memory and updates `localStorage`.
4. Visual redraws occur reactively.

### Admin Operations
* **Add Category / Delete Category**: Inserts or removes categories. Deleting a category prompts whether to delete all children or move them to "Uncategorized".
* **Add Product / Edit Product**: Complete form showing price, status (active/inactive), category, and translation tabs (TR, EN, RU) for name and description.
* **Toggle Status**: Fast list-view switch to flag item out-of-stock.
* **Export Config**: Converts current state into a JSON string and triggers browser download of `memo_menu_config.json`.
* **Import Config**: File input loader that parses a uploaded JSON file, validates it against the schema, overwrites `localStorage`, and refreshes the page.
* **Reset Database**: Clears `localStorage` and restores original default Turkish menu configuration.

---

## 6. Verification & Test Plan
* **Visual Testing**: Run local HTTP server and view layout responsiveness under Chrome DevTools device simulation (iPhone SE, iPhone 12 Pro, iPad, Desktop).
* **State Verification**: Perform Add/Edit/Delete actions in Admin panel, verify DOM updates immediately, reload page, and confirm modifications persist.
* **Translations Validation**: Switch to English and Russian and check all UI terms and menu cards change.
* **Data Migration Verification**: Export menu data to a JSON file, reset database, and re-import the file to verify the menu is correctly restored.
