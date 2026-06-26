export const DEFAULT_MENU_DATA = {
  categories: [
    { id: "kebaplar", translations: { tr: "Kebap ve Ciğer Çeşitleri", en: "Kebab and Liver Varieties", ru: "Кебаб и блюда из печени" } },
    { id: "durumler", translations: { tr: "Dürüm Çeşitleri", en: "Wrap Varieties", ru: "Разновидности дюрюма" } },
    { id: "pideler", translations: { tr: "Pide Çeşitleri", en: "Pita Varieties", ru: "Виды пиде" } },
    { id: "corbalar", translations: { tr: "Çorbalar", en: "Soups", ru: "Супы" } },
    { id: "yan-urunler", translations: { tr: "Aperatifler ve Salatalar", en: "Appetizers and Salads", ru: "Закуски и Салаты" } },
    { id: "tatlilar", translations: { tr: "Tatlı Çeşitleri", en: "Dessert Varieties", ru: "Десерты" } },
    { id: "icecekler", translations: { tr: "İçecek Çeşitleri", en: "Beverage Types", ru: "Напитки" } },
    { id: "poset", translations: { tr: "Poşet", en: "Bag", ru: "Пакет" } }
  ],
  items: [
    // Kebap ve Ciğer Çeşitleri
    {
      id: "adana-kebap",
      category: "kebaplar",
      price: 590.00,
      active: true,
      translations: {
        tr: { name: "Adana Kebap (170 gr)", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Adana Kebab (170g)", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Адана Кебаб (170 г)", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "urfa-kebap",
      category: "kebaplar",
      price: 590.00,
      active: true,
      translations: {
        tr: { name: "Urfa Kebap (170 gr)", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Urfa Kebab (170g)", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Урфа Кебаб (170 г)", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "tavuk-kanat",
      category: "kebaplar",
      price: 540.00,
      active: true,
      translations: {
        tr: { name: "Tavuk Kanat (300 gr)", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Chicken Wings (300g)", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Куриные крылышки (300 г)", description: "С булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "tavuk-sis",
      category: "kebaplar",
      price: 540.00,
      active: true,
      translations: {
        tr: { name: "Tavuk Şiş (280 gr)", description: "Günün pilavı, domates, köz biber, soğan, lavaş, ezme, havuç salata ile" },
        en: { name: "Chicken Skewer (280g)", description: "Served with rice of the day, tomato, roasted pepper, onion, flatbread, ezme, and carrot salad" },
        ru: { name: "Куриный Шашлык (280 г)", description: "С рисом дня, помидором, запеченным перцем, луком, лавашом, эзме и морковным салатом" }
      }
    },
    {
      id: "cop-sis",
      category: "kebaplar",
      price: 640.00,
      active: true,
      translations: {
        tr: { name: "Çöp Şiş (150 gr)", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Stick Skewer (150g)", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Чоп Шиш (150 г)", description: "С булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "ciger-sis",
      category: "kebaplar",
      price: 640.00,
      active: true,
      translations: {
        tr: { name: "Ciğer Şiş (180 gr)", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Liver Skewer (180g)", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Шашлык из печени (180 г)", description: "С булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "patlicanli-kebap",
      category: "kebaplar",
      price: 630.00,
      active: true,
      translations: {
        tr: { name: "Patlıcan Kebap (160 gr)", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Eggplant Kebab (160g)", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme (spicy paste), and flatbread" },
        ru: { name: "Баклажановый Кебаб (160 г)", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "domatesli-kebap",
      category: "kebaplar",
      price: 630.00,
      active: true,
      translations: {
        tr: { name: "Domatesli Kebap (160 gr)", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Tomato Kebab (160g)", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Томатный Кебаб (160 г)", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "alinazik-kebap",
      category: "kebaplar",
      price: 730.00,
      active: true,
      translations: {
        tr: { name: "Alinazik Kebap (160 gr)", description: "Közlenmiş biber, közlenmiş domates, lavaş ile" },
        en: { name: "Alinazik Kebab (160g)", description: "Served over eggplant-yogurt puree, with roasted pepper, roasted tomato, and flatbread" },
        ru: { name: "Алиназик Кебаб (160 г)", description: "На подушке из баклажаново-йогуртового пюре, с запеченным перцем, помидором и лавашом" }
      }
    },
    {
      id: "sarma-beyti-kebap",
      category: "kebaplar",
      price: 630.00,
      active: true,
      translations: {
        tr: { name: "Beyti Kebap (160 gr)", description: "Lavaşa sarılı, soslu, yoğurtlu. Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Beyti Kebab (160g)", description: "Wrapped in flatbread, with special sauce and yogurt. Served with bulgur pilaf, onion, roasted veggies, ezme, and flatbread" },
        ru: { name: "Бейти Кебаб (160 г)", description: "Завернутый в лаваш, под соусом, с йогуртом. Подается с булгуром, луком, запеченными овощами, эзме и лавашом" }
      }
    },
    {
      id: "karisik-kebap-2-kisilik",
      category: "kebaplar",
      price: 1700.00,
      active: true,
      translations: {
        tr: { name: "Karışık Kebap (625 gr)", description: "Adana kebap, Urfa kebap, ciğer şiş, tavuk kanat (4 parça), tavuk şiş (150 gr), çöp şiş. Toplam 3 porsiyon. Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Mixed Kebab (625g)", description: "Adana kebab, Urfa kebab, liver shish, chicken wings (4 pcs), chicken shish (150g), cop shish. Total 3 portions. Served with bulgur pilaf, onion, roasted onion/tomato/pepper, ezme, and flatbread" },
        ru: { name: "Ассорти Кебаб (625 г)", description: "Адана кебаб, Урфа кебаб, печень на шпажках, куриные крылышки (4 шт), куриный шашлык (150 г), чоп шиш. Всего 3 порции. С булгуром, луком, запеченными овощами, эзме и лавашом" }
      }
    },

    // Dürüm Çeşitleri
    {
      id: "adana-durum",
      category: "durumler",
      price: 330.00,
      active: true,
      translations: {
        tr: { name: "Adana Dürüm (85 gr)", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Adana Wrap (85g)", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Адана Дюрюм (85 г)", description: "Помидор, салат латук, лук по желанию" }
      }
    },
    {
      id: "urfa-durum",
      category: "durumler",
      price: 330.00,
      active: true,
      translations: {
        tr: { name: "Urfa Dürüm (85 gr)", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Urfa Wrap (85g)", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Урфа Дюрюм (85 г)", description: "Помидор, салат латук, лук по желанию" }
      }
    },
    {
      id: "tavuk-sis-durum",
      category: "durumler",
      price: 300.00,
      active: true,
      translations: {
        tr: { name: "Tavuk Şiş Dürüm (140 gr)", description: "Domates, kıvırcık marul" },
        en: { name: "Chicken Skewer Wrap (140g)", description: "Tomato, curly lettuce" },
        ru: { name: "Куриный Шашлык Дюрюм (140 г)", description: "Помидоры, салат латук" }
      }
    },
    {
      id: "cop-sis-durum",
      category: "durumler",
      price: 350.00,
      active: true,
      translations: {
        tr: { name: "Çöp Şiş Dürüm (75 gr)", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Stick Skewer Wrap (75g)", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Дюрюм с шашлыком (75 г)", description: "Помидор, салат латук, лук по желанию" }
      }
    },
    {
      id: "ciger-sis-durum",
      category: "durumler",
      price: 350.00,
      active: true,
      translations: {
        tr: { name: "Ciğer Şiş Dürüm (90 gr)", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Liver Skewer Wrap (90g)", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Печеночный Дюрюм (90 г)", description: "Помидор, салат латук, лук по желанию" }
      }
    },

    // Pide Çeşitleri
    {
      id: "kusbasili-pide",
      category: "pideler",
      price: 510.00,
      active: true,
      translations: {
        tr: { name: "Kuşbaşılı Pide (100 gr)", description: "Lavaş, közlenmiş biber ve domates ile" },
        en: { name: "Cubed Meat Pita (100g)", description: "Served with flatbread, roasted pepper, and tomato" },
        ru: { name: "Пиде с кусочками мяса (100 г)", description: "Подается с лавашом, запеченным перцем и помидорами" }
      }
    },
    {
      id: "kasarli-pide",
      category: "pideler",
      price: 430.00,
      active: true,
      translations: {
        tr: { name: "Kaşarlı Pide (100 gr)", description: "Eritilmiş kaşar peyniri ile" },
        en: { name: "Cheddar Cheese Pita (100g)", description: "With melted kasar (Turkish cheddar) cheese" },
        ru: { name: "Пиде с сыром кашар (100 г)", description: "С расплавленным сыром кашар" }
      }
    },
    {
      id: "kavurmali-pide",
      category: "pideler",
      price: 550.00,
      active: true,
      translations: {
        tr: { name: "Kavurmalı Pide (100 gr)", description: "Kavrulmuş dana eti ve eritilmiş kaşar peyniri ile" },
        en: { name: "Roasted Meat Pita (100g)", description: "With pan-roasted beef and melted kasar cheese" },
        ru: { name: "Пиде с обжаренным мясом (100 г)", description: "С обжаренной говядиной и сыром кашар" }
      }
    },
    {
      id: "karisik-pide",
      category: "pideler",
      price: 520.00,
      active: true,
      translations: {
        tr: { name: "Karışık Pide (100 gr)", description: "Kavurma, kuşbaşı et ve eritilmiş kaşar peyniri ile" },
        en: { name: "Mixed Pita (100g)", description: "With roasted beef, cubed meat, and melted kasar cheese" },
        ru: { name: "Ассорти Пиде (100 г)", description: "С обжаренной говядиной, кусочками мяса и сыром кашар" }
      }
    },
    {
      id: "lahmacun",
      category: "pideler",
      price: 150.00,
      active: true,
      translations: {
        tr: { name: "Lahmacun (100 gr)", description: "Kıymalı özel harç ile, yanında yeşillik ve limon" },
        en: { name: "Lahmacun (100g)", description: "With minced meat topping, served with greens and lemon" },
        ru: { name: "Лахмаджун (100 г)", description: "С мясным фаршем и специями, подается с зеленью и лимоном" }
      }
    },

    // Çorbalar
    {
      id: "mercimek-corbasi",
      category: "corbalar",
      price: 120.00,
      active: true,
      translations: {
        tr: { name: "Mercimek Çorbası", description: "Günlük hazırlanmaktadır." },
        en: { name: "Lentil Soup", description: "Freshly prepared daily." },
        ru: { name: "Чечевичный суп", description: "Готовится ежедневно." }
      }
    },
    {
      id: "sehriyeli-tavuk-suyu-corbasi",
      category: "corbalar",
      price: 150.00,
      active: true,
      translations: {
        tr: { name: "Şehriyeli Tavuk Suyu Çorbası", description: "Şehriye, havuç" },
        en: { name: "Chicken Soup with Vermicelli", description: "Noodles, carrots" },
        ru: { name: "Куриный суп с вермишелью", description: "Вермишель, морковь" }
      }
    },
    {
      id: "ezogelin-corbasi",
      category: "corbalar",
      price: 120.00,
      active: true,
      translations: {
        tr: { name: "Ezogelin Çorbası", description: "Limon, ekmek ile" },
        en: { name: "Ezogelin Soup", description: "Served with lemon and bread" },
        ru: { name: "Суп Эзогелин", description: "Подается с лимоном и хлебом" }
      }
    },
    {
      id: "beyran-corbasi",
      category: "corbalar",
      price: 370.00,
      active: true,
      translations: {
        tr: { name: "Beyran Çorbası", description: "Tek kişilik" },
        en: { name: "Beyran Soup", description: "Single portion" },
        ru: { name: "Суп Бейран", description: "На одну персону" }
      }
    },
    {
      id: "kelle-paca-corbasi",
      category: "corbalar",
      price: 370.00,
      active: true,
      translations: {
        tr: { name: "Kelle Paça Çorbası", description: "Ezme, sarımsak, sirke, ekmek ile" },
        en: { name: "Kelle Pacha Soup (Head and Trotter)", description: "Served with ezme, garlic sauce, vinegar, and bread" },
        ru: { name: "Суп Келле Пача", description: "Подается с эзме, чесноком, уксусом и хлебом" }
      }
    },

    // Aperatifler ve Salatalar
    {
      id: "icli-kofte-kizartma",
      category: "yan-urunler",
      price: 160.00,
      active: true,
      translations: {
        tr: { name: "İçli Köfte", description: "Limon ile" },
        en: { name: "Stuffed Meatballs", description: "Served with lemon" },
        ru: { name: "Ичли Кофте (начиненные тефтели)", description: "Подается с лимоном" }
      }
    },
    {
      id: "cig-kofte",
      category: "yan-urunler",
      price: 80.00,
      active: true,
      translations: {
        tr: { name: "Çiğ Köfte", description: "Yeşillik ve limon ile" },
        en: { name: "Raw Meatballs (Chee Kofta)", description: "Served with greens and lemon" },
        ru: { name: "Чиг Кофте", description: "Подается с зеленью и лимоном" }
      }
    },
    {
      id: "sicak-salata",
      category: "yan-urunler",
      price: 200.00,
      active: true,
      translations: {
        tr: { name: "Sıcak Salata", description: "Pişmiş domates, biber ve köz patlıcan" },
        en: { name: "Warm Salad", description: "Cooked tomatoes, peppers, and roasted eggplants" },
        ru: { name: "Теплый Салат", description: "Приготовленные помидоры, перец и запеченные баклажаны" }
      }
    },
    {
      id: "coban-salata",
      category: "yan-urunler",
      price: 90.00,
      active: true,
      translations: {
        tr: { name: "Çoban Salata", description: "Domates, salatalık, soğan, maydanoz, limon ve zeytinyağı ile" },
        en: { name: "Shepherd's Salad", description: "Tomato, cucumber, onion, parsley, with lemon and olive oil" },
        ru: { name: "Салат Чобан (Пастуший)", description: "Помидоры, огурцы, лук, петрушка, с лимоном и оливковым маслом" }
      }
    },
    {
      id: "mevsim-salata",
      category: "yan-urunler",
      price: 160.00,
      active: true,
      translations: {
        tr: { name: "Mevsim Salata", description: "Mevsim yeşillikleri" },
        en: { name: "Seasonal Salad", description: "Seasonal greens" },
        ru: { name: "Сезонный Салат", description: "Сезонная зелень" }
      }
    },

    // Tatlı Çeşitleri
    {
      id: "sutlac",
      category: "tatlilar",
      price: 160.00,
      active: true,
      translations: {
        tr: { name: "Sütlaç Tatlısı", description: "Fındıklı" },
        en: { name: "Rice Pudding Dessert", description: "Topped with hazelnuts" },
        ru: { name: "Сютлач (рисовый пудинг)", description: "С фундуком" }
      }
    },
    {
      id: "kunefe",
      category: "tatlilar",
      price: 200.00,
      active: true,
      translations: {
        tr: { name: "Künefe Tatlısı", description: "Fındık ile" },
        en: { name: "Kunefe Dessert", description: "Topped with hazelnuts" },
        ru: { name: "Кюнефе", description: "С фундуком" }
      }
    },

    // İçecek Çeşitleri
    {
      id: "salgam-suyu",
      category: "icecekler",
      price: 60.00,
      active: true,
      translations: {
        tr: { name: "Şalgam (30 Cl.)", description: "Pet şişe" },
        en: { name: "Turnip (30 Cl.)", description: "Pet bottle" },
        ru: { name: "Шалгам (30 мл)", description: "Пластиковая бутылка" }
      }
    },
    {
      id: "su",
      category: "icecekler",
      price: 20.00,
      active: true,
      translations: {
        tr: { name: "Su (50 Cl.)", description: "Pet şişe" },
        en: { name: "Water (50 Cl.)", description: "Pet bottle" },
        ru: { name: "Вода (50 мл)", description: "Пластиковая бутылка" }
      }
    },
    {
      id: "soda",
      category: "icecekler",
      price: 30.00,
      active: true,
      translations: {
        tr: { name: "Soda (20 Cl.)", description: "Cam şişe" },
        en: { name: "Soda (20 Cl.)", description: "Glass bottle" },
        ru: { name: "Газированная вода (20 мл)", description: "Стеклянная бутылка" }
      }
    },
    {
      id: "ayran",
      category: "icecekler",
      price: 60.00,
      active: true,
      translations: {
        tr: { name: "Ayran (30 Cl.)", description: "Büyük" },
        en: { name: "Ayran (30 Cl.)", description: "Large cup" },
        ru: { name: "Айран (30 мл)", description: "Большой стакан" }
      }
    },
    {
      id: "meysu-cola-33",
      category: "icecekler",
      price: 80.00,
      active: true,
      translations: {
        tr: { name: "Kutu Kola", description: "Kutu içecek" },
        en: { name: "Can Coke", description: "Canned cola" },
        ru: { name: "Кола в банке", description: "Баночка" }
      }
    },
    {
      id: "dimes-visne",
      category: "icecekler",
      price: 80.00,
      active: true,
      translations: {
        tr: { name: "Meyve suyu", description: "Kutu içecek" },
        en: { name: "Fruit Juice", description: "Canned juice" },
        ru: { name: "Фруктовый сок", description: "Баночка сока" }
      }
    },
    {
      id: "meysu-portakalli-gazoz",
      category: "icecekler",
      price: 80.00,
      active: true,
      translations: {
        tr: { name: "Gazoz", description: "Kutu içecek" },
        en: { name: "Soda Pop", description: "Canned soda" },
        ru: { name: "Газировка", description: "Баночка" }
      }
    },
    {
      id: "turk-kahvesi",
      category: "icecekler",
      price: 70.00,
      active: true,
      translations: {
        tr: { name: "Türk Kahvesi", description: "Geleneksel Türk kahvesi" },
        en: { name: "Turk Coffee", description: "Traditional Turkish coffee" },
        ru: { name: "Турецкий кофе", description: "Традиционный турецкий кофе" }
      }
    },
    
    // Poşet
    {
      id: "poset",
      category: "poset",
      price: 1.00,
      active: true,
      translations: {
        tr: { name: "Poşet", description: "Çevre Kanunu kapsamında yapılan değişiklikle her bir plastik poşetin tüketicilere 1 TL fiyat karşılığı satılması Çevre Kanunu gereğidir." },
        en: { name: "Plastic Bag", description: "In accordance with the Environmental Law, plastic bags are sold for 1 TL." },
        ru: { name: "Пластиковый Пакет", description: "В соответствии с Экологическим законом, пластиковые пакеты продаются за 1 лиру." }
      }
    }
  ]
};
