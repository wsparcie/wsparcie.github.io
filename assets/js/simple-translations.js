// Simple, robust translation system to prevent white page issues
// This replaces the complex translations.js with a more reliable approach

const TRANSLATIONS = {
  en: {
    // Navigation
    HOME: 'HOME',
    ABOUT_ME: 'ABOUT_ME',
    PROJECTS: 'PROJECTS',
    CONTACT: 'CONTACT',
    BLOG: 'BLOG',

    // Main page sections
    CURRENT_GOAL: '[CURRENT_GOAL]',
    EDUCATION: '[EDUCATION]',
    APTITUDES: '[APTITUDES]',
    SKILLS: '[SKILLS]',
    ACHIEVEMENTS: '[ACHIEVEMENTS]',
    PROJECTS: '[PROJECTS]',

    // About page
    PROFILE: '[PROFILE]',
    PERSONAL_INFO: '[PERSONAL_INFO]',
    MOTIVATION: '▶ MOTIVATION',
    ROADMAP: '[ROADMAP]',
    'CURRENT_FOCUS': '▶ CURRENT FOCUS',

    // Specific content
    BACKGROUND_TEXT1: `I'm a passionate student with a love for creating practical solutions and exploring different aspects of programming. Currently pursuing a degree in Cybersecurity at Wroclaw University of Science and Technology. My passion for technology and security drives me to continuously expand my knowledge through hands-on projects and self-directed learning.`,
    
    BACKGROUND_TEXT2: `I thrive in challenging environments where I can apply both theoretical knowledge and practical skills to solve complex problems. My goal is to contribute to the cybersecurity field while continuously growing as a programmer.`,

    // Current focus items
    Security: 'Security',
    Automation: 'Automation',
    'Data Science': 'Data Science',
    'Full-Stack Development': 'Full-Stack Development',
    
    Security_description: '— staying updated with latest threats and defense mechanisms',
    Automation_description: '— creating interactive experiences and procedural content',
    'Data Science_description': '— participating in community-driven projects',
    'Full-Stack Development_description': '— exploring penetration testing and vulnerability assessment',

    // Projects page
    'PROJECT: SOCIAL IMPACT': '[PROJECT: SOCIAL IMPACT]',
    'STATUS: COMPLETED & PUBLISHED': 'STATUS: COMPLETED & PUBLISHED',
    CONTRIBUTION: 'CONTRIBUTION',
    PLAY_GAME: '[PLAY GAME]',
    'PROJECT: EDUCATIONAL': '[PROJECT: EDUCATIONAL]',
    'PROJECT_EDUCATIONAL': '[PROJECT: EDUCATIONAL]',
    'PROJECT: SOCIAL IMPACT_description': '> Ecological computer game project Garbage Can, organized by Zwolnieni z Teorii foundation',
    'PROJECT_EDUCATIONAL_description': `Individual Educational Development Plan implementation Mazowieckie Scholarship Program for Exceptionally Talented Students [ORGANIZER: Mazowieckie Voivodeship Marshal's Office]`,
    GITHUB_REPOSITORIES: '[GITHUB_REPOSITORIES]',
    'GITHUB FEED': '▶ GITHUB FEED',

    // Contact page
    CONTACT_CHANNELS: '[CONTACT_CHANNELS]',
    ENCRYPTED_MAIL: 'ENCRYPTED_MAIL',
    SECURE_MATRIX: 'SECURE_MATRIX',
    SOCIAL_NETWORKS: 'SOCIAL_NETWORKS',
    DIRECT_TRANSMISSION: '[DIRECT_TRANSMISSION]',
    IDENTITY_STRING: 'IDENTITY_STRING:',
    ENTER_YOUR_NAME: 'ENTER_YOUR_NAME',
    CONTACT_NODE: 'CONTACT_NODE:',
    YOUR_ENCRYPTED_MAIL: 'YOUR_ENCRYPTED_MAIL',
    TRANSMISSION_TYPE: 'TRANSMISSION_TYPE:',
    JOB_OFFER: 'JOB_OFFER',
    COLLABORATION: 'COLLABORATION',
    TECH_QUESTION: 'TECH_QUESTION',
    OTHER_QUERY: 'OTHER_QUERY',
    'MESSAGE_PAYLOAD:': 'MESSAGE_PAYLOAD:',
    ENTER_YOUR_MESSAGE_HERE: 'ENTER_YOUR_MESSAGE_HERE',
    INITIATE_TRANSMISSION: 'INITIATE_TRANSMISSION',
    PURGE_BUFFER: 'PURGE_BUFFER',

    // Aptitudes
    'FAST LEARNER': 'FAST LEARNER',
    'DATA HUNTER': 'DATA HUNTER',
    ORGANIZED: 'ORGANIZED',
    PRECISE: 'PRECISE',
    RELIABLE: 'RELIABLE',
    RESPONSIBLE: 'RESPONSIBLE',
    'PRESSURE RESISTANT': 'PRESSURE RESISTANT',
    'DEADLINE KEEPER': 'DEADLINE KEEPER',
  },
  
  pl: {
    // Navigation
    HOME: 'STRONA_GŁÓWNA',
    ABOUT_ME: 'O_MNIE',
    PROJECTS: 'PROJEKTY',
    CONTACT: 'KONTAKT',
    BLOG: 'BLOG',

    // Main page sections
    CURRENT_GOAL: '[OBECNY_CEL]',
    EDUCATION: '[EDUKACJA]',
    APTITUDES: '[UMIEJĘTNOŚCI]',
    SKILLS: '[TECHNOLOGIE]',
    ACHIEVEMENTS: '[OSIĄGNIĘCIA]',
    PROJECTS: '[PROJEKTY]',

    // About page
    PROFILE: '[PROFIL]',
    PERSONAL_INFO: '[INFORMACJE_OSOBISTE]',
    MOTIVATION: '▶ MOTYWACJA',
    ROADMAP: '[PLAN_ROZWOJU]',
    'CURRENT_FOCUS': '▶ OBECNY FOKUS',

    // Specific content
    BACKGROUND_TEXT1: 'Jestem pasjonatem studentem z miłością do tworzenia praktycznych rozwiązań i eksplorowania różnych aspektów programowania. Obecnie studiuję Cyberbezpieczeństwo na Politechnice Wrocławskiej. Moja pasja do technologii i bezpieczeństwa napędza mnie do ciągłego poszerzania wiedzy poprzez praktyczne projekty i samodzielną naukę.',
    
    BACKGROUND_TEXT2: 'Rozwijam się w wymagających środowiskach, gdzie mogę zastosować zarówno wiedzę teoretyczną, jak i praktyczne umiejętności do rozwiązywania złożonych problemów. Moim celem jest wniesienie wkładu w dziedzinę cyberbezpieczeństwa, jednocześnie stale rozwijając się jako programista.',

    // Current focus items
    Security: 'Bezpieczeństwo',
    Automation: 'Automatyzacja',
    'Data Science': 'Nauka o danych',
    'Full-Stack Development': 'Programowanie full-stack',
    
    Security_description: '— bycie na bieżąco z najnowszymi zagrożeniami i mechanizmami obronnymi',
    Automation_description: '— tworzenie interaktywnych doświadczeń i treści proceduralnych',
    'Data Science_description': '— udział w projektach społecznościowych',
    'Full-Stack Development_description': '— badanie testów penetracyjnych i oceny podatności',

    // Projects page
    'PROJECT: SOCIAL IMPACT': '[PROJEKT: WPŁYW SPOŁECZNY]',
    'STATUS: COMPLETED & PUBLISHED': 'STATUS: UKOŃCZONY I OPUBLIKOWANY',
    CONTRIBUTION: 'WKŁAD',
    PLAY_GAME: '[ZAGRAJ]',
    'PROJECT: EDUCATIONAL': '[PROJEKT: EDUKACYJNY]',
    'PROJECT_EDUCATIONAL': '[PROJEKT: EDUKACYJNY]',
    'PROJECT: SOCIAL IMPACT_description': '> Projekt ekologicznej gry komputerowej Garbage Can, zorganizowany przez fundację Zwolnieni z Teorii',
    'PROJECT_EDUCATIONAL_description': `Wdrożenie indywidualnego planu rozwoju edukacyjnego Mazowiecki program stypendialny dla wyjątkowo utalentowanych uczniów [ORGANIZATOR: Urząd Marszałkowski Województwa Mazowieckiego]`,
    GITHUB_REPOSITORIES: '[REPOZYTORIA_GITHUB]',
    'GITHUB FEED': '▶ KANAŁ GITHUB',

    // Contact page
    CONTACT_CHANNELS: '[KANAŁY_KONTAKTU]',
    ENCRYPTED_MAIL: 'SZYFROWANY_MAIL',
    SECURE_MATRIX: 'BEZPIECZNY_MATRIX',
    SOCIAL_NETWORKS: 'SIECI_SPOŁECZNOŚCIOWE',
    DIRECT_TRANSMISSION: '[BEZPOŚREDNIA_TRANSMISJA]',
    IDENTITY_STRING: 'CIĄG_TOŻSAMOŚCI:',
    ENTER_YOUR_NAME: 'WPROWADŹ_SWOJE_IMIĘ',
    CONTACT_NODE: 'WĘZEŁ_KONTAKTOWY:',
    YOUR_ENCRYPTED_MAIL: 'TWÓJ_SZYFROWANY_MAIL',
    TRANSMISSION_TYPE: 'TYP_TRANSMISJI:',
    JOB_OFFER: 'OFERTA_PRACY',
    COLLABORATION: 'WSPÓŁPRACA',
    TECH_QUESTION: 'PYTANIE_TECHNICZNE',
    OTHER_QUERY: 'INNE_ZAPYTANIE',
    'MESSAGE_PAYLOAD:': 'ŁADUNEK_WIADOMOŚCI:',
    ENTER_YOUR_MESSAGE_HERE: 'WPROWADŹ_SWOJĄ_WIADOMOŚĆ_TUTAJ',
    INITIATE_TRANSMISSION: 'INICJUJ_TRANSMISJĘ',
    PURGE_BUFFER: 'WYCZYŚĆ_BUFOR',

    // Aptitudes
    'FAST LEARNER': 'SZYBKO SIĘ UCZĘ',
    'DATA HUNTER': 'ŁOWCA DANYCH',
    ORGANIZED: 'ZORGANIZOWANY',
    PRECISE: 'PRECYZYJNY',
    RELIABLE: 'NIEZAWODNY',
    RESPONSIBLE: 'ODPOWIEDZIALNY',
    'PRESSURE RESISTANT': 'ODPORNY NA STRES',
    'DEADLINE KEEPER': 'DOTRZYMUJĘ TERMINÓW',
  }
};

