export interface Translation {
  // Navigation
  about: string;
  patterns: string;
  free: string;
  vintage: string;
  contact: string;
  
  // Welcome Section
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeDescription: string;
  browsePatterns: string;
  watchYoutube: string;
  supportWork: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription: string;
  madeWithCare: string;
  madeWithCareDesc: string;
  timelessCraft: string;
  timelessCraftDesc: string;
  globalCommunity: string;
  globalCommunityDesc: string;
  
  // Shop Patterns
  shopTitle: string;
  shopDescription: string;
  visitEtsy: string;
  viewCollections: string;
  
  // Free Patterns
  freeTitle: string;
  freeDescription: string;
  downloadFree: string;
  watchSeries: string;
  
  // Customer Map
  mapTitle: string;
  mapDescription: string;
  seeEtsyReviews: string;
  submitFeedback: string;
  
  // Vintage Spotlight
  vintageTitle: string;
  vintageDescription: string;
  exploreVintage: string;
  downloadTry: string;
  patternsRestored: string;
  erasSpanned: string;
  historicalNotes: string;
  countriesOrigin: string;
  
  // Color Builder
  colorTitle: string;
  colorDescription: string;
  launchBuilder: string;
  threadPalettes: string;
  comingSoon: string;
  saveColors: string;
  shareComm: string;
  exportList: string;
  
  // Support
  supportTitle: string;
  supportDescription: string;
  whatSupport: string;
  newVideos: string;
  moreColors: string;
  patternDev: string;
  betterEquip: string;
  buyMeCoffee: string;
  joinCircle: string;
  
  // Contact
  contactTitle: string;
  contactDescription: string;
  yourName: string;
  emailAddress: string;
  subject: string;
  message: string;
  sendMessage: string;
  connectWithMe: string;
  newsletter: string;
  newsletterDesc: string;
  subscribe: string;
  
  // Footer
  footerDescription: string;
  quickLinks: string;
  resources: string;
  followWork: string;
  followDescription: string;
  allRights: string;
  privacy: string;
  terms: string;
  returns: string;
  
  // Form options
  generalQuestion: string;
  patternInquiry: string;
  collaboration: string;
  technicalSupport: string;
  other: string;
  
  // Difficulty levels
  beginner: string;
  intermediate: string;
  advanced: string;
  
  // Messages
  thankYouMessage: string;
  thankYouNewsletter: string;
  emailExists: string;
}

