// Helper function to resolve translation with fallback to Turkish
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

// Helper function to determine if the restaurant is open
// Business hours: 08:00 to 04:00 (next day)
// Closed hours: 04:00 to 08:00
export function checkIsOpen(currentHour, currentMinute) {
  // If currentHour is between 4 and 7 inclusive, it's closed.
  // At 04:00, it is closed. At 08:00, it opens.
  if (currentHour >= 4 && currentHour < 8) {
    return false;
  }
  return true;
}
