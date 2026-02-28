// ========================================
// UNIKORA — Smart FAQ Chatbot (No API needed)
// ========================================

const chatResponses = {
    // Each entry: { keywords: [...], en: "...", uz: "..." }
    pricing: {
        keywords: ['price', 'pricing', 'cost', 'how much', 'narx', 'qancha', 'pul', 'to\'lov', 'payment', 'pay', 'fee', 'цена', 'сколько', 'стоимость', 'money', 'uzs', 'som', "so'm", 'arzon', 'cheap', 'expensive', 'qimmat', '350'],
        en: "💰 Our pricing is simple and transparent:\n\n<b>350,000 UZS per level</b>\n\nFor example, completing one textbook level such as Seoulte 1A costs 350,000 UZS.\n\nWant to get started? Message Shakhzoda on Telegram: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>",
        uz: "💰 Narxlarimiz oddiy va tushunarli:\n\n<b>Bir daraja uchun 350,000 so'm</b>\n\nMasalan, Seoulte 1A kabi bitta darslik darajasini tugatish 350,000 so'm turadi.\n\nBoshlashni xohlaysizmi? Shaxzodaga Telegramda yozing: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>"
    },
    lessons: {
        keywords: ['lesson', 'learn', 'korean', 'teach', 'course', 'class', 'hangul', 'dars', 'kurs', "o'rgan", "o'qit", 'koreys', 'урок', 'курс', 'корейский', 'study', 'beginner', 'boshlang', 'alphabet', 'grammar', 'speaking', 'reading', 'vocabulary'],
        en: "🇰🇷 Our Korean language lessons cover:\n\n• <b>Hangul</b> — Korean alphabet\n• <b>Basic vocabulary</b> for daily life\n• <b>Everyday expressions</b> & greetings\n• <b>Beginner grammar</b> foundations\n• <b>Reading & speaking</b> practice\n• <b>Sentence building</b>\n\nLessons are designed for absolute beginners — from zero to a confident basic level!\n\nInterested? Contact: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>",
        uz: "🇰🇷 Koreys tili darslarimiz quyidagilarni o'z ichiga oladi:\n\n• <b>Hangul</b> — koreys alifbosi\n• Kundalik hayot uchun <b>asosiy so'z boyligi</b>\n• <b>Har kungi iboralar</b> va salomlashish\n• <b>Boshlang'ich grammatika</b> asoslari\n• <b>O'qish va gapirish</b> mashqlari\n• <b>Gaplar tuzish</b>\n\nDarslar mutlaqo noldan boshlaydigan o'quvchilar uchun mo'ljallangan!\n\nQiziqyapsizmi? Bog'laning: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>"
    },
    university: {
        keywords: ['university', 'uni', 'apply', 'application', 'snu', 'seoul national', 'yonsei', 'inha', 'korea study', 'study abroad', 'scholarship', 'stipend', 'document', 'admission', 'universitet', 'hujjat', 'ariza', 'topshir', 'stipendiya', 'koreya', 'университет', 'подать', 'стипендия', 'поступ'],
        en: "🎓 University application guidance includes:\n\n• How to <b>prepare for applications</b>\n• Understanding <b>required documents</b>\n• <b>Application process</b> overview\n• <b>Personal guidance</b> from real experience\n• Tips for <b>scholarship applications</b>\n• Choosing the <b>right university</b>\n\nShakhzoda has been personally accepted to <b>Seoul National University (SNU)</b>, <b>Yonsei University</b>, and <b>Inha University</b> — so you're getting advice from real experience!\n\nGet personal guidance: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>",
        uz: "🎓 Universitetga hujjat topshirish bo'yicha yo'l-yo'riq:\n\n• Arizalarga qanday <b>tayyorlanish</b> kerak\n• <b>Kerakli hujjatlarni</b> tushunish\n• <b>Ariza topshirish jarayoni</b> haqida\n• Haqiqiy tajribaga asoslangan <b>shaxsiy maslahat</b>\n• <b>Stipendiya arizalari</b> uchun maslahatlar\n• <b>To'g'ri universitetni</b> tanlash\n\nShaxzoda shaxsan <b>Seul Milliy Universiteti (SNU)</b>, <b>Yonsei Universiteti</b> va <b>Inha Universitetiga</b> qabul qilingan — shuning uchun siz haqiqiy tajribadan maslahat olasiz!\n\nShaxsiy maslahat oling: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>"
    },
    contact: {
        keywords: ['contact', 'telegram', 'message', 'reach', 'write', 'call', 'phone', "bog'lan", 'yozing', 'aloqa', 'qanday', 'связ', 'телеграм', 'написать', 'how to reach', 'where'],
        en: "💬 You can reach Shakhzoda easily on Telegram:\n\n• <b>Personal:</b> <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>\n• <b>Channel:</b> <a href='https://t.me/unikora' target='_blank'>@unikora</a>\n\nFeel free to message anytime — she'd love to help you start your Korean journey! 😊",
        uz: "💬 Shaxzodaga Telegramda osongina bog'lanishingiz mumkin:\n\n• <b>Shaxsiy:</b> <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>\n• <b>Kanal:</b> <a href='https://t.me/unikora' target='_blank'>@unikora</a>\n\nIstalgan vaqtda yozing — u sizga koreys tilidagi sayohatingizni boshlashda yordam berishdan xursand bo'ladi! 😊"
    },
    about: {
        keywords: ['who', 'about', 'shakhzoda', 'tutor', 'teacher', 'mentor', 'topik', "o'qituvchi", 'ustoz', 'kim', 'haqida', 'mentor', 'кто', 'учитель', 'репетитор', 'преподаватель', 'background', 'experience'],
        en: "👩‍🏫 <b>Shakhzoda Abdugafurova</b> is your Korean tutor and university mentor.\n\n• 🏅 <b>TOPIK Level 3</b> certified\n• 🎓 Accepted to <b>SNU, Yonsei, and Inha University</b>\n• 📍 Currently studying in Uzbekistan\n• 📘 Teaches Korean from zero to basic level\n• 🧭 Mentors students for Korean university applications\n\nShe combines language teaching with real university application experience — a truly unique combination!",
        uz: "👩‍🏫 <b>Shaxzoda Abdug'afurova</b> — sizning koreys tili o'qituvchingiz va universitet mentoringiz.\n\n• 🏅 <b>TOPIK 3-daraja</b> sertifikati egasi\n• 🎓 <b>SNU, Yonsei va Inha Universitetiga</b> qabul qilingan\n• 📍 Hozirda O'zbekistonda tahsil olmoqda\n• 📘 Koreys tilini noldan boshlang'ich darajaga o'rgatadi\n• 🧭 Koreya universitetlariga ariza topshirishda maslahat beradi\n\nU til o'rgatishni haqiqiy universitet ariza tajribasi bilan birlashtiradi — bu haqiqatan ham noyob kombinatsiya!"
    },
    topik: {
        keywords: ['topik', 'test', 'exam', 'imtihon', 'экзамен', 'тест', 'level', 'daraja'],
        en: "📝 Shakhzoda holds a <b>TOPIK Level 3 certificate</b> (Test of Proficiency in Korean).\n\nHer lessons prepare you from absolute zero to basic level. While the current course focuses on beginner Korean, she can guide you on how to prepare for TOPIK as well.\n\nAsk about TOPIK prep: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>",
        uz: "📝 Shaxzoda <b>TOPIK 3-daraja sertifikati</b> egasi (Koreys tili bilim darajasi testi).\n\nUning darslari sizni mutlaqo noldan boshlang'ich darajaga tayyorlaydi. Hozirgi kurs boshlang'ich koreys tiliga qaratilgan bo'lsa-da, u TOPIK ga qanday tayyorlanish kerakligi haqida ham maslahat berishi mumkin.\n\nTOPIK tayyorligi haqida so'rang: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>"
    },
    hello: {
        keywords: ['hello', 'hi', 'hey', 'salom', 'assalom', 'привет', 'здравствуй', 'good morning', 'good evening', 'yo', 'sup'],
        en: "안녕하세요! 👋 Hello! How can I help you today?\n\nYou can ask me about:\n• 🇰🇷 Korean lessons\n• 🎓 University guidance\n• 💰 Pricing\n• 💬 How to contact Shakhzoda",
        uz: "안녕하세요! 👋 Salom! Bugun sizga qanday yordam bera olaman?\n\nSiz mendan quyidagilar haqida so'rashingiz mumkin:\n• 🇰🇷 Koreys tili darslari\n• 🎓 Universitet yo'l-yo'riqnomasi\n• 💰 Narxlar\n• 💬 Shaxzodaga qanday bog'lanish"
    },
    thanks: {
        keywords: ['thank', 'thanks', 'rahmat', 'tashakkur', 'спасибо', 'благодар', 'appreciate'],
        en: "You're welcome! 😊 If you have any more questions, feel free to ask. Or contact Shakhzoda directly on Telegram: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>",
        uz: "Arzimaydi! 😊 Agar boshqa savollaringiz bo'lsa, bemalol so'rang. Yoki Shaxzodaga Telegramda to'g'ridan-to'g'ri yozing: <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>"
    }
};

