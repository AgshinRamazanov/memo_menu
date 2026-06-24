import { DEFAULT_MENU_DATA } from './data.js';

// ================= GLOBAL STATE =================
const isBrowser = typeof localStorage !== 'undefined';
export const state = {
  lang: isBrowser ? (localStorage.getItem('memo_menu_lang') || 'tr') : 'tr',
  theme: isBrowser ? (localStorage.getItem('memo_menu_theme') || 'dark') : 'dark',
  activeCategory: 'all',
  searchQuery: '',
  menuData: isBrowser ? (JSON.parse(localStorage.getItem('memo_menu_data')) || DEFAULT_MENU_DATA) : DEFAULT_MENU_DATA
};

// UI Translations Dictionary
export const UI_STRINGS = {
  tr: {
    cuisine: "Kebapçı",
    addressTitle: "Adres",
    hoursTitle: "Çalışma Saatleri",
    phoneTitle: "Telefon",
    btnRoute: "Yol Tarifi",
    btnCall: "Ara",
    btnOrder: "Sipariş Ver",
    searchPlaceholder: "Ürün veya açıklama ara...",
    openStatus: "Açık",
    closedStatus: "Kapalı",
    closesAt: "Kapanış 04:00",
    opensAt: "Açılış 08:00",
    footerAdmin: "Yönetici Paneli",
    detailCategory: "Kategori",
    statusInStock: "Mevcut",
    statusOutOfStock: "Tükendi",
    allCategory: "Tümü",
    authTitle: "Yönetici Girişi",
    authDesc: "Değişiklik yapmak için PIN kodunuzu girin.",
    btnCancel: "İptal",
    btnSubmit: "Giriş Yap",
    authError: "Hatalı PIN Kodu!",
    adminTitle: "Yönetici Paneli",
    adminTabProducts: "Ürünler",
    adminTabCategories: "Kategoriler",
    adminTabBackup: "Veri Aktarımı / Sıfırla",
    adminBtnAddProduct: "Yeni Ürün Ekle",
    adminBtnAddCategory: "Yeni Kategori Ekle",
    adminBtnQr: "QR Kod Üret",
    adminBtnLogout: "Çıkış",
    thName: "Ürün Adı",
    thCategory: "Kategori",
    thPrice: "Fiyat",
    thStatus: "Durum",
    thActions: "İşlemler",
    thCatId: "Kategori Kodu",
    thCatName: "Kategori Adı",
    thCatActions: "İşlemler",
    backupExportTitle: "Verileri Dışa Aktar",
    backupExportDesc: "Tüm menüyü, fiyatları ve kategorileri yedeklemek için bir .json dosyası olarak indirin.",
    backupImportTitle: "Verileri İçe Aktar",
    backupImportDesc: "Daha önce indirdiğiniz bir .json dosyasını yükleyerek menüyü güncelleyin.",
    backupResetTitle: "Varsayılana Sıfırla",
    backupResetDesc: "Yapılan tüm değişiklikleri silerek menüyü orijinal haline döndürün.",
    btnExport: "Dışa Aktar (JSON)",
    btnImportSelect: "Dosya Seç ve Yükle",
    btnReset: "Menüyü Sıfırla",
    resetConfirm: "Menüyü sıfırlamak istediğinize emin misiniz? Tüm özelleştirmeleriniz silinecektir.",
    qrModalTitle: "QR Kod Üret",
    qrModalDesc: "Bu QR kodu yazdırıp masalara koyabilirsiniz.",
    lblQrUrl: "Hedef URL",
    btnQrGenerate: "Üret",
    btnQrDownload: "QR Kod İndir (PNG)",
    formAddProduct: "Yeni Ürün Ekle",
    formEditProduct: "Ürün Düzenle",
    lblFormName: "Ürün Adı",
    lblFormDesc: "Ürün Açıklaması",
    lblFormCategory: "Kategori",
    lblFormPrice: "Fiyat",
    lblFormActive: "Stokta Mevcut",
    formAddCategory: "Yeni Kategori Ekle",
    formEditCategory: "Kategori Düzenle",
    lblFormCatId: "Kategori Kodu (Küçük harf, boşluksuz ID)",
    lblFormCatName: "Kategori Adı",
    lblFormSave: "Kaydet",
    otherCategory: "Diğer"
  },
  en: {
    cuisine: "Kebab Restaurant",
    addressTitle: "Address",
    hoursTitle: "Working Hours",
    phoneTitle: "Phone",
    btnRoute: "Directions",
    btnCall: "Call",
    btnOrder: "Order Online",
    searchPlaceholder: "Search product or description...",
    openStatus: "Open",
    closedStatus: "Closed",
    closesAt: "Closes at 04:00 AM",
    opensAt: "Opens at 08:00 AM",
    footerAdmin: "Admin Panel",
    detailCategory: "Category",
    statusInStock: "In Stock",
    statusOutOfStock: "Out of Stock",
    allCategory: "All",
    authTitle: "Admin Login",
    authDesc: "Enter your PIN code to make changes.",
    btnCancel: "Cancel",
    btnSubmit: "Login",
    authError: "Invalid PIN Code!",
    adminTitle: "Admin Panel",
    adminTabProducts: "Products",
    adminTabCategories: "Categories",
    adminTabBackup: "Data / Reset",
    adminBtnAddProduct: "Add Product",
    adminBtnAddCategory: "Add Category",
    adminBtnQr: "QR Code",
    adminBtnLogout: "Logout",
    thName: "Name",
    thCategory: "Category",
    thPrice: "Price",
    thStatus: "Status",
    thActions: "Actions",
    thCatId: "Category Code",
    thCatName: "Category Name",
    thCatActions: "Actions",
    backupExportTitle: "Export Data",
    backupExportDesc: "Download the entire menu, pricing, and categories as a backup .json file.",
    backupImportTitle: "Import Data",
    backupImportDesc: "Upload a previously downloaded .json file to restore or update your menu.",
    backupResetTitle: "Reset to Default",
    backupResetDesc: "Erase all edits and restore the menu back to its original state.",
    btnExport: "Export (JSON)",
    btnImportSelect: "Choose File & Upload",
    btnReset: "Reset Menu",
    resetConfirm: "Are you sure you want to reset the menu? All customizations will be lost.",
    qrModalTitle: "Generate QR Code",
    qrModalDesc: "Print this QR code and place it on your restaurant tables.",
    lblQrUrl: "Target URL",
    btnQrGenerate: "Generate",
    btnQrDownload: "Download QR (PNG)",
    formAddProduct: "Add Product",
    formEditProduct: "Edit Product",
    lblFormName: "Product Name",
    lblFormDesc: "Product Description",
    lblFormCategory: "Category",
    lblFormPrice: "Price",
    lblFormActive: "Available in Stock",
    formAddCategory: "Add Category",
    formEditCategory: "Edit Category",
    lblFormCatId: "Category Code (Lowercase, no spaces)",
    lblFormCatName: "Category Name",
    lblFormSave: "Save",
    otherCategory: "Other"
  },
  ru: {
    cuisine: "Кебабная",
    addressTitle: "Адрес",
    hoursTitle: "Часы работы",
    phoneTitle: "Телефон",
    btnRoute: "Маршрут",
    btnCall: "Позвонить",
    btnOrder: "Заказать",
    searchPlaceholder: "Поиск блюда или описания...",
    openStatus: "Открыто",
    closedStatus: "Закрыто",
    closesAt: "Закроется в 04:00",
    opensAt: "Откроется в 08:00",
    footerAdmin: "Панель управления",
    detailCategory: "Категория",
    statusInStock: "В наличии",
    statusOutOfStock: "Tükendi",
    allCategory: "Все",
    authTitle: "Вход администратора",
    authDesc: "Введите PIN-код для внесения изменений.",
    btnCancel: "Отмена",
    btnSubmit: "Войти",
    authError: "Неверный PIN-код!",
    adminTitle: "Панель управления",
    adminTabProducts: "Продукты",
    adminTabCategories: "Категории",
    adminTabBackup: "Резервная копия / Сброс",
    adminBtnAddProduct: "Добавить продукт",
    adminBtnAddCategory: "Добавить категорию",
    adminBtnQr: "QR-код",
    adminBtnLogout: "Выйти",
    thName: "Название",
    thCategory: "Категория",
    thPrice: "Цена",
    thStatus: "Статус",
    thActions: "Действия",
    thCatId: "Код категории",
    thCatName: "Название категории",
    thCatActions: "Действия",
    backupExportTitle: "Экспорт данных",
    backupExportDesc: "Скачать всё меню, цены и категории в виде резервного файла .json.",
    backupImportTitle: "Импорт данных",
    backupImportDesc: "Загрузить ранее скачанный файл .json, чтобы восстановить меню.",
    backupResetTitle: "Сбросить настройки",
    backupResetDesc: "Удалить все изменения и вернуть меню к первоначальному состоянию.",
    btnExport: "Экспорт (JSON)",
    btnImportSelect: "Выбрать файл и загрузить",
    btnReset: "Сбросить меню",
    resetConfirm: "Вы уверены, что хотите сбросить меню? Все внесенные изменения будут удалены.",
    qrModalTitle: "Создать QR-код",
    qrModalDesc: "Распечатайте этот QR-код и разместите его на столах.",
    lblQrUrl: "Целевой URL",
    btnQrGenerate: "Создать",
    btnQrDownload: "Скачать QR (PNG)",
    formAddProduct: "Добавить товар",
    formEditProduct: "Редактировать товар",
    lblFormName: "Название товара",
    lblFormDesc: "Описание товара",
    lblFormCategory: "Категория",
    lblFormPrice: "Цена",
    lblFormActive: "В наличии на складе",
    formAddCategory: "Добавить категорию",
    formEditCategory: "Редактировать категорию",
    lblFormCatId: "Код категории (строчные буквы, без пробелов)",
    lblFormCatName: "Название категории",
    lblFormSave: "Сохранить",
    otherCategory: "Другое"
  }
};

