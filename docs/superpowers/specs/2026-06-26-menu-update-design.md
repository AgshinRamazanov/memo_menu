# Design Specification: Tek Kebapçı Memo 2000 Menu and Price Update

**Date**: 2026-06-26  
**Project**: Tek Kebapçı Memo 2000 Digital Menu  
**Status**: Approved (Design Phase)

---

## 1. Overview & Goals
The goal is to update the digital menu of **Tek Kebapçı Memo 2000** to reflect the new printed menu design, item prices, weights, and items. This update includes:
1. Re-categorizing and updating all existing products (Kebabs, Wraps, Soups, Desserts, and Drinks).
2. Creating a new category **"Pide Çeşitleri" (Pita Varieties)** and adding its respective items.
3. Consolidating/simplifying the drink items to match the general entries on the physical menu (e.g., merging specific juices into a single "Meyve Suyu" entry).
4. Re-organizing the Grill (Izgaralar) category: moving its items to **"Kebap ve Ciğer Çeşitleri"** and removing the "Izgaralar" category.
5. Updating the category **"Yan Ürünler"** to **"Aperatifler ve Salatalar"** and adding four new salads/appetizers.

---

## 2. Updated Categories Structure
The horizontal categories will be updated as follows:

| Category ID | Current Turkish Name | New Turkish Name | New English Name | New Russian Name |
| :--- | :--- | :--- | :--- | :--- |
| `kebaplar` | Kebaplar | Kebap ve Ciğer Çeşitleri | Kebab and Liver Varieties | Кебаб и блюда из печени |
| `durumler` | Dürümler | Dürüm Çeşitleri | Wrap Varieties | Разновидности дюрюма |
| `pideler` [NEW] | — | Pide Çeşitleri | Pita Varieties | Виды пиде |
| `corbalar` | Çorbalar | Çorbalar | Soups | Супы |
| `yan-urunler` | Yan Ürünler | Aperatifler ve Salatalar | Appetizers and Salads | Закуски и Салаты |
| `tatlilar` | Tatlılar | Tatlı Çeşitleri | Dessert Varieties | Десерты |
| `icecekler` | İçecekler | İçecek Çeşitleri | Beverage Types | Напитки |
| `poset` | Poşet | Poşet | Bag | Пакет |
| *`izgaralar`* | Izgaralar | *Removed (Merged into `kebaplar`)* | — | — |

---

## 3. Product Updates & Additions
Below are the changes mapped per category.

### 3.1. Dürüm Çeşitleri (`durumler`)
We update names to include weights and update prices:
* **Adana Dürüm (85 gr)** (`adana-durum`):
  * Price: **330.00 TL** (from 395.00)
  * Turkish: `Adana Dürüm (85 gr)`
  * English: `Adana Wrap (85g)`
  * Russian: `Адана Дюрюм (85 г)`
* **Urfa Dürüm (85 gr)** (`urfa-durum`):
  * Price: **330.00 TL** (from 395.00)
  * Turkish: `Urfa Dürüm (85 gr)`
  * English: `Urfa Wrap (85g)`
  * Russian: `Урфа Дюрюм (85 г)`
* **Tavuk Şiş Dürüm (140 gr)** (`tavuk-sis-durum`):
  * Price: **300.00 TL** (from 360.00)
  * Turkish: `Tavuk Şiş Dürüm (140 gr)`
  * English: `Chicken Skewer Wrap (140g)`
  * Russian: `Куриный Шашлык Дюрюм (140 г)`
* **Çöp Şiş Dürüm (75 gr)** (`cop-sis-durum`):
  * Price: **350.00 TL** (from 420.00)
  * Turkish: `Çöp Şiş Dürüm (75 gr)`
  * English: `Stick Skewer Wrap (75g)`
  * Russian: `Чоп Шиш Дюрюм (75 г)`
* **Ciğer Şiş Dürüm (90 gr)** (`ciger-sis-durum`):
  * Price: **350.00 TL** (from 420.00)
  * Turkish: `Ciğer Şiş Dürüm (90 gr)`
  * English: `Liver Skewer Wrap (90g)`
  * Russian: `Печеночный Дюрюм (90 г)`

### 3.2. Pide Çeşitleri (`pideler`) [NEW CATEGORY & ITEMS]
* **Kuşbaşılı Pide (100 gr)** (`kusbasili-pide`):
  * Price: **510.00 TL**
  * Turkish: `Kuşbaşılı Pide (100 gr)` (Desc: Lavaş, közlenmiş biber ve domates ile)
  * English: `Cubed Meat Pita (100g)` (Desc: Served with flatbread, roasted pepper, and tomato)
  * Russian: `Пиде с кусочками мяса (100 г)` (Desc: Подается с лавашом, запеченным перцем и помидорами)
* **Kaşarlı Pide (100 gr)** (`kasarli-pide`):
  * Price: **430.00 TL**
  * Turkish: `Kaşarlı Pide (100 gr)`
  * English: `Cheddar Cheese Pita (100g)`
  * Russian: `Пиде с сыром кашар (100 г)`
