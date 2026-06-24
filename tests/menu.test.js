import test from 'node:test';
import assert from 'node:assert';
import { DEFAULT_MENU_DATA } from '../data.js';
import { getTranslation, checkIsOpen, state } from '../app.js';
import { verifyPin, saveProduct, deleteProduct, toggleProductStatus } from '../admin.js';

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
  assert.strictEqual(verifyPin('1234'), true);
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
