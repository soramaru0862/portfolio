'use strict'

// ロード画面
window.addEventListener('load', () => {
  document.getElementById('loading').classList.add('invisible')
})

// about スライド
const images = [
  './img/photo-1.jpg',
  './img/photo-2.jpg',
  './img/photo-3.jpg'
]

let currentIndex = -1
const mainImage = document.getElementById('hero_main')
const image = document.querySelector('.hero-main')

window.addEventListener('load', () => {
  currentIndex++
  image.classList.remove('active')
  setTimeout(() => {
    mainImage.src = images[currentIndex]
    image.classList.add('active')
  }, 1000)
  setInterval(() => {
    currentIndex++
    if (currentIndex === 3) {
      currentIndex = 0
    }
    image.classList.remove('active')
    setTimeout(() => {
      mainImage.src = images[currentIndex]
      image.classList.add('active')
    }, 1000)
  }, 4000)
})

// about タブ
const tabLabels = document.querySelectorAll('.tab__label li a')
const tabContents = document.querySelectorAll('.tab__content')

tabLabels.forEach((clickedLabel) => {
  clickedLabel.addEventListener('click', (e) => {
    e.preventDefault()

    tabLabels.forEach((label) => {
      label.classList.remove('active')
    })

    clickedLabel.classList.add('active')

    tabContents.forEach((content) => {
      content.classList.remove('active')
    })
    document.getElementById(clickedLabel.dataset.id).classList.add('active')
  })
})

// ページトップボタン
const pageTopBtn = document.getElementById('page_top')
pageTopBtn.addEventListener('click', function foo () {
  const nowY = window.pageYOffset
  window.scrollTo(0, Math.floor(nowY * 0.8))
  if (nowY > 0) {
    window.setTimeout(foo, 10)
  }
})

const pageTopShow = document.querySelector('.page_top')
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    pageTopShow.classList.add('show')
  } else {
    pageTopShow.classList.remove('show')
  }
})

// スムーススクロール
window.onload = scrollTo()

function scrollTo () {
  const links = document.querySelectorAll('.scroll')
  links.forEach(each => (each.onclick = scrollAnchors))
}

function scrollAnchors (e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top)
  e.preventDefault()
  const targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href')
  const targetAnchor = document.querySelector(targetID)
  if (!targetAnchor) return
  const originalTop = distanceToTop(targetAnchor)
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' })
  const checkIfDone = setInterval(function () {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1'
      targetAnchor.focus()
      window.history.pushState('', '', targetID)
      clearInterval(checkIfDone)
    }
  }, 100)
}
