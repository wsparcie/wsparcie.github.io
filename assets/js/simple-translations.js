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
    CURRENT_FOCUS: '▶ CURRENT FOCUS',

    // Specific content
    BACKGROUND_TEXT1: `I'm a passionate student with a love for creating practical solutions and exploring different aspects of programming. Currently pursuing a degree in Cybersecurity at Wroclaw University of Science and Technology. My passion for technology and security drives me to continuously expand my knowledge through hands-on projects and self-directed learning.`,

    BACKGROUND_TEXT2: `I thrive in challenging environments where I can apply both theoretical knowledge and practical skills to solve complex problems. My goal is to contribute to the cybersecurity field while continuously growing as a programmer.`,

    BACKGROUND_TEXT3: `Member of the strategic Solvro Science Club at the WUST. Both work and a summer internship in the field of IT would be an ideal opportunity to use the practical and theoretical skills I have acquired so far, both as part of my engineering studies and self-development.`,

    // Current focus items
    Security: 'Security',
    Automation: 'Automation',
    'Data Science': 'Data Science',
    'Full-Stack Development': 'Full-Stack Development',

    Security_description:
      '— staying updated with latest threats and defense mechanisms',
    Automation_description:
      '— creating interactive experiences and procedural content',
    'Data Science_description': '— participating in community-driven projects',
    'Full-Stack Development_description':
      '— exploring penetration testing and vulnerability assessment',

    // Projects page
    'PROJECT: SOCIAL IMPACT': '[PROJECT: SOCIAL IMPACT]',
    'STATUS: COMPLETED & PUBLISHED': 'STATUS: COMPLETED & PUBLISHED',
    CONTRIBUTION: 'CONTRIBUTION',
    PLAY_GAME: '[PLAY GAME]',
    VIEW_PROJECT: '[VIEW PROJECT]',
    'PROJECT: EDUCATIONAL': '[PROJECT: EDUCATIONAL]',
    PROJECT_EDUCATIONAL: '[PROJECT: EDUCATIONAL]',
    'PROJECT: SOCIAL IMPACT_description':
      '> Ecological computer game project Garbage Can, organized by Zwolnieni z Teorii foundation (i.a. procedurally generated building models using Geometry Nodes).',
    PROJECT_EDUCATIONAL_description: `Individual Educational Development Plan implementation – Mazovian Scholarship Program for exceptionally gifted students – the best investment in people, organized by the Marshal’s Office of the Mazovian Voivodeship.`,
    'PROJECT: APARTMENTEER': '[PROJECT: APARTMENTEER]',
    'PROJECT: APARTMENTEER_description':
      '> “Apartmenteer – your key to student housing” app, completed as part of the Summer Challenge final from KN Solvro (Backend and DevOps sections), representing the Backend path.',
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

    // About me — education & experience
    'Wroclaw University of Science and Technology':
      'Wroclaw University of Science and Technology',
    'SPECIALIZATION: Cybersecurity': 'Cybersecurity',
    'FACULTY: Computer Science and Telecommunications':
      'Faculty of Computer Science and Telecommunications',
    'INITIALIZED: since 2024': 'since 2024',
    'University of Warsaw': 'University of Warsaw',
    'SPECIALIZATION: Computer Science': 'Computer Science',
    'FACULTY: Mathematics, Informatics and Mechanics':
      'Faculty of Mathematics, Informatics and Mechanics',
    'INITIALIZED: 2023 - 2024': '2023 - 2024',
    CERTIFICATES: 'CERTIFICATES',
    'CERT: CCNA Intro': 'CCNA: Introduction to Networks',
    'CERT: CCNA SRWE': 'CCNA: Switching, Routing and Wireless Essentials',
    'CERT: CyberOps': 'Cisco CyberOps Associate',
    LANGUAGES: 'LANGUAGES',
    EXPERIENCE: 'EXPERIENCE',
    'EXP: KN Solvro': 'KN Solvro — Backend & DevOps sections',
    'EXP: Planer':
      'Backend developer for the Planer app for classes at WUST, KN Solvro (since 2025)',
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
    CURRENT_FOCUS: '▶ OBECNY FOKUS',

    // Specific content
    BACKGROUND_TEXT1:
      'Jestem pasjonatem studentem z miłością do tworzenia praktycznych rozwiązań i eksplorowania różnych aspektów programowania. Obecnie studiuję Cyberbezpieczeństwo na Politechnice Wrocławskiej. Moja pasja do technologii i bezpieczeństwa napędza mnie do ciągłego poszerzania wiedzy poprzez praktyczne projekty i samodzielną naukę.',

    BACKGROUND_TEXT2:
      'Rozwijam się w wymagających środowiskach, gdzie mogę zastosować zarówno wiedzę teoretyczną, jak i praktyczne umiejętności do rozwiązywania złożonych problemów. Moim celem jest wniesienie wkładu w dziedzinę cyberbezpieczeństwa, jednocześnie stale rozwijając się jako programista.',

    BACKGROUND_TEXT3:
      'Członek strategicznego Koła Naukowego Solvro na PWr. Zarówno praca, jak i wakacyjny staż w obszarze IT stanowiłby idealną okazję do wykorzystania dotychczas zdobytych umiejętności praktycznych i teoretycznych, zarówno w ramach studiów inżynierskich jak i samorozwoju.',

    // Current focus items
    Security: 'Bezpieczeństwo',
    Automation: 'Automatyzacja',
    'Data Science': 'Nauka o danych',
    'Full-Stack Development': 'Programowanie full-stack',

    Security_description:
      '— bycie na bieżąco z najnowszymi zagrożeniami i mechanizmami obronnymi',
    Automation_description:
      '— tworzenie interaktywnych doświadczeń i treści proceduralnych',
    'Data Science_description': '— udział w projektach społecznościowych',
    'Full-Stack Development_description':
      '— badanie testów penetracyjnych i oceny podatności',

    // Projects page
    'PROJECT: SOCIAL IMPACT': '[PROJEKT: WPŁYW SPOŁECZNY]',
    'STATUS: COMPLETED & PUBLISHED': 'STATUS: UKOŃCZONY I OPUBLIKOWANY',
    CONTRIBUTION: 'WKŁAD',
    PLAY_GAME: '[ZAGRAJ]',
    VIEW_PROJECT: '[ZOBACZ PROJEKT]',
    'PROJECT: EDUCATIONAL': '[PROJEKT: EDUKACYJNY]',
    PROJECT_EDUCATIONAL: '[PROJEKT: EDUKACYJNY]',
    'PROJECT: SOCIAL IMPACT_description':
      '> Projekt ekologicznej gry komputerowej Garbage Can, zorganizowany przez fundację Zwolnieni z Teorii (m. in. stworzyłem proceduralnie generowane modele budynków z Geometry Nodes).',
    PROJECT_EDUCATIONAL_description: `Zrealizowanie projektu edukacyjnego (zawartego w Indywidualnym Planie Rozwoju Edukacyjnego Ucznia) w ramach Mazowieckiego Programu Stypendialnego dla uczniów szczególnie uzdolnionych – najlepsza inwestycja w człowieka, organizowanego przez Urząd Marszałkowski Województwa Mazowieckiego.`,
    'PROJECT: APARTMENTEER': '[PROJEKT: MIESZKANIOWNIK]',
    'PROJECT: APARTMENTEER_description':
      '> „Mieszkaniownik – twój klucz do studenckiego mieszkania” – aplikacja stworzona w ramach finału Wakacyjne Wyzwanie od KN Solvro (sekcje Backend oraz DevOps) będąca reprezentantem Ŝieżki Backend.',
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

    // About me — education & experience
    'Wroclaw University of Science and Technology': 'Politechnika Wrocławska',
    'SPECIALIZATION: Cybersecurity': 'Cyberbezpieczeństwo',
    'FACULTY: Computer Science and Telecommunications':
      'Wydział Informatyki i Telekomunikacji',
    'INITIALIZED: since 2024': 'od 2024 r.',
    'University of Warsaw': 'Uniwersytet Warszawski',
    'SPECIALIZATION: Computer Science': 'Informatyka',
    'FACULTY: Mathematics, Informatics and Mechanics':
      'Wydział Matematyki, Informatyki i Mechaniki',
    'INITIALIZED: 2023 - 2024': '2023 - 2024',
    CERTIFICATES: 'CERTYFIKATY',
    'CERT: CCNA Intro': 'CCNA: Introduction to Networks',
    'CERT: CCNA SRWE': 'CCNA: Switching, Routing and Wireless Essentials',
    'CERT: CyberOps': 'Cisco CyberOps Associate',
    LANGUAGES: 'JĘZYKI',
    EXPERIENCE: 'DOŚWIADCZENIE',
    'EXP: KN Solvro': 'KN Solvro — sekcje Backend i DevOps',
    'EXP: Planer':
      'Programista backendu aplikacji Planer do zajęć na PWR w KN Solvro (od 2025 r.)',
  },
}

