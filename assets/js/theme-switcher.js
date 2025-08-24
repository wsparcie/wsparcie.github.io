// Enhanced Theme Switcher with Light Mode Support
class ThemeSwitcher {
  constructor() {
    this.currentTheme = 'dark'
    this.init()
  }

  init() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark'
    this.setTheme(savedTheme)

    // Create theme switcher buttons
    this.createThemeSwitchers()

    // Listen for system theme changes
    this.listenToSystemTheme()
  }

  createThemeSwitchers() {
    // Helper function to check text content
    const containsText = (element, text) =>
      element.textContent.toLowerCase().includes(text.toLowerCase())

    // Update existing theme switcher buttons
    const existingButtons = Array.from(
      document.querySelectorAll('button')
    ).filter(
      (button) =>
        containsText(button, 'light/dark') || containsText(button, 'sun/moon')
    )

    // Find all buttons that should be theme switchers
    const themeSwitcherButtons = document.querySelectorAll(
      '.language-switcher button'
    )

    themeSwitcherButtons.forEach((button, index) => {
      // The second button in language-switcher should be theme switcher
      if (
        index === 1 ||
        containsText(button, 'light') ||
        containsText(button, 'sun')
      ) {
        this.setupThemeButton(button)
      }
    })

    // If no theme switcher found, create one
    if (document.querySelectorAll('.theme-switcher').length === 0) {
      this.createFloatingThemeSwitcher()
    }
  }

  setupThemeButton(button) {
    button.classList.add('theme-switcher')
    button.setAttribute('aria-label', 'Toggle theme')
    button.setAttribute('title', 'Switch between dark and light mode')

    // Update button text based on current theme
    this.updateButtonText(button)

    // Add click event
    button.addEventListener('click', () => {
      this.toggleTheme()
    })
  }

  updateButtonText(button) {
    if (this.currentTheme === 'dark') {
      button.innerHTML = '<i class="fas fa-sun"></i> LIGHT'
    } else {
      button.innerHTML = '<i class="fas fa-moon"></i> DARK'
    }
  }

  createFloatingThemeSwitcher() {
    const themeSwitcher = document.createElement('button')
    themeSwitcher.className = 'theme-switcher'
    themeSwitcher.setAttribute('aria-label', 'Toggle theme')
    themeSwitcher.setAttribute('title', 'Switch between dark and light mode')

    this.updateButtonText(themeSwitcher)

    // Add to body
    document.body.appendChild(themeSwitcher)

    // Add click event
    themeSwitcher.addEventListener('click', () => {
      this.toggleTheme()
    })
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
    this.setTheme(newTheme)

    // Add transition effect
    this.addTransitionEffect()
  }

  setTheme(theme) {
    this.currentTheme = theme

    // Apply theme to document
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
      document.body.classList.add('light-theme')
    } else {
      document.documentElement.removeAttribute('data-theme')
      document.body.classList.remove('light-theme')
    }

    // Save preference
    localStorage.setItem('theme', theme)

    // Update all theme switcher buttons
    const allThemeButtons = document.querySelectorAll('.theme-switcher')
    allThemeButtons.forEach((button) => this.updateButtonText(button))

    // Update matrix effect for light theme
    this.updateMatrixEffect()

    // Trigger custom event for other components
    document.dispatchEvent(
      new CustomEvent('themeChanged', { detail: { theme } })
    )
  }

  addTransitionEffect() {
    // Add a smooth transition effect
    document.body.style.transition = 'all 0.3s ease-in-out'

    // Remove transition after animation
    setTimeout(() => {
      document.body.style.transition = ''
    }, 300)
  }

  updateMatrixEffect() {
    // Update matrix animation colors based on theme
    const matrixCanvas = document.querySelector('#matrix canvas')
    if (matrixCanvas) {
      const ctx = matrixCanvas.getContext('2d')
      if (this.currentTheme === 'light') {
        // Make matrix effect more subtle in light mode
        matrixCanvas.style.opacity = '0.05'
      } else {
        matrixCanvas.style.opacity = '0.1'
      }
    }
  }

  listenToSystemTheme() {
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')

      mediaQuery.addListener((e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'light' : 'dark')
        }
      })

      // Set initial theme based on system preference if no saved preference
      if (!localStorage.getItem('theme')) {
        this.setTheme(mediaQuery.matches ? 'light' : 'dark')
      }
    }
  }

  // Method to get current theme
  getCurrentTheme() {
    return this.currentTheme
  }
}

// Enhanced mobile menu with theme support
class MobileMenu {
  constructor() {
    this.init()
  }

  init() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
    const navMenu = document.querySelector('.nav-menu')

    if (!mobileMenuToggle || !navMenu) return

    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded =
        mobileMenuToggle.getAttribute('aria-expanded') === 'true'
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded)
      navMenu.classList.toggle('active')
    })

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active')
        mobileMenuToggle.setAttribute('aria-expanded', 'false')
      }
    })

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
        mobileMenuToggle.setAttribute('aria-expanded', 'false')
      }
    })
  }
}

// Enhanced accessibility features
class AccessibilityEnhancements {
  constructor() {
    this.init()
  }

  init() {
    this.addSkipLinks()
    this.enhanceKeyboardNavigation()
    this.addReducedMotionSupport()
  }

  addSkipLinks() {
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.className = 'skip-link'
    skipLink.textContent = 'Skip to main content'
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--text-primary, #00ff00);
      color: var(--bg-secondary, #000);
      padding: 8px;
      z-index: 100;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.3s;
    `

    skipLink.addEventListener('focus', () => {
      skipLink.style.transform = 'translateY(40px)'
    })

    skipLink.addEventListener('blur', () => {
      skipLink.style.transform = 'translateY(0)'
    })

    document.body.insertBefore(skipLink, document.body.firstChild)
  }

  enhanceKeyboardNavigation() {
    // Add focus indicators for interactive elements
    const style = document.createElement('style')
    style.textContent = `
      .nav-item:focus,
      .cyber-button:focus,
      .theme-switcher:focus {
        outline: 2px solid var(--text-accent, #ff0000);
        outline-offset: 2px;
      }
    `
    document.head.appendChild(style)
  }

  addReducedMotionSupport() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (prefersReducedMotion.matches) {
      const style = document.createElement('style')
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `
      document.head.appendChild(style)
    }
  }
}

// Copy to clipboard functionality for contact info
class ClipboardManager {
  constructor() {
    this.init()
  }

  init() {
    const copyIcons = document.querySelectorAll('.copy-icon')
    copyIcons.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const parent = e.target.closest('.cyber-input')
        const value = parent?.getAttribute('data-value') || parent?.textContent

        if (value) {
          this.copyToClipboard(value.trim())
          this.showCopyFeedback(e.target)
        }
      })
    })
  }

  async copyToClipboard(text) {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  showCopyFeedback(element) {
    const originalText = element.textContent
    element.textContent = '✓'
    element.style.color = 'var(--text-primary, #00ff00)'

    setTimeout(() => {
      element.textContent = originalText
      element.style.color = ''
    }, 1000)
  }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme switcher
  window.themeSwitcher = new ThemeSwitcher()

  // Initialize mobile menu
  new MobileMenu()

  // Initialize accessibility enhancements
  new AccessibilityEnhancements()

  // Initialize clipboard manager
  new ClipboardManager()

  // Add main content ID for skip link
  const mainContent = document.querySelector('.main-content')
  if (mainContent) {
    mainContent.id = 'main-content'
  }
})

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ThemeSwitcher,
    MobileMenu,
    AccessibilityEnhancements,
    ClipboardManager,
  }
}