* **Kavurmalı Pide (100 gr)** (`kavurmali-pide`):
  * Price: **550.00 TL**
  * Turkish: `Kavurmalı Pide (100 gr)`
  * English: `Roasted Meat Pita (100g)`
  * Russian: `Пиде с обжаренным мясом (100 г)`
* **Karışık Pide (100 gr)** (`karisik-pide`):
  * Price: **520.00 TL**
  * Turkish: `Karışık Pide (100 gr)`
  * English: `Mixed Pita (100g)`
  * Russian: `Ассорти Пиде (100 г)`
* **Lahmacun (100 gr)** (`lahmacun`):
  * Price: **150.00 TL**
  * Turkish: `Lahmacun (100 gr)`
  * English: `Lahmacun (100g)`
  * Russian: `Лахмаджун (100 г)`

### 3.3. Kebap ve Ciğer Çeşitleri (`kebaplar`)
Move grill items (`izgaralar`) here and update all names, weights, and prices:
* **Adana Kebap (170 gr)** (`adana-kebap`):
  * Price: **590.00 TL** (from 710.00)
  * Turkish: `Adana Kebap (170 gr)`
  * English: `Adana Kebab (170g)`
  * Russian: `Адана Кебаб (170 г)`
* **Urfa Kebap (170 gr)** (`urfa-kebap`):
  * Price: **590.00 TL** (from 710.00)
  * Turkish: `Urfa Kebap (170 gr)`
  * English: `Urfa Kebab (170g)`
  * Russian: `Урфа Кебаб (170 г)`
* **Patlıcan Kebap (160 gr)** (`patlicanli-kebap`):
  * Price: **630.00 TL** (from 750.00)
  * Turkish: `Patlıcan Kebap (160 gr)`
  * English: `Eggplant Kebab (160g)`
  * Russian: `Баклажановый Кебаб (160 г)`
* **Domatesli Kebap (160 gr)** (`domatesli-kebap`):
  * Price: **630.00 TL** (from 750.00)
  * Turkish: `Domatesli Kebap (160 gr)`
  * English: `Tomato Kebab (160g)`
  * Russian: `Томатный Кебаб (160 г)`
* **Alinazik Kebap (160 gr)** (`alinazik-kebap`):
  * Price: **730.00 TL** (from 850.00)
  * Turkish: `Alinazik Kebap (160 gr)`
  * English: `Alinazik Kebab (160g)`
  * Russian: `Алиназик Кебаб (160 г)`
* **Beyti Kebap (160 gr)** (`sarma-beyti-kebap`):
  * Price: **630.00 TL** (from 750.00)
  * Turkish: `Beyti Kebap (160 gr)`
  * English: `Beyti Kebab (160g)`
  * Russian: `Бейти Кебаб (160 г)`
* **Karışık Kebap (625 gr)** (`karisik-kebap-2-kisilik`):
  * Price: **1700.00 TL** (from 2040.00)
  * Turkish: `Karışık Kebap (625 gr)`
  * English: `Mixed Kebab (625g)`
  * Russian: `Ассорти Кебаб (625 г)`
* **Tavuk Kanat (300 gr)** (`tavuk-kanat`):
  * Category: `kebaplar` (from `izgaralar`)
  * Price: **540.00 TL** (from 630.00)
  * Turkish: `Tavuk Kanat (300 gr)`
  * English: `Chicken Wings (300g)`
  * Russian: `Куриные крылышки (300 г)`
* **Tavuk Şiş (280 gr)** (`tavuk-sis`):
  * Category: `kebaplar` (from `izgaralar`)
  * Price: **540.00 TL** (from 640.00)
  * Turkish: `Tavuk Şiş (280 gr)`
  * English: `Chicken Skewer (280g)`
  * Russian: `Куриный Шашлык (280 г)`
* **Çöp Şiş (150 gr)** (`cop-sis`):
  * Category: `kebaplar` (from `izgaralar`)
  * Price: **640.00 TL** (from 760.00)
  * Turkish: `Çöp Şiş (150 gr)`
  * English: `Stick Skewer (150g)`
  * Russian: `Чоп Шиш (150 г)`
* **Ciğer Şiş (180 gr)** (`ciger-sis`):
  * Category: `kebaplar` (from `izgaralar`)
  * Price: **640.00 TL** (from 760.00)
  * Turkish: `Ciğer Şiş (180 gr)`
  * English: `Liver Skewer (180g)`
  * Russian: `Шашлык из печени (180 г)`

### 3.4. Çorbalar (`corbalar`)
* **Ezogelin Çorbası** (`ezogelin-corbasi`): Price **120.00 TL** (from 150.00)
* **Tavuk Suyu Çorbası** (`sehriyeli-tavuk-suyu-corbasi`): Price **150.00 TL** (from 185.00)
* **Mercimek Çorbası** (`mercimek-corbasi`): Price **120.00 TL** (from 150.00)
* **Kelle Paça Çorbası** (`kelle-paca-corbasi`): Price **370.00 TL** (from 445.00)
* **Beyran Çorbası** (`beyran-corbasi`): Price **370.00 TL** (from 455.00)