export const translations: Record<'en' | 'uk', Translation> = {
  en: {
    // Navigation
    about: "About",
    patterns: "Patterns",
    free: "Free",
    vintage: "Vintage",
    contact: "Contact",
    
    // Welcome Section
    welcomeTitle: "Tatting with soul —",
    welcomeSubtitle: "lace that tells a story",
    welcomeDescription: "Hi! I'm Gail, and I make delicate lace by hand using the timeless technique of tatting. Here, you'll find patterns, inspiration, and creative calm — welcome to your peaceful crafting space.",
    browsePatterns: "Browse Patterns",
    watchYoutube: "Watch on YouTube",
    supportWork: "Support my work",
    
    // About Section
    aboutTitle: "One stitch at a time, I bring tradition into today.",
    aboutDescription: "Tatting found me when I needed stillness — and stayed when I needed beauty. Now I share this slow, meditative craft with lace lovers around the world. Everything you see here is made with care, patience, and a deep respect for the art.",
    madeWithCare: "Made with Care",
    madeWithCareDesc: "Every pattern is thoughtfully designed and tested with love",
    timelessCraft: "Timeless Craft",
    timelessCraftDesc: "Honoring traditional techniques while embracing modern creativity",
    globalCommunity: "Global Community",
    globalCommunityDesc: "Connecting lace lovers and crafters worldwide",
    
    // Shop Patterns
    shopTitle: "Lace patterns to make and cherish",
    shopDescription: "Browse my original tatting designs — from intricate doilies to lace motifs, inspired by vintage elegance and modern calm. Each pattern is thoughtfully diagrammed, beginner-friendly, and tested with love.",
    visitEtsy: "Visit my Etsy Shop",
    viewCollections: "View Pattern Collections",
    
    // Free Patterns
    freeTitle: "Try tatting —",
    freeDescription: "Looking for a place to start? These free patterns are my gift to you. Perfect for beginners and curious creatives, each one includes detailed diagrams and video guidance.",
    downloadFree: "Download Free Patterns",
    watchSeries: "Watch the Series",
    
    // Customer Map
    mapTitle: "Threaded across the globe",
    mapDescription: "My lace has found homes in over 47 countries — and each stitch carries a story. Here's what customers have shared about their experience.",
    seeEtsyReviews: "See Full Reviews on Etsy",
    submitFeedback: "Submit Your Feedback",
    
    // Vintage Spotlight
    vintageTitle: "Lace through the decades",
    vintageDescription: "I collect and revive vintage tatting patterns, honoring the women who created them before me. This section features updated diagrams, sample photos, and historical notes — a blend of past and present in every piece.",
    exploreVintage: "Explore the Vintage Collection",
    downloadTry: "Download & Try One",
    patternsRestored: "Patterns Restored",
    erasSpanned: "Eras Spanned",
    historicalNotes: "Historical Notes",
    countriesOrigin: "Countries of Origin",
    
    // Color Builder
    colorTitle: "Design your own",
    colorDescription: "Play with color and see how your doily could look before you begin! Choose a pattern, color each round, and explore real thread palettes with brand names and color codes. Coming soon: Save your version and share it with others!",
    launchBuilder: "Launch Color Builder",
    threadPalettes: "Thread Palettes",
    comingSoon: "Coming Soon",
    saveColors: "Save your color combinations",
    shareComm: "Share with the community",
    exportList: "Export as shopping list",
    
    // Support
    supportTitle: "Your support keeps the",
    supportDescription: "If my work inspires you, consider helping me create more patterns and videos. Your support buys thread, tools, filming gear — and time to keep this craft alive and growing.",
    whatSupport: "What Your Support Does",
    newVideos: "New video tutorials",
    moreColors: "More thread colors",
    patternDev: "Pattern development",
    betterEquip: "Better equipment",
    buyMeCoffee: "Buy Me a Coffee",
    joinCircle: "Join the Circle of Supporters",
    
    // Contact
    contactTitle: "Let's stay in touch",
    contactDescription: "Have a question, a collaboration idea, or a photo to share? Reach out anytime — I'd love to hear from you.",
    yourName: "Your Name",
    emailAddress: "Email Address",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    connectWithMe: "Connect With Me",
    newsletter: "Newsletter",
    newsletterDesc: "Get new patterns, tutorials, and craft inspiration delivered to your inbox.",
    subscribe: "Subscribe",
    
    // Footer
    footerDescription: "Creating beautiful tatted lace patterns and sharing the timeless art of tatting with crafters worldwide.",
    quickLinks: "Quick Links",
    resources: "Resources",
    followWork: "Follow My Work",
    followDescription: "Join thousands of tatting enthusiasts sharing their creations and learning together.",
    allRights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    returns: "Returns",
    
    // Form options
    generalQuestion: "General Question",
    patternInquiry: "Pattern Inquiry",
    collaboration: "Collaboration",
    technicalSupport: "Technical Support",
    other: "Other",
    
    // Difficulty levels
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    
    // Messages
    thankYouMessage: "Thank you for your message! I'll get back to you soon.",
    thankYouNewsletter: "Thank you for subscribing to my newsletter!",
    emailExists: "This email is already subscribed to our newsletter.",
  },
  uk: {
    // Navigation
    about: "Про мене",
    patterns: "Патерни",
    free: "Безкоштовно",
    vintage: "Вінтаж",
    contact: "Контакти",
    
    // Welcome Section
    welcomeTitle: "Фриволіте з душею —",
    welcomeSubtitle: "мереживо, що розповідає історію",
    welcomeDescription: "Привіт! Я Гейл, і я роблю витончене мереживо вручну, використовуючи вічну техніку фриволіте. Тут ви знайдете патерни, натхнення та творчий спокій — ласкаво просимо у ваш мирний простір рукоділля.",
    browsePatterns: "Переглянути патерни",
    watchYoutube: "Дивитися на YouTube",
    supportWork: "Підтримати мою роботу",
    
    // About Section
    aboutTitle: "По одному стібку я привношу традиції в сьогодення.",
    aboutDescription: "Фриволіте знайшло мене, коли мені потрібна була тиша — і залишилося, коли мені потрібна була краса. Тепер я ділюся цим повільним, медитативним ремеслом з любителями мережива по всьому світу. Все, що ви бачите тут, зроблено з турботою, терпінням і глибокою повагою до мистецтва.",
    madeWithCare: "Зроблено з турботою",
    madeWithCareDesc: "Кожен патерн продуманий і протестований з любов'ю",
    timelessCraft: "Вічне ремесло",
    timelessCraftDesc: "Шануємо традиційні техніки, обіймаючи сучасну творчість",
    globalCommunity: "Глобальна спільнота",
    globalCommunityDesc: "З'єднуємо любителів мережива та майстрів по всьому світу",
    
    // Shop Patterns
    shopTitle: "Патерни мережива для створення та збереження",
    shopDescription: "Переглядайте мої оригінальні дизайни фриволіте — від складних серветок до мереживних мотивів, натхненних вінтажною елегантністю та сучасним спокоєм. Кожен патерн продумано схематизований, підходить для початківців і протестований з любов'ю.",
    visitEtsy: "Відвідати мій магазин Etsy",
    viewCollections: "Переглянути колекції патернів",
    
    // Free Patterns
    freeTitle: "Спробуйте фриволіте —",
    freeDescription: "Шукаєте з чого почати? Ці безкоштовні патерни — мій подарунок вам. Ідеально підходять для початківців та допитливих творців, кожен включає детальні схеми та відео-посібники.",
    downloadFree: "Завантажити безкоштовні патерни",
    watchSeries: "Переглянути серію",
    
    // Customer Map
    mapTitle: "Прошиті по всьому світу",
    mapDescription: "Моє мереживо знайшло домівки в понад 47 країнах — і кожен стібок несе історію. Ось що клієнти поділилися про свій досвід.",
    seeEtsyReviews: "Переглянути всі відгуки на Etsy",
    submitFeedback: "Надіслати ваш відгук",
    
    // Vintage Spotlight
    vintageTitle: "Мереживо крізь десятиліття",
    vintageDescription: "Я збираю та відроджую вінтажні патерни фриволіте, вшановуючи жінок, які створили їх до мене. Цей розділ містить оновлені схеми, зразкові фотографії та історичні нотатки — поєднання минулого та сьогодення в кожній частині.",
    exploreVintage: "Дослідити вінтажну колекцію",
    downloadTry: "Завантажити і спробувати",
    patternsRestored: "Патернів відновлено",
    erasSpanned: "Епох охоплено",
    historicalNotes: "Історичних нотаток",
    countriesOrigin: "Країн походження",
    
    // Color Builder
    colorTitle: "Створіть свою власну",
    colorDescription: "Грайтеся з кольором і подивіться, як може виглядати ваша серветка перед початком! Виберіть патерн, розфарбуйте кожне коло та досліджуйте справжні палітри ниток з назвами брендів та кодами кольорів. Незабаром: збережіть свою версію та поділіться з іншими!",
    launchBuilder: "Запустити конструктор кольорів",
    threadPalettes: "Палітри ниток",
    comingSoon: "Незабаром",
    saveColors: "Зберегти ваші комбінації кольорів",
    shareComm: "Поділитися зі спільнотою",
    exportList: "Експортувати як список покупок",
    
    // Support
    supportTitle: "Ваша підтримка тримає",
    supportDescription: "Якщо моя робота надихає вас, розгляньте можливість допомогти мені створювати більше патернів та відео. Ваша підтримка купує нитки, інструменти, знімальне обладнання — і час для підтримки цього ремесла живим та зростаючим.",
    whatSupport: "Що робить ваша підтримка",
    newVideos: "Нові відео-уроки",
    moreColors: "Більше кольорів ниток",
    patternDev: "Розробка патернів",
    betterEquip: "Краще обладнання",
    buyMeCoffee: "Купити мені каву",
    joinCircle: "Приєднатися до кола підтримки",
    
    // Contact
    contactTitle: "Залишимося на зв'язку",
    contactDescription: "Маєте питання, ідею співпраці чи фото, яким хочете поділитися? Звертайтеся будь-коли — я буду рада почути від вас.",
    yourName: "Ваше ім'я",
    emailAddress: "Електронна адреса",
    subject: "Тема",
    message: "Повідомлення",
    sendMessage: "Надіслати повідомлення",
    connectWithMe: "Зв'яжіться зі мною",
    newsletter: "Розсилка",
    newsletterDesc: "Отримуйте нові патерни, уроки та натхнення для творчості на вашу поштову скриньку.",
    subscribe: "Підписатися",
    
    // Footer
    footerDescription: "Створюю красиві патерни татованого мережива та ділюся вічним мистецтвом фриволіте з майстрами по всьому світу.",
    quickLinks: "Швидкі посилання",
    resources: "Ресурси",
    followWork: "Слідкуйте за моєю роботою",
    followDescription: "Приєднуйтеся до тисяч ентузіастів фриволіте, які діляться своїми творіннями та вчаться разом.",
    allRights: "Всі права захищені.",
    privacy: "Політика конфіденційності",
    terms: "Умови надання послуг",
    returns: "Повернення",
    
    // Form options
    generalQuestion: "Загальне питання",
    patternInquiry: "Запит про патерн",
    collaboration: "Співпраця",
    technicalSupport: "Технічна підтримка",
    other: "Інше",
    
    // Difficulty levels
    beginner: "Початківець",
    intermediate: "Середній",
    advanced: "Просунутий",
    
    // Messages
    thankYouMessage: "Дякую за ваше повідомлення! Я незабаром зв'яжуся з вами.",
    thankYouNewsletter: "Дякую за підписку на мою розсилку!",
    emailExists: "Ця електронна адреса вже підписана на нашу розсилку.",
  },
};
