// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
const navMenu = document.querySelector('.nav-menu')

mobileMenuToggle.addEventListener('click', () => {
  const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true'
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

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))

  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.classList.remove('lazy')
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage)
    })
  }
})
