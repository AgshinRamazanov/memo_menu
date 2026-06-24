import test from 'node:test';
import assert from 'node:assert';
import { DEFAULT_MENU_DATA } from '../data.js';

// Since we import functions from app.js which will be created,
// let's define the helper functions locally or import them.
// Let's write the test importing them from app.js.
// We'll write app.js right after this, satisfying Task 4.
// But wait! Task 1 says: Create unit tests, run them to verify, make code pass, etc.
// If we import from app.js now, the test will fail because app.js doesn't exist.
// This is exactly TDD! We write the failing test first, run it, watch it fail, then make it pass.

import { getTranslation, checkIsOpen } from '../app.js';

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