// ================= HELPER FUNCTIONS =================

// Translation fallback logic
export function getTranslation(item, lang, field) {
  if (item && item.translations) {
    if (item.translations[lang] && item.translations[lang][field]) {
      return item.translations[lang][field];
    }
    // Fallback to Turkish
    if (item.translations['tr'] && item.translations['tr'][field]) {
      return item.translations['tr'][field];
    }
  }
  return '';
}

// Calculate open/closed status (Restaurant is closed 04:00 - 08:00)
export function checkIsOpen(currentHour, currentMinute) {
  if (currentHour >= 4 && currentHour < 8) {
    return false;
  }
  return true;
}

// Save dynamic menuState to local storage
export function saveState() {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('memo_menu_data', JSON.stringify(state.menuData));
  }
}

// ================= RENDER FUNCTIONS =================

// Update all static text based on selected language
export function renderLanguageStrings() {
  const t = UI_STRINGS[state.lang];
  
  // Header Info
  document.getElementById('cuisine-text').innerText = t.cuisine;
  document.getElementById('info-address-title').innerText = t.addressTitle;
  document.getElementById('info-hours-title').innerText = t.hoursTitle;
  document.getElementById('info-phone-title').innerText = t.phoneTitle;
  document.getElementById('btn-route').innerText = t.btnRoute;
  document.getElementById('btn-call').innerText = t.btnCall;
  document.getElementById('btn-order').innerText = t.btnOrder;
  
  // Search
  document.getElementById('search-input').placeholder = t.searchPlaceholder;
  
  // Footer
  document.getElementById('footer-admin-text').innerText = t.footerAdmin;

  // Language Code Label
  document.getElementById('current-lang-code').innerText = state.lang.toUpperCase();

  // Auth Modal
  document.getElementById('auth-title').innerText = t.authTitle;
  document.getElementById('auth-desc').innerText = t.authDesc;
  document.getElementById('cancel-auth').innerText = t.btnCancel;
  document.getElementById('btn-auth-submit').innerText = t.btnSubmit;
  document.getElementById('auth-error').innerText = t.authError;

  // Admin Dashboard Modals
  document.getElementById('admin-title').innerText = t.adminTitle;
  document.getElementById('admin-tab-products-btn').innerText = t.adminTabProducts;
  document.getElementById('admin-tab-categories-btn').innerText = t.adminTabCategories;
  document.getElementById('admin-tab-backup-btn').innerText = t.adminTabBackup;
  document.getElementById('admin-btn-add-product').innerText = t.adminBtnAddProduct;
  document.getElementById('admin-btn-add-category').innerText = t.adminBtnAddCategory;
  document.getElementById('admin-btn-qr-view').innerText = t.adminBtnQr;
  document.getElementById('admin-btn-logout').innerText = t.adminBtnLogout;

  // Table Headers
  document.getElementById('th-name').innerText = t.thName;
  document.getElementById('th-category').innerText = t.thCategory;
  document.getElementById('th-price').innerText = t.thPrice;
  document.getElementById('th-status').innerText = t.thStatus;
  document.getElementById('th-actions').innerText = t.thActions;
  
  document.getElementById('th-cat-id').innerText = t.thCatId;
  document.getElementById('th-cat-name').innerText = t.thCatName;
  document.getElementById('th-cat-actions').innerText = t.thCatActions;

  // Backup Tab
  document.getElementById('backup-export-title').innerText = t.backupExportTitle;
  document.getElementById('backup-export-desc').innerText = t.backupExportDesc;
  document.getElementById('backup-import-title').innerText = t.backupImportTitle;
  document.getElementById('backup-import-desc').innerText = t.backupImportDesc;
  document.getElementById('backup-reset-title').innerText = t.backupResetTitle;
  document.getElementById('backup-reset-desc').innerText = t.backupResetDesc;
  
  document.getElementById('export-json-btn').querySelector('span').innerText = t.btnExport;
  document.getElementById('import-file-input').previousElementSibling.querySelector('span').innerText = t.btnImportSelect;
  document.getElementById('reset-db-btn').querySelector('span').innerText = t.btnReset;

  // QR Modal
  document.getElementById('qr-modal-title').innerText = t.qrModalTitle;
  document.getElementById('qr-modal-desc').innerText = t.qrModalDesc;
  document.getElementById('lbl-qr-url').innerText = t.lblQrUrl;
  document.getElementById('btn-generate-qr').innerText = t.btnQrGenerate;
  document.getElementById('download-qr-btn').querySelector('span').innerText = t.btnQrDownload;

  // Product Edit Modal
  document.getElementById('lbl-form-category').innerText = t.lblFormCategory + " *";
  document.getElementById('lbl-form-price').innerText = t.lblFormPrice + " (TRY) *";
  document.getElementById('lbl-form-active').innerText = t.lblFormActive;
  document.getElementById('cancel-product-form').innerText = t.btnCancel;
  document.getElementById('btn-product-save').innerText = t.lblFormSave;

  // Category Edit Modal
  document.getElementById('group-cat-id').querySelector('label').innerText = t.lblFormCatId + " *";
  document.getElementById('category-name-tr').previousElementSibling.innerText = t.lblFormCatName + " (TR) *";
  document.getElementById('category-name-en').previousElementSibling.innerText = t.lblFormCatName + " (EN)";
  document.getElementById('category-name-ru').previousElementSibling.innerText = t.lblFormCatName + " (RU)";
  document.getElementById('cancel-category-form').innerText = t.btnCancel;
  document.getElementById('btn-category-save').innerText = t.lblFormSave;
  
  // Trigger banners and active tags update
  updateOpeningStatus();
  renderCategoryTabs();
  renderMenuGrid();
}