### 3.5. Aperatifler ve Salatalar (`yan-urunler`)
* **İçli Köfte** (`icli-kofte-kizartma`):
  * Price: **160.00 TL** (from 185.00)
  * Turkish: `İçli Köfte`
  * English: `Stuffed Meatballs`
  * Russian: `Ичли Кофте (начиненные тефтели)`
* **Çiğ Köfte** (`cig-kofte`) [NEW]:
  * Price: **80.00 TL**
  * Turkish: `Çiğ Köfte` (Desc: Yeşillik ve limon ile)
  * English: `Raw Meatballs (Chee Kofta)` (Desc: Served with greens and lemon)
  * Russian: `Чиг Кофте` (Desc: Подается с зеленью и лимоном)
* **Sıcak Salata** (`sicak-salata`) [NEW]:
  * Price: **200.00 TL**
  * Turkish: `Sıcak Salata` (Desc: Pişmiş domates, biber ve köz patlıcan)
  * English: `Warm Salad` (Desc: Cooked tomatoes, peppers, and roasted eggplants)
  * Russian: `Теплый Салат` (Desc: Приготовленные помидоры, перец и запеченные баклажаны)
* **Çoban Salata** (`coban-salata`) [NEW]:
  * Price: **90.00 TL**
  * Turkish: `Çoban Salata` (Desc: Domates, salatalık, soğan, maydanoz, limon ve zeytinyağı ile)
  * English: `Shepherd's Salad` (Desc: Tomato, cucumber, onion, parsley, with lemon and olive oil)
  * Russian: `Салат Чобан (Пастуший)` (Desc: Помидоры, огурцы, лук, петрушка, с лимоном и оливковым маслом)
* **Mevsim Salata** (`mevsim-salata`) [NEW]:
  * Price: **160.00 TL**
  * Turkish: `Mevsim Salata` (Desc: Mevsim yeşillikleri)
  * English: `Seasonal Salad` (Desc: Seasonal greens)
  * Russian: `Сезонный Салат` (Desc: Сезонная зелень)

### 3.6. Tatlı Çeşitleri (`tatlilar`)
* **Künefe Tatlısı** (`kunefe`): Price **200.00 TL** (from 250.00)
* **Sütlaç Tatlısı** (`sutlac`): Price **160.00 TL** (from 200.00)

### 3.7. İçecek Çeşitleri (`icecekler`)
We consolidate and update the drinks:
* **Ayran** (`ayran`): Price **60.00 TL** (no change)
* **Şalgam** (`salgam-suyu`): Price **60.00 TL** (no change, name updated to Şalgam)
* **Kutu Kola / Can Coke** (`meysu-cola-33`):
  * Price: **80.00 TL** (no change)
  * Turkish: `Kutu Kola`
  * English: `Can Coke`
  * Russian: `Кола в банке`
* **Meyve suyu / Fruit Juice** (`dimes-visne` - keeping this ID but renaming/re-purposing):
  * Price: **80.00 TL** (from 70.00)
  * Turkish: `Meyve suyu`
  * English: `Fruit Juice`
  * Russian: `Фруктовый сок`
  * *Note: Remove `dimes-karisik` and `dimes-seftali` from the active items list since they are now consolidated into this single item.*
* **Gazoz / Soda Pop** (`meysu-portakalli-gazoz` - renaming/re-purposing):
  * Price: **80.00 TL** (no change)
  * Turkish: `Gazoz`
  * English: `Soda Pop`
  * Russian: `Газировка`
* **Soda** (`soda`): Price **30.00 TL** (from 40.00)
* **Su** (`su`): Price **20.00 TL** (from 25.00)
* **Türk Kahvesi / Turk Coffee** (`turk-kahvesi`) [NEW]:
  * Price: **70.00 TL**
  * Turkish: `Türk Kahvesi`
  * English: `Turk Coffee`
  * Russian: `Турецкий кофе`
* *Note: Remove `meysu-cola-1l` from the database as it is not present in the new physical menu.*

---

## 4. Verification Plan
1. **Automated Tests**: Update `tests/menu.test.js` to assert that the old items are gone, new items (Pides, Salads, Turk Coffee) are present, and their prices and categories match the new configuration. Run `node --test tests/menu.test.js` to ensure 100% compliance.
2. **Visual Inspection**: Open the digital menu locally or in a test preview to verify that:
   * The new categories (Pide Çeşitleri) render correctly.
   * "Izgaralar" tab is gone.
   * Prices and weights of all wraps, kebabs, drinks, desserts, and soups match the printed menu images.
   * The consolidated beverages show up correctly.
3. **Database Migration**: Ensure the Redis client successfully receives the updated dataset and loads it dynamically.
