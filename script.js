function ahadith(translations) {
  const hadith = document.querySelector(".why-hadith");
  const teller = document.querySelector(".why-teller");
  const rightBtn = document.querySelector(".why-right-btn");
  const leftBtn = document.querySelector(".why-left-btn");

  const hadiths = translations.hadiths || [];
  let index = 0;

  function updateUI() {
    hadith.textContent = hadiths[index].hadith;
    teller.textContent = hadiths[index].teller;
  }

  rightBtn.addEventListener("click", () => {
    index = (index - 1 + hadiths.length) % hadiths.length;
    updateUI();
  });

  leftBtn.addEventListener("click", () => {
    index = (index + 1) % hadiths.length;
    updateUI();
  });

  setInterval(() => {
    index = (index + 1) % hadiths.length;
    updateUI();
  }, 6000);

  updateUI();
}


//
const menuBtn = document.querySelector(".nav-menu");
const navBox = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  navBox.classList.toggle("block");
});

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'ar';
  loadLanguage(lang);
});

// Language toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
  const currentLang = localStorage.getItem('lang') || 'ar';
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('lang', newLang);
  loadLanguage(newLang);
});

// 🔁 Helper to get nested values
function getNestedValue(obj, key) {
  return key.split('.').reduce((o, k) => (o ? o[k] : null), obj);
}

// Load and apply translations
function loadLanguage(lang) {
  fetch(`./locales/${lang}.json`)
    .then(res => res.json())
    .then(translations => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(translations, key);
        if (value) {
          el.textContent = value;
        }
      });

      // Set direction (RTL for Arabic)
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      updateNavDirection(lang);
      ahadith(translations);
    });
}

function updateNavDirection(lang) {
  const navBox = document.querySelector('.nav');
  
  if (lang === 'ar') {
    navBox.style.right = '3rem';
    navBox.style.left = 'unset';
    navBox.style.animation = 'scale-in-tr 0.5s linear both'; // Right-to-left animation
  } else {
    navBox.style.left = '3rem';
    navBox.style.right = 'unset';
    navBox.style.animation = 'scale-in-left 0.5s linear both'; // Left-to-right animation
  }
}