// Simple translation function
function translatePage(lang) {
  console.log('Translating to:', lang)

  if (!TRANSLATIONS[lang]) {
    console.warn('Language not supported:', lang)
    return false
  }

  try {
    const elements = document.querySelectorAll('[data-translate]')
    let translated = 0

    elements.forEach((element) => {
      const key = element.getAttribute('data-translate')
      if (key && TRANSLATIONS[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = TRANSLATIONS[lang][key]
        } else {
          element.textContent = TRANSLATIONS[lang][key]
        }
        translated++
      } else if (key) {
        console.warn('Missing translation for key:', key)
      }
    })

    console.log(`Translated ${translated} elements`)
    return true
  } catch (error) {
    console.error('Translation failed:', error)
    return false
  }
}

// Simple language switch function
function switchLanguage() {
  try {
    const currentLang = localStorage.getItem('language') || 'en'
    const newLang = currentLang === 'en' ? 'pl' : 'en'

    console.log('Switching from', currentLang, 'to', newLang)

    if (translatePage(newLang)) {
      localStorage.setItem('language', newLang)
      document.documentElement.lang = newLang

      // Update existing button text (if any)
      const buttons = document.querySelectorAll('.language-switcher')
      buttons.forEach((button) => {
        if (newLang === 'pl') {
          button.innerHTML = '<i class="fas fa-language"></i> ENGLISH'
        } else {
          button.innerHTML = '<i class="fas fa-language"></i> POLSKI'
        }
      })

      // Update floating translation button
      const floatingButton = document.querySelector(
        '.floating-translation-switcher',
      )
      if (floatingButton) {
        updateFloatingButtonText(floatingButton, newLang)
      }

      // Remove stored reference to observer since we no longer use inline styles
      if (floatingButton && floatingButton._observer) {
        floatingButton._observer.disconnect()
      }

      console.log('Language switched successfully to:', newLang)
    } else {
      console.error('Translation failed, not saving language preference')
    }
  } catch (error) {
    console.error('Language switch failed:', error)
    alert('Language switching temporarily unavailable')
  }
}

