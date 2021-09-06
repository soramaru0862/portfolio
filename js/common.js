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
const pageTop = document.getElementById('page_top')

pageTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})

const pageTopShow = document.querySelector('.page_top')
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    pageTopShow.classList.add('show')
  } else {
    pageTopShow.classList.remove('show')
  }
})
