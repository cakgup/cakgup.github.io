// ======= HAMBURGER MENU =======
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

if (hamMenuBtn && smallMenu && headerHamMenuBtn && headerHamMenuCloseBtn) {
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
}

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    if (!smallMenu || !headerHamMenuBtn || !headerHamMenuCloseBtn) return

    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ======= LOGO CLICK =======
const headerLogoContainer = document.querySelector('.header__logo-container')

if (headerLogoContainer) {
  headerLogoContainer.addEventListener('click', () => {
    location.href = 'index.html'
  })
}

// ======= TYPED.JS — animasi teks hero =======
// Pastikan typed.js sudah diimport di <head> sebelum index.js dipanggil
if (typeof Typed !== 'undefined' && document.querySelector('#typed-role')) {
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

// ======= INTERSECTION OBSERVER — animasi reveal saat scroll =======
const revealElements = document.querySelectorAll('.reveal')

if ('IntersectionObserver' in window && revealElements.length > 0) {
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
}

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

// ======= CONTACT FORM SUBMISSION =======
const contactForm = document.querySelector('.contact__form')
const contactBtn = document.querySelector('.contact__btn')
const contactInfo = document.querySelector('.contact__form-info')

const CONTACT_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxSjVxBLh1Fj2O7UM-YZsVKN_JvHgIFSh3VY_WsCymTRd9ZNSVEzj4eaaN3CLmgKSsu/exec'
/* ini ada di emailnya baghasasi ya https://docs.google.com/spreadsheets/d/13j12tpJ6MVuqS48sz1TVoZD5A73KVfINgOlMujk67S0/edit?gid=0#gid=0 */
function setContactInfo(message, type = 'info') {
  if (!contactInfo) return

  contactInfo.textContent = message
  contactInfo.classList.remove(
    'contact__form-info--success',
    'contact__form-info--error',
    'contact__form-info--loading'
  )

  if (type === 'success') {
    contactInfo.classList.add('contact__form-info--success')
  } else if (type === 'error') {
    contactInfo.classList.add('contact__form-info--error')
  } else if (type === 'loading') {
    contactInfo.classList.add('contact__form-info--loading')
  }
}

function getCurrentDateTimeId() {
  return new Date().toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

if (contactForm && contactBtn) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nameInput = contactForm.querySelector('#name')
    const emailInput = contactForm.querySelector('#email')
    const messageInput = contactForm.querySelector('#message')

    const name = nameInput ? nameInput.value.trim() : ''
    const email = emailInput ? emailInput.value.trim() : ''
    const message = messageInput ? messageInput.value.trim() : ''

    if (!name || !email || !message) {
      setContactInfo('Mohon lengkapi nama, email, dan pesan terlebih dahulu.', 'error')
      return
    }

    if (emailInput && !emailInput.checkValidity()) {
      setContactInfo('Format email belum valid.', 'error')
      emailInput.focus()
      return
    }

    const originalBtnText = contactBtn.textContent
    contactBtn.textContent = 'Sending...'
    contactBtn.disabled = true
    setContactInfo('Mengirim pesan...', 'loading')

    const payload = {
      id: Date.now(),

      // Field utama
      name: name,
      email: email,
      message: message,

      // Kompatibilitas dengan struktur komentar pada repo invitation
      status: email,
      date: getCurrentDateTimeId(),
      color: '#25D366',

      // Penanda agar data contact bisa dibedakan dari komentar/ucapan
      type: 'contact',
    }

    try {
      // Menggunakan no-cors + text/plain agar kompatibel dengan Google Apps Script
      // dan pola pengiriman pada comentarService.js.
      await fetch(CONTACT_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      setContactInfo('Pesan berhasil dikirim. Terima kasih.', 'success')
      contactForm.reset()
    } catch (error) {
      console.error('Error!', error.message)
      setContactInfo('Pesan gagal dikirim. Silakan coba kembali.', 'error')
    } finally {
      contactBtn.textContent = originalBtnText
      contactBtn.disabled = false
    }
  })
}
