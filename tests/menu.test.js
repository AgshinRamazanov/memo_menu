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

  // Verify new categories and removal of 'izgaralar'
  const catIds = DEFAULT_MENU_DATA.categories.map(c => c.id);
  assert.ok(catIds.includes('pideler'), 'Category pideler must exist');
  assert.ok(!catIds.includes('izgaralar'), 'Category izgaralar must be removed');

  // Verify specific new items
  const itemIds = DEFAULT_MENU_DATA.items.map(i => i.id);
  assert.ok(itemIds.includes('kusbasili-pide'), 'kusbasili-pide must exist');
  assert.ok(itemIds.includes('cig-kofte'), 'cig-kofte must exist');
  assert.ok(itemIds.includes('turk-kahvesi'), 'turk-kahvesi must exist');
  assert.ok(!itemIds.includes('dimes-karisik'), 'dimes-karisik must be consolidated');
  assert.ok(!itemIds.includes('dimes-seftali'), 'dimes-seftali must be consolidated');
  assert.ok(!itemIds.includes('meysu-cola-1l'), 'meysu-cola-1l must be removed');

  // Verify updated prices and names
  const adanaKebap = DEFAULT_MENU_DATA.items.find(i => i.id === 'adana-kebap');
  assert.strictEqual(adanaKebap.price, 590);
  assert.strictEqual(adanaKebap.translations.tr.name, 'Adana Kebap (170 gr)');

  const adanaDurum = DEFAULT_MENU_DATA.items.find(i => i.id === 'adana-durum');
  assert.strictEqual(adanaDurum.price, 330);
  assert.strictEqual(adanaDurum.translations.tr.name, 'Adana Dürüm (85 gr)');
});

test('Translation fallback returns target language or defaults to Turkish', () => {
  const mockItem = {
    translations: {
      tr: { name: 'Adana Kebap', description: 'Lezzetli' },
      en: { name: 'Adana Kebab' }, // missing description
      ru: {} // missing both
    }
  };
  
  assert.strictEqual(getTranslation(mockItem, 'en', 'name'), 'Adana Kebab');
  assert.strictEqual(getTranslation(mockItem, 'en', 'description'), 'Lezzetli'); // fallback
  assert.strictEqual(getTranslation(mockItem, 'ru', 'name'), 'Adana Kebap'); // fallback
  assert.strictEqual(getTranslation(mockItem, 'tr', 'name'), 'Adana Kebap');
});

test('checkIsOpen determines if restaurant is open based on hours (08:00 - 04:00)', () => {
  // Opens 08:00, Closes 04:00 next day.
  // Closed from 04:00 to 08:00.
  
  assert.strictEqual(checkIsOpen(9, 0), true, '09:00 should be open');
  assert.strictEqual(checkIsOpen(23, 30), true, '23:30 should be open');
  assert.strictEqual(checkIsOpen(2, 0), true, '02:00 should be open');
  assert.strictEqual(checkIsOpen(3, 59), true, '03:59 should be open');
  
  assert.strictEqual(checkIsOpen(4, 0), false, '04:00 should be closed');
  assert.strictEqual(checkIsOpen(5, 30), false, '05:30 should be closed');
  assert.strictEqual(checkIsOpen(7, 59), false, '07:59 should be closed');
  
  assert.strictEqual(checkIsOpen(8, 0), true, '08:00 should be open');
});

test('verifyPin checks PIN successfully', () => {
  assert.strictEqual(verifyPin('memotek7073'), true);
  assert.strictEqual(verifyPin('4321'), false);
});

test('saveProduct adds new and edits existing products', () => {
  const initialLength = state.menuData.items.length;
  
  // Add product
  const newProd = {
    category: 'kebaplar',
    price: 300,
    active: true,
    translations: {
      tr: { name: 'Test Kebap', description: 'Test Açıklama' }
    }
  };
  
  saveProduct(newProd);
  
  assert.strictEqual(state.menuData.items.length, initialLength + 1);
  const added = state.menuData.items[state.menuData.items.length - 1];
  assert.strictEqual(added.price, 300);
  assert.strictEqual(added.translations.tr.name, 'Test Kebap');
  assert.ok(added.id);

  // Edit product
  const updatedData = {
    id: added.id,
    category: 'kebaplar',
    price: 350,
    active: false,
    translations: {
      tr: { name: 'Güncellenmiş Kebap', description: 'Yeni Açıklama' }
    }
  };
  
  saveProduct(updatedData);
  
  const edited = state.menuData.items.find(i => i.id === added.id);
  assert.strictEqual(edited.price, 350);
  assert.strictEqual(edited.active, false);
  assert.strictEqual(edited.translations.tr.name, 'Güncellenmiş Kebap');
});

test('toggleProductStatus switches active state', () => {
  const item = state.menuData.items[0];
  const initialActive = item.active;
  
  const toggled = toggleProductStatus(item.id);
  
  assert.strictEqual(toggled.active, !initialActive);
  
  // Toggle back
  toggleProductStatus(item.id);
  assert.strictEqual(item.active, initialActive);
});

test('deleteProduct deletes a product', () => {
  const itemToDelete = state.menuData.items[0];
  const initialLength = state.menuData.items.length;
  
  deleteProduct(itemToDelete.id);
  
  assert.strictEqual(state.menuData.items.length, initialLength - 1);
  const found = state.menuData.items.find(i => i.id === itemToDelete.id);
  assert.strictEqual(found, undefined);
});

test('saveCategory adds new and edits existing categories', () => {
  const initialLength = state.menuData.categories.length;
  
  // Add category
  const newCat = {
    id: 'test-cat',
    isEdit: false,
    translations: {
      tr: 'Test Kategori',
      en: 'Test Category',
      ru: 'Тест Категория'
    }
  };
  
  saveCategory(newCat);
  
  assert.strictEqual(state.menuData.categories.length, initialLength + 1);
  const added = state.menuData.categories.find(c => c.id === 'test-cat');
  assert.strictEqual(added.translations.tr, 'Test Kategori');
  assert.strictEqual(added.translations.en, 'Test Category');

  // Edit category
  const updatedCat = {
    id: 'test-cat',
    isEdit: true,
    translations: {
      tr: 'Yeni Kategori',
      en: 'New Category',
      ru: 'Новая Категория'
    }
  };
  
  saveCategory(updatedCat);
  
  const edited = state.menuData.categories.find(c => c.id === 'test-cat');
  assert.strictEqual(edited.translations.tr, 'Yeni Kategori');
  assert.strictEqual(edited.translations.en, 'New Category');
});

test('deleteCategory deletes category and reassociates products to other', () => {
  // Create a temporary category and assign a product to it
  const tempCat = {
    id: 'temp-cat',
    isEdit: false,
    translations: { tr: 'Geçici' }
  };
  saveCategory(tempCat);
  
  const tempProduct = {
    category: 'temp-cat',
    price: 100,
    active: true,
    translations: { tr: { name: 'Geçici Ürün', description: '' } }
  };
  saveProduct(tempProduct);
  const addedProduct = state.menuData.items[state.menuData.items.length - 1];
  assert.strictEqual(addedProduct.category, 'temp-cat');
  
  // Delete the category
  deleteCategory('temp-cat');
  
  // Check category is gone
  const foundCat = state.menuData.categories.find(c => c.id === 'temp-cat');
  assert.strictEqual(foundCat, undefined);
  
  // Check product is reassigned to 'other'
  const foundProduct = state.menuData.items.find(i => i.id === addedProduct.id);
  assert.strictEqual(foundProduct.category, 'other');
  
  // Clean up
  deleteProduct(addedProduct.id);
});