const defaultResponse = {
    en: "I appreciate your question! 🤔 For more detailed information, please contact Shakhzoda directly — she'd be happy to help!\n\n💬 <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>\n📣 <a href='https://t.me/unikora' target='_blank'>@unikora channel</a>",
    uz: "Savolingiz uchun rahmat! 🤔 Batafsil ma'lumot uchun Shaxzodaga to'g'ridan-to'g'ri murojaat qiling — u yordam berishdan xursand bo'ladi!\n\n💬 <a href='https://t.me/Shakhzoda_unikora' target='_blank'>@Shakhzoda_unikora</a>\n📣 <a href='https://t.me/unikora' target='_blank'>@unikora kanali</a>"
};

function detectLanguage(text) {
    const lower = text.toLowerCase();
    // Check for Uzbek-specific characters/words
    if (/['''`]/.test(lower) && /(?:salom|qanday|narx|dars|haqida|uchun|kerak|nima|qancha)/.test(lower)) return 'uz';
    if (/(?:salom|assalom|qanday|narx|dars|haqida|uchun|kerak|nima|qancha|koreys|bo'l|yo'l|o'r|bog'lan|yozing)/.test(lower)) return 'uz';
    // Check for Cyrillic (Russian) — respond in English for now
    if (/[а-яА-ЯёЁ]/.test(lower)) return 'en';
    return 'en';
}

function findResponse(text) {
    const lower = text.toLowerCase();
    const lang = detectLanguage(text);
    let bestMatch = null;
    let bestScore = 0;

    for (const [key, entry] of Object.entries(chatResponses)) {
        let score = 0;
        for (const kw of entry.keywords) {
            if (lower.includes(kw.toLowerCase())) {
                score += kw.length; // Longer keyword matches score higher
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = entry;
        }
    }

    if (bestMatch && bestScore > 0) {
        return bestMatch[lang] || bestMatch['en'];
    }

    return defaultResponse[lang] || defaultResponse['en'];
}

// ---------- Chat UI Logic ----------
function toggleChat() {
    const win = document.getElementById('chat-window');
    win.classList.toggle('open');
    if (win.classList.contains('open')) {
        document.getElementById('chat-input').focus();
    }
}

function sendQuick(text) {
    document.getElementById('chat-input').value = text;
    sendMessage();
    document.getElementById('quick-replies').style.display = 'none';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';

    addMessage('user', text);

    // Show typing briefly, then respond
    showTyping();
    const delay = 400 + Math.random() * 600; // 400–1000ms delay for natural feel
    setTimeout(() => {
        removeTyping();
        const reply = findResponse(text);
        addMessage('bot', reply);
    }, delay);
}

function addMessage(role, text) {
    const container = document.getElementById('messages');
    const div = document.createElement('div');
    div.className = `msg ${role}`;

    if (role === 'bot') {
        div.innerHTML = `<div class="msg-icon">한</div><div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>`;
    } else {
        div.innerHTML = `<div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>`;
    }

    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function showTyping() {
    const container = document.getElementById('messages');
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.id = 'typing-indicator';
    div.innerHTML = `<div class="msg-icon">한</div><div class="msg-bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeTyping() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}
