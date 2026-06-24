export const DEFAULT_MENU_DATA = {
  categories: [
    { id: "kebaplar", translations: { tr: "Kebaplar", en: "Kebabs", ru: "Кебабы" } },
    { id: "durumler", translations: { tr: "Dürümler", en: "Wraps", ru: "Дюрюмы (Рулеты)" } },
    { id: "izgaralar", translations: { tr: "Izgaralar", en: "Grills", ru: "Грили" } },
    { id: "corbalar", translations: { tr: "Çorbalar", en: "Soups", ru: "Супы" } },
    { id: "yan-urunler", translations: { tr: "Yan Ürünler", en: "Side Dishes", ru: "Закуски" } },
    { id: "tatlilar", translations: { tr: "Tatlılar", en: "Desserts", ru: "Десерты" } },
    { id: "icecekler", translations: { tr: "İçecekler", en: "Drinks", ru: "Напитки" } },
    { id: "poset", translations: { tr: "Poşet", en: "Bag", ru: "Пакет" } }
  ],
  items: [
    // Kebaplar
    {
      id: "patlicanli-kebap",
      category: "kebaplar",
      price: 750.00,
      active: true,
      translations: {
        tr: { name: "Patlıcanlı Kebap", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Eggplant Kebab", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme (spicy paste), and flatbread" },
        ru: { name: "Баклажановый Кебаб", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "adana-kebap",
      category: "kebaplar",
      price: 710.00,
      active: true,
      translations: {
        tr: { name: "Adana Kebap", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Adana Kebab", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Адана Кебаб", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "karisik-kebap-2-kisilik",
      category: "kebaplar",
      price: 2040.00,
      active: true,
      translations: {
        tr: { name: "Karışık Kebap (2 Kişilik)", description: "Adana kebap, Urfa kebap, ciğer şiş, tavuk kanat (4 parça), tavuk şiş (150 gr), çöp şiş. Toplam 3 porsiyon. Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Mixed Kebab (For 2)", description: "Adana kebab, Urfa kebab, liver shish, chicken wings (4 pcs), chicken shish (150g), cop shish. Total 3 portions. Served with bulgur pilaf, onion, roasted onion/tomato/pepper, ezme, and flatbread" },
        ru: { name: "Ассорти Кебаб (на 2 персоны)", description: "Адана кебаб, Урфа кебаб, печень на шпажках, куриные крылышки (4 шт), куриный шашлык (150 г), чоп шиш. Всего 3 порции. С булгуром, луком, запеченными овощами, эзме и лавашом" }
      }
    },
    {
      id: "sarma-beyti-kebap",
      category: "kebaplar",
      price: 750.00,
      active: true,
      translations: {
        tr: { name: "Sarma Beyti Kebap", description: "Lavaşa sarılı, soslu, yoğurtlu. Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Sarma Beyti Kebab", description: "Wrapped in flatbread, with special sauce and yogurt. Served with bulgur pilaf, onion, roasted veggies, ezme, and flatbread" },
        ru: { name: "Сарма Бейти Кебаб", description: "Завернутый в лаваш, под соусом, с йогуртом. Подается с булгуром, луком, запеченными овощами, эзме и лавашом" }
      }
    },
    {
      id: "urfa-kebap",
      category: "kebaplar",
      price: 710.00,
      active: true,
      translations: {
        tr: { name: "Urfa Kebap", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Urfa Kebab", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Урфа Кебаб", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "alinazik-kebap",
      category: "kebaplar",
      price: 850.00,
      active: true,
      translations: {
        tr: { name: "Alinazik Kebap (Kıyma & Kuşbaşı)", description: "Közlenmiş biber, közlenmiş domates, lavaş ile" },
        en: { name: "Alinazik Kebab (Minced & Cubed Meat)", description: "Served over eggplant-yogurt puree, with roasted pepper, roasted tomato, and flatbread" },
        ru: { name: "Алиназик Кебаб (фарш и кусочки мяса)", description: "На подушке из баклажаново-йогуртового пюре, с запеченным перцем, помидором и лавашом" }
      }
    },
    {
      id: "domatesli-kebap",
      category: "kebaplar",
      price: 750.00,
      active: true,
      translations: {
        tr: { name: "Domatesli Kebap", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Tomato Kebab", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Томатный Кебаб", description: "Подается с булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    // Dürümler
    {
      id: "cop-sis-durum",
      category: "durumler",
      price: 420.00,
      active: true,
      translations: {
        tr: { name: "Çöp Şiş Dürüm", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Cop Shish Wrap", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Чоп Шиш Дюрюм (маленькие шпажки)", description: "Помидор, салат латук, лук по желанию" }
      }
    },
    {
      id: "adana-durum",
      category: "durumler",
      price: 395.00,
      active: true,
      translations: {
        tr: { name: "Adana Dürüm", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Adana Kebab Wrap", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Адана Дюрюм", description: "Помидор, салат латук, лук по желанию" }
      }
    },
    {
      id: "tavuk-sis-durum",
      category: "durumler",
      price: 360.00,
      active: true,
      translations: {
        tr: { name: "Tavuk Şiş Dürüm", description: "Domates, kıvırcık marul" },
        en: { name: "Chicken Shish Wrap", description: "Tomato, curly lettuce" },
        ru: { name: "Куриный Шашлык Дюрюм", description: "Помидоры, салат латук" }
      }
    },
    {
      id: "urfa-durum",
      category: "durumler",
      price: 395.00,
      active: true,
      translations: {
        tr: { name: "Urfa Dürüm", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Urfa Kebab Wrap", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Урфа Дюрюм", description: "Помидор, салат латук, лук по желанию" }
      }
    },
    {
      id: "ciger-sis-durum",
      category: "durumler",
      price: 420.00,
      active: true,
      translations: {
        tr: { name: "Ciğer Şiş Dürüm", description: "Domates, kıvırcık marul, isteğe göre soğan" },
        en: { name: "Liver Shish Wrap", description: "Tomato, curly lettuce, onion optional" },
        ru: { name: "Печеночный Дюрюм", description: "Помидор, салат латук, лук по желанию" }
      }
    },
    // Izgaralar
    {
      id: "tavuk-sis",
      category: "izgaralar",
      price: 640.00,
      active: true,
      translations: {
        tr: { name: "Tavuk Şiş", description: "Günün pilavı, domates, köz biber, soğan, lavaş, ezme, havuç salata ile" },
        en: { name: "Chicken Shish", description: "Served with rice of the day, tomato, roasted pepper, onion, flatbread, ezme, and carrot salad" },
        ru: { name: "Куриный Шашлык (Тавук Шиш)", description: "С рисом дня, помидором, запеченным перцем, луком, лавашом, эзме и морковным салатом" }
      }
    },
    {
      id: "cop-sis",
      category: "izgaralar",
      price: 760.00,
      active: true,
      translations: {
        tr: { name: "Çöp Şiş", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Cop Shish", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Чоп Шиш (Шашлычки из говядины)", description: "С булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "ciger-sis",
      category: "izgaralar",
      price: 760.00,
      active: true,
      translations: {
        tr: { name: "Ciğer Şiş", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Liver Shish", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Шашлык из печени", description: "С булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    {
      id: "tavuk-kanat",
      category: "izgaralar",
      price: 630.00,
      active: true,
      translations: {
        tr: { name: "Tavuk Kanat", description: "Bulgur pilavı, soğan, közlenmiş soğan, közlenmiş domates, közlenmiş biber, ezme, lavaş ile" },
        en: { name: "Chicken Wings", description: "Served with bulgur pilaf, onion, roasted onion, roasted tomato, roasted pepper, ezme, and flatbread" },
        ru: { name: "Куриные крылышки", description: "С булгуром, луком, запеченным луком, запеченными помидорами и перцем, эзме и лавашом" }
      }
    },
    // Çorbalar
    {
      id: "mercimek-corbasi",
      category: "corbalar",
      price: 150.00,
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
      price: 185.00,
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
      price: 150.00,
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
      price: 455.00,
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
      price: 445.00,
      active: true,
      translations: {
        tr: { name: "Kelle Paça Çorbası", description: "Ezme, sarımsak, sirke, ekmek ile" },
        en: { name: "Kelle Pacha Soup (Head and Trotter)", description: "Served with ezme, garlic sauce, vinegar, and bread" },
        ru: { name: "Суп Келле Пача", description: "Подается с эзме, чесноком, уксусом и хлебом" }
      }
    },
    // Yan Ürünler
    {
      id: "icli-kofte-kizartma",
      category: "yan-urunler",
      price: 185.00,
      active: true,
      translations: {
        tr: { name: "İçli Köfte (Kızartma)", description: "Limon ile" },
        en: { name: "Fried Kibbeh", description: "Served with lemon" },
        ru: { name: "Ичли Кофте (жареный киббех)", description: "Подается с лимоном" }
      }
    },
    // Tatlılar
    {
      id: "sutlac",
      category: "tatlilar",
      price: 200.00,
      active: true,
      translations: {
        tr: { name: "Sütlaç", description: "Fındıklı" },
        en: { name: "Rice Pudding", description: "Topped with hazelnuts" },
        ru: { name: "Сютlaç (рисовый пудинг)", description: "С фундуком" }
      }
    },
    {
      id: "kunefe",
      category: "tatlilar",
      price: 250.00,
      active: true,
      translations: {
        tr: { name: "Künefe", description: "Fındık ile" },
        en: { name: "Kunefe", description: "Topped with hazelnuts" },
        ru: { name: "Кюнефе", description: "С фундуком" }
      }
    },
    // İçecekler
    {
      id: "dimes-visne",
      category: "icecekler",
      price: 70.00,
      active: true,
      translations: {
        tr: { name: "Dimes Vişne (25 Cl.)", description: "Kutu içecek" },
        en: { name: "Dimes Cherry (25 Cl.)", description: "Canned juice" },
        ru: { name: "Димес Вишня (25 мл)", description: "Баночный сок" }
      }
    },
    {
      id: "dimes-karisik",
      category: "icecekler",
      price: 70.00,
      active: true,
      translations: {
        tr: { name: "Dimes Karışık (25 Cl.)", description: "Karton kutu" },
        en: { name: "Dimes Mixed (25 Cl.)", description: "Carton pack" },
        ru: { name: "Димес Мультифрукт (25 мл)", description: "В картонной коробке" }
      }
    },
    {
      id: "salgam-suyu",
      category: "icecekler",
      price: 60.00,
      active: true,
      translations: {
        tr: { name: "Şalgam Suyu (30 Cl.)", description: "Pet şişe" },
        en: { name: "Shalgam Suyu (30 Cl.)", description: "Pet bottle" },
        ru: { name: "Шалгам (30 мл)", description: "Пластиковая бутылка" }
      }
    },
    {
      id: "su",
      category: "icecekler",
      price: 25.00,
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
      price: 40.00,
      active: true,
      translations: {
        tr: { name: "Soda (20 Cl.)", description: "Cam şişe" },
        en: { name: "Mineral Water (20 Cl.)", description: "Glass bottle" },
        ru: { name: "Газированная вода (20 мл)", description: "Стеклянная бутылка" }
      }
    },
    {
      id: "meysu-cola-1l",
      category: "icecekler",
      price: 180.00,
      active: true,
      translations: {
        tr: { name: "Meysu Cola (1 L.)", description: "Pet şişe" },
        en: { name: "Meysu Cola (1 L.)", description: "Pet bottle" },
        ru: { name: "Мейсу Кола (1 л)", description: "Пластиковая бутылка" }
      }
    },
    {
      id: "dimes-seftali",
      category: "icecekler",
      price: 70.00,
      active: true,
      translations: {
        tr: { name: "Dimes Şeftali (25 Cl.)", description: "Küçük" },
        en: { name: "Dimes Peach (25 Cl.)", description: "Small carton pack" },
        ru: { name: "Димес Персик (25 мл)", description: "Маленькая упаковка" }
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
      id: "meysu-portakalli-gazoz",
      category: "icecekler",
      price: 80.00,
      active: true,
      translations: {
        tr: { name: "Meysu Portakallı Gazoz (33 Cl.)", description: "Kutu içecek" },
        en: { name: "Meysu Orange Soda (33 Cl.)", description: "Canned soda" },
        ru: { name: "Мейсу Апельсиновый Газированный Напиток (33 мл)", description: "Баночка" }
      }
    },
    {
      id: "meysu-cola-33",
      category: "icecekler",
      price: 80.00,
      active: true,
      translations: {
        tr: { name: "Meysu Cola (33 Cl.)", description: "Kutu içecek" },
        en: { name: "Meysu Cola (33 Cl.)", description: "Canned cola" },
        ru: { name: "Мейсу Кола (33 мл)", description: "Баночка" }
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