// Update the Top Banner dynamic opening hours status
export function updateOpeningStatus() {
  const now = new Date();
  const isOpen = checkIsOpen(now.getHours(), now.getMinutes());
  const t = UI_STRINGS[state.lang];
  const banner = document.getElementById('status-banner');
  const text = document.getElementById('status-banner-text');

  if (isOpen) {
    banner.className = "status-banner open";
    text.innerText = `${t.openStatus} • ${t.closesAt}`;
  } else {
    banner.className = "status-banner closed";
    text.innerText = `${t.closedStatus} • ${t.opensAt}`;
  }
}

// Render horizontal swipeable tabs
export function renderCategoryTabs() {
  const tabsContainer = document.getElementById('categories-tabs');
  if (!tabsContainer) return;

  const t = UI_STRINGS[state.lang];
  
  let html = `
    <button class="category-tab ${state.activeCategory === 'all' ? 'active' : ''}" data-cat-id="all">
      ${t.allCategory}
    </button>
  `;

  state.menuData.categories.forEach(cat => {
    const activeClass = state.activeCategory === cat.id ? 'active' : '';
    const name = cat.translations[state.lang] || cat.translations['tr'] || cat.id;
    html += `
      <button class="category-tab ${activeClass}" data-cat-id="${cat.id}">
        ${name}
      </button>
    `;
  });

  tabsContainer.innerHTML = html;

  // Re-attach click events
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelector('.category-tab.active')?.classList.remove('active');
      tab.classList.add('active');
      state.activeCategory = tab.dataset.catId;
      renderMenuGrid();
    });
  });
}

