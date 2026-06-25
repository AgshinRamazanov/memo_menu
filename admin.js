import { state, saveState, renderMenuGrid, renderCategoryTabs, getTranslation, UI_STRINGS } from './app.js';
import { DEFAULT_MENU_DATA } from './data.js';

// ================= GLOBAL STATE =================
let authenticatedPin = '';

// ================= ADMIN HELPERS & ACTIONS =================

// Helper to generate a unique item ID
function generateId(nameTr) {
  return nameTr.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '') + '-' + Math.floor(Math.random() * 1000);
}

// Check PIN and toggle authorization state
export function verifyPin(pin) {
  const isValid = pin === "memotek7073";
  if (isValid) {
    authenticatedPin = pin;
  }
  return isValid;
}

// Add a new product or update an existing one
export function saveProduct(productData) {
  const items = state.menuData.items;
  
  if (productData.id) {
    // Edit existing product
    const index = items.findIndex(i => i.id === productData.id);
    if (index !== -1) {
      items[index] = { ...items[index], ...productData };
    }
  } else {
    // Create new product
    const newProduct = {
      id: generateId(productData.translations.tr.name),
      ...productData
    };
    items.push(newProduct);
  }
  
  saveState(authenticatedPin);
}

// Delete a product
export function deleteProduct(productId) {
  state.menuData.items = state.menuData.items.filter(i => i.id !== productId);
  saveState(authenticatedPin);
}

// Toggle product active status
export function toggleProductStatus(productId) {
  const item = state.menuData.items.find(i => i.id === productId);
  if (item) {
    item.active = !item.active;
    saveState(authenticatedPin);
  }
  return item;
}

// Add or edit a category
export function saveCategory(categoryData) {
  const categories = state.menuData.categories;
  const isEdit = categoryData.isEdit;

  if (isEdit) {
    // Edit existing category
    const index = categories.findIndex(c => c.id === categoryData.id);
    if (index !== -1) {
      categories[index].translations = categoryData.translations;
    }
  } else {
    // Add new category
    categories.push({
      id: categoryData.id,
      translations: categoryData.translations
    });
  }

  saveState(authenticatedPin);
}

// Delete a category and reassociate products
export function deleteCategory(categoryId) {
  state.menuData.categories = state.menuData.categories.filter(c => c.id !== categoryId);
  
  // Reassociate products
  const hasItems = state.menuData.items.some(i => i.category === categoryId);
  if (hasItems) {
    const otherExists = state.menuData.categories.some(c => c.id === 'other');
    if (!otherExists) {
      state.menuData.categories.push({
        id: 'other',
        translations: { tr: 'Diğer', en: 'Other', ru: 'Другое' }
      });
    }
    state.menuData.items.forEach(item => {
      if (item.category === categoryId) {
        item.category = 'other';
      }
    });
  }

  saveState(authenticatedPin);
}

// ================= DOM HANDLERS =================

