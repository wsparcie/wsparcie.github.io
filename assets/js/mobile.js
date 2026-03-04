/**
 * Mobile Topbar — handles hamburger overlay, theme toggle,
 * and language toggle for the fixed mobile top bar.
 * Runs only on ≤768px but wiring is always attached.
 */
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('mobile-menu-btn')
  const overlay = document.getElementById('mobile-nav-overlay')
  const themeBtn = document.getElementById('mobile-theme-btn')
  const langBtn = document.getElementById('mobile-lang-btn')

  /* ---- hamburger / overlay ---- */
  function openNav() {
    document.body.classList.add('nav-open')
    if (overlay) overlay.classList.add('active')
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true')
  }

  function closeNav() {
    document.body.classList.remove('nav-open')
    if (overlay) overlay.classList.remove('active')
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false')
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation()
      document.body.classList.contains('nav-open') ? closeNav() : openNav()
    })
  }

  /* Close on nav-link tap */
  if (overlay) {
    overlay.querySelectorAll('.nav-item').forEach(function (link) {
      link.addEventListener('click', closeNav)
    })

    /* Close when tapping the overlay background itself */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeNav()
    })
  }

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav()
  })

  /* ---- theme toggle ---- */
  function syncThemeBtn() {
    if (!themeBtn) return
    const isDark =
      document.documentElement.getAttribute('data-theme') !== 'light'
    themeBtn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>'
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      if (
        window.themeSwitcher &&
        typeof window.themeSwitcher.toggleTheme === 'function'
      ) {
        window.themeSwitcher.toggleTheme()
      } else {
        /* Fallback if ThemeSwitcher not yet initialised */
        const current = localStorage.getItem('theme') || 'light'
        const next = current === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', next)
        document.documentElement.setAttribute('data-theme', next)
      }
      syncThemeBtn()
    })

    /* Keep in sync when theme changes from elsewhere */
    document.addEventListener('themeChanged', syncThemeBtn)
    syncThemeBtn()
  }

  /* ---- language toggle ---- */
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      if (
        window.switchLanguage &&
        typeof window.switchLanguage === 'function'
      ) {
        window.switchLanguage()
      }
      /* update label */
      const cur = document.documentElement.lang || 'en'
      langBtn.textContent = cur === 'pl' ? 'PL' : 'EN'
    })
  }
})