// Create floating translation switcher similar to theme switcher
function createFloatingTranslationSwitcher(currentLang) {
  // Remove existing translation switcher if any
  const existingSwitcher = document.querySelector(
    '.floating-translation-switcher',
  )
  if (existingSwitcher) {
    existingSwitcher.remove()
  }

  const translationSwitcher = document.createElement('button')
  translationSwitcher.className = 'floating-translation-switcher'
  translationSwitcher.setAttribute('aria-label', 'Toggle language')
  translationSwitcher.setAttribute('title', 'Switch between English and Polish')

  // Update button text based on current language
  updateFloatingButtonText(translationSwitcher, currentLang)

  // Add to body
  document.body.appendChild(translationSwitcher)

  // Add click event with improved feedback
  translationSwitcher.addEventListener('click', (e) => {
    e.preventDefault()

    // Visual feedback
    translationSwitcher.style.transform = 'scale(0.9)'
    setTimeout(() => {
      translationSwitcher.style.transform = 'scale(1)'
    }, 150)

    // Call language switch
    window.switchLanguage()
  })

  // Store reference for cleanup
  translationSwitcher._observer = observer
}

// Update floating button text
function updateFloatingButtonText(button, lang) {
  if (lang === 'pl') {
    button.innerHTML = '<i class="fas fa-language"></i> <span>ENGLISH</span>'
  } else {
    button.innerHTML = '<i class="fas fa-language"></i> <span>POLSKI</span>'
  }
}

// Initialize on page load
function initTranslations() {
  try {
    const savedLang = localStorage.getItem('language') || 'en'
    console.log('Initializing translations with language:', savedLang)

    translatePage(savedLang)
    document.documentElement.lang = savedLang

    // Create floating translation switcher
    createFloatingTranslationSwitcher(savedLang)

    // Update existing button text (if any)
    const buttons = document.querySelectorAll('.language-switcher')
    buttons.forEach((button) => {
      if (savedLang === 'pl') {
        button.innerHTML = '<i class="fas fa-language"></i> ENGLISH'
      } else {
        button.innerHTML = '<i class="fas fa-language"></i> POLSKI'
      }
    })

    console.log('Translations initialized successfully')
  } catch (error) {
    console.error('Translation initialization failed:', error)
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslations)
} else {
  initTranslations()
}

// Export for global use
window.switchLanguage = switchLanguage
window.translatePage = translatePage
