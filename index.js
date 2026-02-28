// ========================================
// UNIKORA — Bilingual Language Switching
// ========================================

const translations = {
  en: {
    // Nav
    navAbout: "About",
    navCurriculum: "Curriculum",
    navPricing: "Pricing",
    navContact: "Contact",

    // Hero
    heroBadge: "✦ Accepting New Students",
    heroTitle1: "Learn Korean from Zero",
    heroTitle2: "& Get Guidance for Korean Universities",
    heroDesc: "Beginner-friendly Korean lessons and real, experience-based guidance for students who dream of studying in South Korea — from a tutor who has been accepted to top Korean universities.",
    heroUniLabel: "Accepted to:",
    heroCtaTelegram: "Contact on Telegram",
    heroCtaChannel: "Telegram Channel",
    statTopik: "TOPIK 3",
    statTopikLabel: "Certified Level",
    statUnis: "3",
    statUnisLabel: "University Admits",

    // About
    aboutTitle: "About Your Tutor",
    aboutSubtitle: "Get to know the person behind the lessons",
    aboutAccentBar: "",
    aboutName: "Shakhzoda Abdugafurova",
    aboutRole: "Korean Tutor & University Mentor",
    credTopik: "TOPIK Level 3 Certificate Holder",
    credSnu: "Accepted to Seoul National University (SNU)",
    credYonsei: "Accepted to Yonsei University",
    credInha: "Accepted to Inha University",
    credStudying: "Currently studying in Uzbekistan",
    aboutHeading: "Why Learn With Me?",
    aboutP1: "I teach Korean language to absolute beginners — taking you from zero knowledge to a confident basic level. My approach is patient, structured, and built around real communication skills.",
    aboutP2: "Beyond language lessons, I also mentor students who dream of studying in Korea. Having personally navigated the application process and received admissions from Seoul National University, Yonsei University, and Inha University, I share practical, honest advice to help you on your journey.",
    highlightTeach: "Korean language from zero to basic level",
    highlightMentor: "University application guidance",
    highlightExp: "Real experience, practical advice",
    highlightFriendly: "Patient & beginner-friendly",

    // Curriculum
    curTitle: "What You Will Learn",
    curSubtitle: "Structured lessons and mentorship to help you reach your goals",
    curKoreanTitle: "Korean Language",
    curKoreanDesc: "Designed for students starting from zero, building up to a solid basic level step by step.",
    curKoreanItem1: "Hangul — Korean alphabet",
    curKoreanItem2: "Basic vocabulary for daily life",
    curKoreanItem3: "Everyday expressions & greetings",
    curKoreanItem4: "Beginner grammar foundations",
    curKoreanItem5: "Reading practice",
    curKoreanItem6: "Speaking practice",
    curKoreanItem7: "Basic sentence building",
    curUniTitle: "University Guidance",
    curUniDesc: "Practical mentorship for students preparing to apply to Korean universities.",
    curUniItem1: "How to prepare for applications",
    curUniItem2: "Understanding required documents",
    curUniItem3: "Application process overview",
    curUniItem4: "Personal guidance from real experience",
    curUniItem5: "Motivation & direction for your journey",
    curUniItem6: "Tips for scholarship applications",
    curUniItem7: "Choosing the right university",

    // Pricing
    priceTitle: "Simple & Fair Pricing",
    priceSubtitle: "Invest in your future with affordable, structured learning",
    priceLabel: "Per Level",
    priceAmount: "350,000",
    priceCurrency: "UZS",
    pricePer: "per one level",
    priceExample: "For example, completing one textbook level such as Seoulte 1A costs 350,000 UZS.",
    priceCta: "Start Learning Today",

    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to start your Korean journey? Reach out on Telegram!",
    contactPersonalTitle: "Personal Message",
    contactPersonalDesc: "Message directly for questions about lessons or mentorship",
    contactPersonalBtn: "Message @Shakhzoda_unikora",
    contactChannelTitle: "Telegram Channel",
    contactChannelDesc: "Join the channel for updates, tips, and Korean learning resources",
    contactChannelBtn: "Join @unikora",

    // Footer
    footerText: "© 2026 Shakhzoda Abdugafurova — Korean Tutor & University Mentor. All rights reserved."
  },

  uz: {
    // Nav
    navAbout: "Men haqimda",
    navCurriculum: "Darslar",
    navPricing: "Narxlar",
    navContact: "Aloqa",

    // Hero
    heroBadge: "✦ Yangi o'quvchilar qabul qilinmoqda",
    heroTitle1: "Koreys tilini noldan o'rganing",
    heroTitle2: "va Koreya universitetlariga yo'l toping",
    heroDesc: "Boshlang'ich darajadagilar uchun koreys tili darslari va Janubiy Koreyada o'qishni orzu qilgan talabalar uchun amaliy yo'l-yo'riq — eng yaxshi koreya universitetlariga qabul qilingan ustozdan.",
    heroUniLabel: "Qabul qilingan:",
    heroCtaTelegram: "Telegramda bog'laning",
    heroCtaChannel: "Telegram kanali",
    statTopik: "TOPIK 3",
    statTopikLabel: "Sertifikat darajasi",
    statUnis: "3",
    statUnisLabel: "Universitetga qabul",

    // About
    aboutTitle: "O'qituvchingiz haqida",
    aboutSubtitle: "Darslar ortidagi insonni tanib oling",
    aboutAccentBar: "",
    aboutName: "Shaxzoda Abdug'afurova",
    aboutRole: "Koreys tili o'qituvchisi va universitet mentori",
    credTopik: "TOPIK 3-daraja sertifikati egasi",
    credSnu: "Seul Milliy Universitetiga (SNU) qabul qilingan",
    credYonsei: "Yonsei Universitetiga qabul qilingan",
    credInha: "Inha Universitetiga qabul qilingan",
    credStudying: "Hozirda O'zbekistonda tahsil olmoqda",
    aboutHeading: "Nega men bilan o'rganish kerak?",
    aboutP1: "Men koreys tilini mutlaqo noldan boshlaydigan o'quvchilarga o'rgataman — sizni nol bilimdan ishonchli boshlang'ich darajaga olib chiqaman. Mening yondashuvim sabr-toqatli, tizimli va haqiqiy muloqot ko'nikmalariga asoslangan.",
    aboutP2: "Til darslaridan tashqari, Koreyada o'qishni orzu qilgan talabalarga ham maslahat beraman. Seul Milliy Universiteti, Yonsei Universiteti va Inha Universitetiga shaxsan ariza topshirib, qabul qilinganim sababli, sizga amaliy va samimiy maslahatlar berishim mumkin.",
    highlightTeach: "Koreys tilini noldan boshlang'ich darajaga",
    highlightMentor: "Universitetga hujjat topshirish bo'yicha maslahat",
    highlightExp: "Haqiqiy tajriba, amaliy maslahatlar",
    highlightFriendly: "Sabr-toqatli va boshlang'ichlar uchun qulay",

    // Curriculum
    curTitle: "Nimalarni o'rganasiz",
    curSubtitle: "Maqsadlaringizga erishishga yordam beradigan tuzilgan darslar va mentorlik",
    curKoreanTitle: "Koreys tili",
    curKoreanDesc: "Noldan boshlaydigan o'quvchilar uchun mo'ljallangan, bosqichma-bosqich mustahkam boshlang'ich darajaga olib boruvchi darslar.",
    curKoreanItem1: "Hangul — koreys alifbosi",
    curKoreanItem2: "Kundalik hayot uchun asosiy so'z boyligi",
    curKoreanItem3: "Har kungi iboralar va salomlashish",
    curKoreanItem4: "Boshlang'ich grammatika asoslari",
    curKoreanItem5: "O'qish mashqlari",
    curKoreanItem6: "Gapirish mashqlari",
    curKoreanItem7: "Oddiy gaplar tuzish",
    curUniTitle: "Universitet yo'l-yo'riqnomasi",
    curUniDesc: "Koreya universitetlariga hujjat topshirishga tayyorlanayotgan talabalar uchun amaliy mentorlik.",
    curUniItem1: "Hujjat topshirishga qanday tayyorlanish kerak",
    curUniItem2: "Kerakli hujjatlarni tushunish",
    curUniItem3: "Ariza topshirish jarayoni haqida",
    curUniItem4: "Haqiqiy tajribaga asoslangan shaxsiy maslahat",
    curUniItem5: "Yo'lingiz uchun motivatsiya va yo'nalish",
    curUniItem6: "Stipendiya arizalari uchun maslahatlar",
    curUniItem7: "To'g'ri universitetni tanlash",

    // Pricing
    priceTitle: "Oddiy va adolatli narxlar",
    priceSubtitle: "Kelajagingizga arzon va tuzilgan ta'lim bilan sarmoya qiling",
    priceLabel: "Bir daraja uchun",
    priceAmount: "350,000",
    priceCurrency: "so'm",
    pricePer: "bir daraja uchun",
    priceExample: "Masalan, Seoulte 1A kabi bitta darslik darajasini tugatish 350,000 so'm turadi.",
    priceCta: "Bugun o'rganishni boshlang",

    // Contact
    contactTitle: "Bog'laning",
    contactSubtitle: "Koreys tilidagi sayohatingizni boshlashga tayyormisiz? Telegramda yozing!",
    contactPersonalTitle: "Shaxsiy xabar",
    contactPersonalDesc: "Darslar yoki mentorlik haqida savollar uchun to'g'ridan-to'g'ri yozing",
    contactPersonalBtn: "@Shakhzoda_unikora ga yozing",
    contactChannelTitle: "Telegram kanali",
    contactChannelDesc: "Yangiliklar, maslahatlar va koreys tilini o'rganish materiallari uchun kanalga qo'shiling",
    contactChannelBtn: "@unikora ga qo'shiling",

    // Footer
    footerText: "© 2026 Shaxzoda Abdug'afurova — Koreys tili o'qituvchisi va universitet mentori. Barcha huquqlar himoyalangan."
  }
};

// ---------- Language Switching ----------
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Store preference
  localStorage.setItem('unikora_lang', lang);
  document.documentElement.setAttribute('lang', lang);
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher
  const savedLang = localStorage.getItem('unikora_lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Header scroll shadow
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Mobile hamburger
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
});