// Simple translation function
function translatePage(lang) {
  console.log('Translating to:', lang);
  
  if (!TRANSLATIONS[lang]) {
    console.warn('Language not supported:', lang);
    return false;
  }

  try {
    const elements = document.querySelectorAll('[data-translate]');
    let translated = 0;

    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (key && TRANSLATIONS[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = TRANSLATIONS[lang][key];
        } else {
          element.textContent = TRANSLATIONS[lang][key];
        }
        translated++;
      } else if (key) {
        console.warn('Missing translation for key:', key);
      }
    });

    console.log(`Translated ${translated} elements`);
    return true;
  } catch (error) {
    console.error('Translation failed:', error);
    return false;
  }
}

// Simple language switch function
function switchLanguage() {
  try {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'pl' : 'en';
    
    console.log('Switching from', currentLang, 'to', newLang);
    
    if (translatePage(newLang)) {
      localStorage.setItem('language', newLang);
      document.documentElement.lang = newLang;
      
      // Update existing button text (if any)
      const buttons = document.querySelectorAll('.language-switcher');
      buttons.forEach(button => {
        if (newLang === 'pl') {
          button.innerHTML = '<i class="fas fa-language"></i> ENGLISH';
        } else {
          button.innerHTML = '<i class="fas fa-language"></i> POLSKI';
        }
      });
      
      // Update floating translation button
      const floatingButton = document.querySelector('.floating-translation-switcher');
      if (floatingButton) {
        updateFloatingButtonText(floatingButton, newLang);
      }
      
      console.log('Language switched successfully to:', newLang);
    } else {
      console.error('Translation failed, not saving language preference');
    }
  } catch (error) {
    console.error('Language switch failed:', error);
    alert('Language switching temporarily unavailable');
  }
}

