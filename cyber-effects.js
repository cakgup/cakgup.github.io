/* Decorative cyber network. No dependencies; tune density/speed here. */
(() => {
  'use strict'
  const config = { maxNodes: 68, mobileNodes: 28, spacing: 18000, linkDistance: 175, speed: 0.22 }
  const hero = document.querySelector('.home-hero, .project-cs-hero')
  if (!hero) return
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  canvas.className = 'cyber-network'
  canvas.setAttribute('aria-hidden', 'true')
  document.body.prepend(canvas)

  const reticle = document.createElement('div')
  reticle.className = 'cyber-reticle'
  reticle.setAttribute('aria-hidden', 'true')
  document.body.append(reticle)

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  let width = 0, height = 0, nodes = [], frame = 0, lastTime = 0, time = 0
  const pointer = { x: 0, y: 0, active: false }
  const follower = { x: 0, y: 0 }
  let ripples = []
  const enabled = () => !reduced.matches

  function resize() {
    const bounds = canvas.getBoundingClientRect()
    if (width === bounds.width && height === bounds.height) return
    width = bounds.width
    height = bounds.height
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * ratio)
    canvas.height = Math.round(height * ratio)
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    const cap = width < 600 ? config.mobileNodes : config.maxNodes
    const count = Math.min(cap, Math.max(18, Math.round(width * height / config.spacing)))
    nodes = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      phase: Math.random() * Math.PI * 2, label: i % 8 === 0,
    }))
    draw(0)
    schedule()
  }

  function draw(delta) {
    ctx.clearRect(0, 0, width, height)
    const px = pointer.x, py = pointer.y
    if (pointer.active && enabled()) {
      const glow = ctx.createRadialGradient(px, py, 0, px, py, 230)
      glow.addColorStop(0, 'rgba(82,119,245,0.17)')
      glow.addColorStop(1, 'rgba(65,105,225,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)
    }
    nodes.forEach((node) => {
      node.x += node.vx * delta
      node.y += node.vy * delta
      if (node.x < 0 || node.x > width) { node.vx *= -1; node.x = Math.max(0, Math.min(width, node.x)) }
      if (node.y < 0 || node.y > height) { node.vy *= -1; node.y = Math.max(0, Math.min(height, node.y)) }
    })
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i]
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j]
        const distance = Math.hypot(a.x - b.x, a.y - b.y)
        if (distance > config.linkDistance) continue
        ctx.strokeStyle = `rgba(102,138,255,${(1 - distance / config.linkDistance) * 0.42})`
        ctx.lineWidth = 0.9
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
        if ((i + j) % 4 === 0) {
          const progress = (time * 0.00014 + i * 0.17 + j * 0.11) % 1
          ctx.fillStyle = 'rgba(156,177,255,0.9)'
          ctx.fillRect(a.x + (b.x - a.x) * progress - 1, a.y + (b.y - a.y) * progress - 1, 2.5, 2.5)
        }
      }
      const near = pointer.active && enabled() && Math.hypot(a.x - px, a.y - py) < 155
      if (near) {
        ctx.strokeStyle = 'rgba(112,147,255,0.34)'
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(px, py); ctx.stroke()
      }
      ctx.fillStyle = near ? '#BBCBFF' : 'rgba(112,147,255,0.85)'
      ctx.beginPath(); ctx.arc(a.x, a.y, near ? 3 : 2, 0, Math.PI * 2); ctx.fill()
      if (a.label) {
        ctx.strokeStyle = `rgba(112,147,255,${0.26 + Math.sin(time * 0.001 + a.phase) * 0.06})`
        ctx.beginPath(); ctx.arc(a.x, a.y, 8, 0, Math.PI * 2); ctx.stroke()
        ctx.font = '10px monospace'
        ctx.fillStyle = 'rgba(139,165,255,0.5)'
        ctx.fillText(`0x${(i * 173 + 4096).toString(16).toUpperCase()}`, a.x + 13, a.y + 3)
      }
    }
    ripples = ripples.filter((ripple) => time - ripple.start < 850)
    ripples.forEach((ripple) => {
      const age = (time - ripple.start) / 850
      ctx.strokeStyle = `rgba(112,147,255,${(1 - age) * 0.5})`
      ctx.lineWidth = 1
      ctx.beginPath(); ctx.arc(ripple.x, ripple.y, 12 + age * 110, 0, Math.PI * 2); ctx.stroke()
    })
  }

  function tick(now) {
    frame = 0
    const elapsed = lastTime ? Math.min(now - lastTime, 50) : 16
    lastTime = now
    time += elapsed
    draw(elapsed / 16.67)
    if (pointer.active) {
      const ease = 1 - Math.exp(-elapsed / 55)
      follower.x += (pointer.x - follower.x) * ease
      follower.y += (pointer.y - follower.y) * ease
      reticle.style.transform = `translate3d(${follower.x}px, ${follower.y}px, 0)`
    }
    schedule()
  }

  function schedule() {
    if (!frame && enabled() && !document.hidden) frame = requestAnimationFrame(tick)
  }

  function hidePointer() {
    pointer.active = false
    reticle.classList.remove('is-visible', 'is-target')
  }

  function sync() {
    cancelAnimationFrame(frame)
    frame = 0
    lastTime = 0
    hidePointer()
    ripples = []
    draw(0)
    schedule()
  }

  window.addEventListener('pointermove', (event) => {
    if (!enabled() || !finePointer.matches || event.pointerType === 'touch') return
    if (!pointer.active) { follower.x = event.clientX; follower.y = event.clientY }
    pointer.x = event.clientX; pointer.y = event.clientY
    pointer.active = true
    const editing = event.target.closest('input, textarea, select, [contenteditable]')
    reticle.classList.toggle('is-visible', !editing)
    reticle.classList.toggle('is-target', !!event.target.closest('a, button, [role="button"], .header__logo-container, .header__main-ham-menu-cont'))
    schedule()
  }, { passive: true })
  window.addEventListener('pointerdown', (event) => {
    if (!enabled() || event.pointerType === 'touch' || !finePointer.matches) return
    ripples.push({ x: event.clientX, y: event.clientY, start: time })
    ripples = ripples.slice(-4)
  }, { passive: true })
  document.documentElement.addEventListener('pointerleave', hidePointer)
  window.addEventListener('blur', hidePointer)
  // Keep the reticle at the mouse position while scrolling, updating hover state.
  window.addEventListener('scroll', () => {
    if (!pointer.active) return
    const target = document.elementFromPoint(pointer.x, pointer.y)
    reticle.classList.toggle('is-visible', !!target && !target.closest('input, textarea, select, [contenteditable]'))
    reticle.classList.toggle('is-target', !!target?.closest('a, button, [role="button"], .header__logo-container, .header__main-ham-menu-cont'))
  }, { passive: true })
  document.addEventListener('keydown', (event) => { if (event.key === 'Tab') hidePointer() })
  document.addEventListener('visibilitychange', sync)
  reduced.addEventListener('change', sync)
  finePointer.addEventListener('change', sync)
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas)
  else window.addEventListener('resize', resize, { passive: true })
  resize()
  sync()
})()
