import { state, saveState, renderMenuGrid, renderCategoryTabs, getTranslation, UI_STRINGS } from './app.js';

// ================= ADMIN HELPERS & ACTIONS =================

// Helper to generate a unique item ID
function generateId(nameTr) {
  return nameTr.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '') + '-' + Math.floor(Math.random() * 1000);
}

// Check PIN and toggle authorization state
export function verifyPin(pin) {
  return pin === "1234";
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
  
  saveState();
}

// Delete a product
export function deleteProduct(productId) {
  state.menuData.items = state.menuData.items.filter(i => i.id !== productId);
  saveState();
}

// Toggle product active status
export function toggleProductStatus(productId) {
  const item = state.menuData.items.find(i => i.id === productId);
  if (item) {
    item.active = !item.active;
    saveState();
  }
  return item;
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

// Close product form modal
function hideProductForm() {
  document.getElementById('product-form-modal').classList.remove('show');
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
  });
}