// Render dynamic Kebab items cards in customers grid
export function renderMenuGrid() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const items = state.menuData.items;
  const categories = state.menuData.categories;
  const query = state.searchQuery.toLowerCase().trim();
  const t = UI_STRINGS[state.lang];

  let filtered = items;

  // Filter 1: Category Selection
  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(item => item.category === state.activeCategory);
  }

  // Filter 2: Search String Query
  if (query) {
    filtered = filtered.filter(item => {
      const name = getTranslation(item, state.lang, 'name').toLowerCase();
      const desc = getTranslation(item, state.lang, 'description').toLowerCase();
      
      // Fallback searches
      const trName = getTranslation(item, 'tr', 'name').toLowerCase();
      const trDesc = getTranslation(item, 'tr', 'description').toLowerCase();

      return name.includes(query) || desc.includes(query) || trName.includes(query) || trDesc.includes(query);
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
        <i data-lucide="search-code" style="width: 48px; height: 48px; stroke-width: 1.5; margin-bottom: 12px; color: var(--text-muted);"></i>
        <p style="font-weight: 600;">${state.lang === 'tr' ? 'Sonuç bulunamadı' : state.lang === 'ru' ? 'Результатов не найдено' : 'No results found'}</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const name = getTranslation(item, state.lang, 'name');
    const desc = getTranslation(item, state.lang, 'description');
    
    // Find category name
    const itemCat = categories.find(c => c.id === item.category);
    const catName = itemCat ? (itemCat.translations[state.lang] || itemCat.translations['tr']) : t.otherCategory;

    const outOfStockClass = item.active ? '' : 'item-out-of-stock';
    const statusText = item.active ? t.statusInStock : t.statusOutOfStock;
    const statusClass = item.active ? 'in-stock' : 'out-of-stock';

    html += `
      <div class="menu-card ${outOfStockClass}" data-item-id="${item.id}">
        <div class="card-top">
          <span class="card-category">${catName}</span>
          <div class="card-title-row">
            <h3 class="card-title">${name}</h3>
          </div>
          <p class="card-desc" title="${desc}">${desc}</p>
        </div>
        <div class="card-bottom">
          <span class="card-price">${item.price.toFixed(2)} TRY</span>
          <span class="status-tag ${statusClass}">${statusText}</span>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;

  // Re-attach card detail click trigger
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.itemId;
      const item = items.find(i => i.id === id);
      if (item) {
        showItemDetailModal(item);
      }
    });
  });
}

// Show the card overlay details modal
function showItemDetailModal(item) {
  const modal = document.getElementById('detail-modal');
  const t = UI_STRINGS[state.lang];

  const itemCat = state.menuData.categories.find(c => c.id === item.category);
  const catName = itemCat ? (itemCat.translations[state.lang] || itemCat.translations['tr']) : t.otherCategory;

  document.getElementById('detail-category').innerText = catName;
  document.getElementById('detail-title').innerText = getTranslation(item, state.lang, 'name');
  document.getElementById('detail-description').innerText = getTranslation(item, state.lang, 'description');
  document.getElementById('detail-price').innerText = `${item.price.toFixed(2)} TRY`;

  const statusEl = document.getElementById('detail-status');
  if (item.active) {
    statusEl.className = "status-tag in-stock";
    statusEl.innerText = t.statusInStock;
  } else {
    statusEl.className = "status-tag out-of-stock";
    statusEl.innerText = t.statusOutOfStock;
  }

  modal.classList.add('show');
}

// ================= EVENT LISTENERS & LIFECYCLE =================

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Theme initialization
    document.documentElement.setAttribute('data-theme', state.theme);

    // Initialize UI strings
    renderLanguageStrings();

    // Initialize Lucide Icons
    lucide.createIcons();

    // Search input events
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');

    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (state.searchQuery) {
        clearBtn.style.display = 'flex';
      } else {
        clearBtn.style.display = 'none';
      }
      renderMenuGrid();
    });

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearBtn.style.display = 'none';
      renderMenuGrid();
      searchInput.focus();
    });

    // Language selectors
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        document.querySelector('.lang-option.active')?.classList.remove('active');
        opt.classList.add('active');
        state.lang = opt.dataset.lang;
        localStorage.setItem('memo_menu_lang', state.lang);
        langMenu.classList.remove('show');
        renderLanguageStrings();
      });
    });

    // Theme selector toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('memo_menu_theme', state.theme);
    });

    // Closing detail modals
    document.getElementById('close-detail-modal').addEventListener('click', () => {
      document.getElementById('detail-modal').classList.remove('show');
    });

    document.getElementById('detail-modal').addEventListener('click', (e) => {
      if (e.target.id === 'detail-modal') {
        document.getElementById('detail-modal').classList.remove('show');
      }
    });

    // Order dropdown toggle
    const orderBtn = document.getElementById('order-btn');
    const orderMenu = document.getElementById('order-menu');

    orderBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      orderMenu.classList.toggle('show');
    });

    // Close menus when clicking outside
    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
      orderMenu.classList.remove('show');
    });

    // Update hours status banner periodically
    setInterval(updateOpeningStatus, 60000);
  });
}