// Create floating translation switcher similar to theme switcher
function createFloatingTranslationSwitcher(currentLang) {
  // Remove existing translation switcher if any
  const existingSwitcher = document.querySelector('.floating-translation-switcher');
  if (existingSwitcher) {
    existingSwitcher.remove();
  }

  const translationSwitcher = document.createElement('button');
  translationSwitcher.className = 'floating-translation-switcher';
  translationSwitcher.setAttribute('aria-label', 'Toggle language');
  translationSwitcher.setAttribute('title', 'Switch between English and Polish');

  // Update button text based on current language
  updateFloatingButtonText(translationSwitcher, currentLang);

  // Enhanced position and styling similar to theme switcher
  const setTranslationSwitcherStyle = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const isLightTheme = theme === 'light' || document.body.classList.contains('light-theme');
    
    if (isLightTheme) {
      translationSwitcher.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 20px;
        z-index: 1000;
        background: #fff;
        border: 2px solid #333333;
        color: #333333;
        padding: 10px 15px;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(51,51,51,0.1);
        font-family: 'Courier New', monospace;
        font-size: 12px;
        font-weight: bold;
        border-radius: 0;
        transition: all 0.3s ease-in-out;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      `;
    } else {
      translationSwitcher.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 20px;
        z-index: 1000;
        background: #000000;
        border: 2px solid #00ff00;
        color: #00ff00;
        padding: 10px 15px;
        cursor: pointer;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        font-weight: bold;
        border-radius: 0;
        transition: all 0.3s ease-in-out;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        box-shadow: 0 0 5px rgba(0,255,0,0.2);
      `;
    }
  };

  // Initial styling
  setTranslationSwitcherStyle();

  // Enhanced theme change listener
  const handleThemeChange = () => {
    setTranslationSwitcherStyle();
  };

  // Listen for theme changes via multiple methods
  document.addEventListener('themeChanged', handleThemeChange);
  
  // Also listen for data-theme attribute changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && 
          (mutation.attributeName === 'data-theme' || 
           mutation.attributeName === 'class')) {
        setTranslationSwitcherStyle();
      }
    });
  });
  
  observer.observe(document.documentElement, { attributes: true });
  observer.observe(document.body, { attributes: true });

  // Enhanced hover effects matching theme switcher
  translationSwitcher.addEventListener('mouseenter', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const isLightTheme = theme === 'light' || document.body.classList.contains('light-theme');
    
    if (isLightTheme) {
      translationSwitcher.style.transform = 'translateY(-3px) scale(1.05)';
      translationSwitcher.style.boxShadow = '0 8px 25px rgba(51,51,51,0.25)';
      translationSwitcher.style.borderColor = '#555555';
    } else {
      translationSwitcher.style.transform = 'translateY(-3px) scale(1.05)';
      translationSwitcher.style.boxShadow = '0 0 20px rgba(0,255,0,0.4), 0 0 40px rgba(0,255,0,0.2)';
      translationSwitcher.style.borderColor = '#44ff44';
    }
  });

  translationSwitcher.addEventListener('mouseleave', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const isLightTheme = theme === 'light' || document.body.classList.contains('light-theme');
    
    translationSwitcher.style.transform = 'translateY(0) scale(1)';
    
    if (isLightTheme) {
      translationSwitcher.style.boxShadow = '0 0 10px rgba(51,51,51,0.1)';
      translationSwitcher.style.borderColor = '#333333';
    } else {
      translationSwitcher.style.boxShadow = '0 0 5px rgba(0,255,0,0.2)';
      translationSwitcher.style.borderColor = '#00ff00';
    }
  });

  // Active/click effect
  translationSwitcher.addEventListener('mousedown', () => {
    translationSwitcher.style.transform = 'translateY(0) scale(0.95)';
  });

  translationSwitcher.addEventListener('mouseup', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const isLightTheme = theme === 'light' || document.body.classList.contains('light-theme');
    translationSwitcher.style.transform = 'translateY(-3px) scale(1.05)';
  });

  // Add to body
  document.body.appendChild(translationSwitcher);

  // Add click event with improved feedback
  translationSwitcher.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Visual feedback
    translationSwitcher.style.transform = 'scale(0.9)';
    setTimeout(() => {
      translationSwitcher.style.transform = 'scale(1)';
    }, 150);
    
    // Call language switch
    window.switchLanguage();
  });

  // Store reference for cleanup
  translationSwitcher._observer = observer;
}

// Update floating button text
function updateFloatingButtonText(button, lang) {
  if (lang === 'pl') {
    button.innerHTML = '<i class="fas fa-language"></i> ENGLISH';
  } else {
    button.innerHTML = '<i class="fas fa-language"></i> POLSKI';
  }
}

// Initialize on page load
function initTranslations() {
  try {
    const savedLang = localStorage.getItem('language') || 'en';
    console.log('Initializing translations with language:', savedLang);
    
    translatePage(savedLang);
    document.documentElement.lang = savedLang;
    
    // Create floating translation switcher
    createFloatingTranslationSwitcher(savedLang);
    
    // Update existing button text (if any)
    const buttons = document.querySelectorAll('.language-switcher');
    buttons.forEach(button => {
      if (savedLang === 'pl') {
        button.innerHTML = '<i class="fas fa-language"></i> ENGLISH';
      } else {
        button.innerHTML = '<i class="fas fa-language"></i> POLSKI';
      }
    });
    
    console.log('Translations initialized successfully');
  } catch (error) {
    console.error('Translation initialization failed:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslations);
} else {
  initTranslations();
}

// Export for global use
window.switchLanguage = switchLanguage;
window.translatePage = translatePage;