export function renderAdminProducts() {
  const tbody = document.getElementById('admin-products-list');
  if (!tbody) return;

  const items = state.menuData.items;
  const categories = state.menuData.categories;
  const t = UI_STRINGS[state.lang];

  let html = '';
  items.forEach(item => {
    const name = getTranslation(item, state.lang, 'name');
    const itemCat = categories.find(c => c.id === item.category);
    const catName = itemCat ? (itemCat.translations[state.lang] || itemCat.translations['tr']) : t.otherCategory;

    html += `
      <tr data-row-id="${item.id}">
        <td style="font-weight: 600;">${name}</td>
        <td><span class="status-tag in-stock" style="background-color: var(--accent-light); color: var(--accent-color);">${catName}</span></td>
        <td style="font-weight: 700;">${item.price.toFixed(2)} TRY</td>
        <td>
          <label class="switch">
            <input type="checkbox" class="admin-status-toggle" data-item-id="${item.id}" ${item.active ? 'checked' : ''}>
            <span class="slider round"></span>
          </label>
        </td>
        <td>
          <div class="admin-action-btns">
            <button class="action-icon-btn edit-btn" data-item-id="${item.id}" title="Düzenle">
              <i data-lucide="pencil"></i>
            </button>
            <button class="action-icon-btn delete-btn" data-item-id="${item.id}" title="Sil">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  lucide.createIcons();

  // Attach status toggle listeners
  tbody.querySelectorAll('.admin-status-toggle').forEach(chk => {
    chk.addEventListener('change', () => {
      toggleProductStatus(chk.dataset.itemId);
      renderMenuGrid(); // Update customer list immediately
    });
  });

  // Attach Edit action listeners
  tbody.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = items.find(i => i.id === btn.dataset.itemId);
      if (item) {
        showProductForm(item);
      }
    });
  });

  // Attach Delete action listeners
  tbody.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const confirmMsg = state.lang === 'tr' ? 'Bu ürünü silmek istediğinize emin misiniz?' : state.lang === 'ru' ? 'Вы уверены, что хотите удалить этот продукт?' : 'Are you sure you want to delete this product?';
      if (confirm(confirmMsg)) {
        deleteProduct(btn.dataset.itemId);
        renderAdminProducts();
        renderMenuGrid();
      }
    });
  });
}

export function renderAdminCategories() {
  const tbody = document.getElementById('admin-categories-list');
  if (!tbody) return;

  const categories = state.menuData.categories;
  const t = UI_STRINGS[state.lang];

  let html = '';
  categories.forEach(cat => {
    const name = cat.translations[state.lang] || cat.translations['tr'] || cat.id;

    html += `
      <tr data-cat-row-id="${cat.id}">
        <td style="font-family: monospace; font-weight: bold; color: var(--accent-color);">${cat.id}</td>
        <td style="font-weight: 600;">${name}</td>
        <td>
          <div class="admin-action-btns">
            <button class="action-icon-btn cat-edit-btn" data-cat-id="${cat.id}" title="Düzenle">
              <i data-lucide="pencil"></i>
            </button>
            <button class="action-icon-btn cat-delete-btn" data-cat-id="${cat.id}" title="Sil">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  lucide.createIcons();

  // Attach Edit action listeners
  tbody.querySelectorAll('.cat-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = categories.find(c => c.id === btn.dataset.catId);
      if (cat) {
        showCategoryForm(cat);
      }
    });
  });

  // Attach Delete action listeners
  tbody.querySelectorAll('.cat-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const confirmMsg = state.lang === 'tr' 
        ? 'Bu kategoriyi silmek istediğinize emin misiniz? Bu kategorideki tüm ürünler "Diğer" kategorisine aktarılacaktır.' 
        : state.lang === 'ru' 
        ? 'Вы уверены, что хотите удалить эту категорию? Все продукты из нее будут перемещены в категорию "Другое".' 
        : 'Are you sure you want to delete this category? All products in it will be moved to the "Other" category.';
      
      if (confirm(confirmMsg)) {
        deleteCategory(btn.dataset.catId);
        renderAdminCategories();
        renderMenuGrid();
        renderCategoryTabs();
      }
    });
  });
}

// Populate product select options in category field
export function populateCategoryDropdown() {
  const select = document.getElementById('product-category-select');
  if (!select) return;

  let html = '';
  state.menuData.categories.forEach(cat => {
    const name = cat.translations[state.lang] || cat.translations['tr'];
    html += `<option value="${cat.id}">${name}</option>`;
  });
  select.innerHTML = html;
}

