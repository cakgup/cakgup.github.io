// ======= HAMBURGER MENU =======
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ======= LOGO CLICK =======
const headerLogoContainer = document.querySelector('.header__logo-container')
headerLogoContainer.addEventListener('click', () => {
  location.href = 'index.html'
})

// ======= ✅ FIX: TYPED.JS — animasi teks hero =======
// Pastikan typed.js sudah diimport di <head> sebelum index.js dipanggil
if (typeof Typed !== 'undefined') {
  new Typed('#typed-role', {
    strings: [
      'Pranata Komputer Ahli Muda',
      'Cybersecurity Specialist',
      'Penetration Tester',
      'IT Governance Expert',
      'DevOps & CI/CD Enthusiast',
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
  })
}

// ======= ✅ FIX: INTERSECTION OBSERVER — animasi reveal saat scroll =======
const revealElements = document.querySelectorAll('.reveal')

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--active')
        // Hentikan observasi setelah muncul (animasi hanya sekali)
        revealObserver.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  }
)

revealElements.forEach((el) => revealObserver.observe(el))

// ======= HEADER SCROLL EFFECT =======
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  if (!header) return

  if (window.scrollY > 80) {
    header.classList.add('header--scrolled')
  } else {
    header.classList.remove('header--scrolled')
  }
})