// Display product add/edit modal form
function showProductForm(item = null) {
  const modal = document.getElementById('product-form-modal');
  const t = UI_STRINGS[state.lang];
  
  populateCategoryDropdown();

  // Reset tab selection
  document.querySelectorAll('#product-form-modal .form-tab-btn').forEach((btn, idx) => {
    if (idx === 0) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  document.querySelectorAll('#product-form-modal .lang-group').forEach((group) => {
    if (group.dataset.langGroup === 'tr') group.style.display = 'block';
    else group.style.display = 'none';
  });

  if (item) {
    // Editing existing product
    document.getElementById('product-form-title').innerText = t.formEditProduct;
    document.getElementById('edit-product-id').value = item.id;
    
    document.getElementById('product-name-tr').value = item.translations.tr?.name || '';
    document.getElementById('product-name-en').value = item.translations.en?.name || '';
    document.getElementById('product-name-ru').value = item.translations.ru?.name || '';
    
    document.getElementById('product-desc-tr').value = item.translations.tr?.description || '';
    document.getElementById('product-desc-en').value = item.translations.en?.description || '';
    document.getElementById('product-desc-ru').value = item.translations.ru?.description || '';
    
    document.getElementById('product-category-select').value = item.category;
    document.getElementById('product-price-input').value = item.price;
    document.getElementById('product-active-checkbox').checked = item.active;
  } else {
    // Adding new product
    document.getElementById('product-form-title').innerText = t.formAddProduct;
    document.getElementById('edit-product-id').value = '';
    
    document.getElementById('product-name-tr').value = '';
    document.getElementById('product-name-en').value = '';
    document.getElementById('product-name-ru').value = '';
    
    document.getElementById('product-desc-tr').value = '';
    document.getElementById('product-desc-en').value = '';
    document.getElementById('product-desc-ru').value = '';
    
    document.getElementById('product-category-select').selectedIndex = 0;
    document.getElementById('product-price-input').value = '';
    document.getElementById('product-active-checkbox').checked = true;
  }

  modal.classList.add('show');
}

function hideProductForm() {
  document.getElementById('product-form-modal').classList.remove('show');
}

// Display category add/edit modal form
function showCategoryForm(cat = null) {
  const modal = document.getElementById('category-form-modal');
  const t = UI_STRINGS[state.lang];

  if (cat) {
    // Edit existing category
    document.getElementById('category-form-title').innerText = t.formEditCategory;
    document.getElementById('edit-category-id-hidden').value = cat.id;
    
    document.getElementById('category-id-input').value = cat.id;
    document.getElementById('category-id-input').disabled = true; // Cannot edit code after creation
    
    document.getElementById('category-name-tr').value = cat.translations.tr || '';
    document.getElementById('category-name-en').value = cat.translations.en || '';
    document.getElementById('category-name-ru').value = cat.translations.ru || '';
  } else {
    // Add new category
    document.getElementById('category-form-title').innerText = t.formAddCategory;
    document.getElementById('edit-category-id-hidden').value = '';
    
    document.getElementById('category-id-input').value = '';
    document.getElementById('category-id-input').disabled = false;
    
    document.getElementById('category-name-tr').value = '';
    document.getElementById('category-name-en').value = '';
    document.getElementById('category-name-ru').value = '';
  }

  modal.classList.add('show');
}

function hideCategoryForm() {
  document.getElementById('category-form-modal').classList.remove('show');
}

export async function resetState(pin) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('memo_menu_data');
  }
  if (pin && typeof window !== 'undefined' && typeof fetch !== 'undefined') {
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

// ================= LIFE CYCLE ATTACHMENT =================

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const authModal = document.getElementById('auth-modal');
    const adminModal = document.getElementById('admin-modal');
    const authForm = document.getElementById('auth-form');
    const pinInput = document.getElementById('pin-input');
    const authError = document.getElementById('auth-error');

    // Admin Login Trigger
    document.getElementById('admin-login-btn').addEventListener('click', () => {
      pinInput.value = '';
      authError.style.display = 'none';
      authModal.classList.add('show');
      setTimeout(() => pinInput.focus(), 200);
    });

    // Close Auth modal
    document.getElementById('cancel-auth').addEventListener('click', () => {
      authModal.classList.remove('show');
    });

    // Form Submission PIN validation
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (verifyPin(pinInput.value)) {
        authModal.classList.remove('show');
        renderAdminProducts();
        renderAdminCategories();
        adminModal.classList.add('show');
      } else {
        authError.style.display = 'block';
        pinInput.value = '';
        pinInput.focus();
      }
    });

    // Admin Tab Navigation Switches
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.admin-tab-btn.active').classList.remove('active');
        document.querySelector('.admin-tab-content.active').classList.remove('active');
        
        btn.classList.add('active');
        document.getElementById(`admin-tab-${btn.dataset.adminTab}`).classList.add('active');

        // Draw tab content specifically
        if (btn.dataset.adminTab === 'products') {
          renderAdminProducts();
        } else if (btn.dataset.adminTab === 'categories') {
          renderAdminCategories();
        }
      });
    });

    // Admin Logout Trigger
    document.getElementById('admin-logout-btn').addEventListener('click', () => {
      adminModal.classList.remove('show');
    });

    // Add Product Trigger
    document.getElementById('add-product-btn').addEventListener('click', () => {
      showProductForm();
    });

    // Close Product form modal triggers
    document.getElementById('close-product-form-modal').addEventListener('click', hideProductForm);
    document.getElementById('cancel-product-form').addEventListener('click', hideProductForm);

    // Product translation form tabs
    document.querySelectorAll('#product-form-modal .form-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('#product-form-modal .form-tab-btn.active').classList.remove('active');
        btn.classList.add('active');
        
        document.querySelectorAll('#product-form-modal .lang-group').forEach(group => {
          if (group.dataset.langGroup === btn.dataset.formLang) {
            group.style.display = 'block';
          } else {
            group.style.display = 'none';
          }
        });
      });
    });

    // Product Edit Form submission
    document.getElementById('product-edit-form').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const id = document.getElementById('edit-product-id').value;
      const nameTr = document.getElementById('product-name-tr').value;
      const nameEn = document.getElementById('product-name-en').value || nameTr;
      const nameRu = document.getElementById('product-name-ru').value || nameTr;

      const descTr = document.getElementById('product-desc-tr').value;
      const descEn = document.getElementById('product-desc-en').value || descTr;
      const descRu = document.getElementById('product-desc-ru').value || descTr;

      const category = document.getElementById('product-category-select').value;
      const price = parseFloat(document.getElementById('product-price-input').value);
      const active = document.getElementById('product-active-checkbox').checked;

      const productData = {
        category,
        price,
        active,
        translations: {
          tr: { name: nameTr, description: descTr },
          en: { name: nameEn, description: descEn },
          ru: { name: nameRu, description: descRu }
        }
      };

      if (id) {
        productData.id = id;
      }

      saveProduct(productData);
      hideProductForm();
      renderAdminProducts();
      renderMenuGrid();
    });

    // Add Category Trigger
    document.getElementById('add-category-btn').addEventListener('click', () => {
      showCategoryForm();
    });

    // Close Category Form modal triggers
    document.getElementById('close-category-form-modal').addEventListener('click', hideCategoryForm);
    document.getElementById('cancel-category-form').addEventListener('click', hideCategoryForm);

    // Category form submission
    document.getElementById('category-edit-form').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const editId = document.getElementById('edit-category-id-hidden').value;
      const idInput = document.getElementById('category-id-input').value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      const nameTr = document.getElementById('category-name-tr').value;
      const nameEn = document.getElementById('category-name-en').value || nameTr;
      const nameRu = document.getElementById('category-name-ru').value || nameTr;

      const isEdit = !!editId;
      const id = isEdit ? editId : idInput;

      const categoryData = {
        id,
        isEdit,
        translations: {
          tr: nameTr,
          en: nameEn,
          ru: nameRu
        }
      };

      saveCategory(categoryData);
      hideCategoryForm();
      renderAdminCategories();
      renderCategoryTabs();
      renderMenuGrid();
    });

    // ================= BACKUP & QR CODE ACTIONS =================

    // Export JSON file
    document.getElementById('export-json-btn').addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.menuData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "tek_durumcu_memo_menu.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });

    // Import JSON file
    const fileInput = document.getElementById('import-file-input');
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

    // Reset Database back to defaults
    document.getElementById('reset-db-btn').addEventListener('click', async () => {
      const confirmMsg = UI_STRINGS[state.lang].resetConfirm;
      if (confirm(confirmMsg)) {
        await resetState(authenticatedPin);
        window.location.reload();
      }
    });

    // QR Code instance manager
    let qrCodeInstance = null;

    function generateQRCode(url) {
      const container = document.getElementById('qrcode');
      container.innerHTML = ''; // Clear previous
      qrCodeInstance = new QRCode(container, {
        text: url,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    }

    // QR Modal Trigger
    const qrModal = document.getElementById('qr-modal');
    document.getElementById('admin-qr-btn').addEventListener('click', () => {
      const defaultUrl = window.location.href;
      document.getElementById('qr-url-input').value = defaultUrl;
      generateQRCode(defaultUrl);
      qrModal.classList.add('show');
    });

    document.getElementById('close-qr-modal').addEventListener('click', () => {
      qrModal.classList.remove('show');
    });

    document.getElementById('btn-generate-qr').addEventListener('click', () => {
      const url = document.getElementById('qr-url-input').value;
      if (url) {
        generateQRCode(url);
      }
    });

    // Download QR Code image
    document.getElementById('download-qr-btn').addEventListener('click', () => {
      const canvas = document.querySelector('#qrcode canvas');
      const img = document.querySelector('#qrcode img');
      let dataUrl = '';
      
      if (canvas) {
        dataUrl = canvas.toDataURL("image/png");
      } else if (img) {
        dataUrl = img.src;
      }
      
      if (dataUrl) {
        const link = document.createElement('a');
        link.download = 'memo_menu_qrcode.png';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  });
}

if (typeof window !== 'undefined') {
  window.renderAdminProducts = renderAdminProducts;
  window.renderAdminCategories = renderAdminCategories;
}
