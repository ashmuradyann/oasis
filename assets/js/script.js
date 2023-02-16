const tabs = (() => {
  if (window.innerWidth <= 768) {
    return document.querySelectorAll('.cards-mobile-option')
  } else if (window.innerWidth > 768) {
    return document.querySelectorAll('.main-cards-option')
  }
})()

const cardsWrappers = document.querySelectorAll('.main-cards-container')
const cardsText = document.querySelectorAll('.main-cards-text')

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document
        .querySelector('.mobile-option-active')
        .classList.toggle('mobile-option-active')
      tabs[i].classList.toggle('mobile-option-active')
    } else if (window.innerWidth > 768) {
      document
        .querySelector('.option-active')
        .classList.toggle('option-active')
      tabs[i].classList.toggle('option-active')
    }
    document
      .querySelector('.main-cards-active')
      .classList.toggle('main-cards-active')
    cardsWrappers[i].classList.toggle('main-cards-active')
    document
      .querySelector('.main-cards-text-active')
      .classList.toggle('main-cards-text-active')
    cardsText[i].classList.toggle('main-cards-text-active')
  })
}

// mobile
const optionsWrapper = document.querySelector(".main-cards-select-mobile-options")
const mobileSelectWrapper = document.querySelector(".main-cards-select-mobile")
const selectValue = document.querySelector(".select-value")

window.onclick = (e) => {
  if (!e.target.classList.value.includes("main-cards-select-mobile")) {
    if (!optionsWrapper.classList.value.includes("display-block")) {
      return
    } else if (!optionsWrapper.classList.value.includes("display-block")) {
      optionsWrapper.classList.toggle("display-block")
      mobileSelectWrapper.classList.toggle("border-blue")
    } else {
      optionsWrapper.classList.toggle("display-block")
      mobileSelectWrapper.classList.toggle("border-blue")
    }
  }
}

function openSelect() {
  optionsWrapper.classList.toggle("display-block")
  mobileSelectWrapper.classList.toggle("border-blue")
}

function setSelectValue(name) {
  selectValue.innerHTML = name
}

const mobileNavbar = document.querySelector(".navbar-mobile")

function openMobileNavbar() {
  mobileNavbar.style.display = "flex"
  document.body.style.overflow = "hidden"
  setTimeout(() => {
    mobileNavbar.style.opacity = "1"
  }, 10)
}

function closeMobileNavbar() {
  mobileNavbar.style.opacity = "0"
  document.body.style.overflowY = "auto"
  setTimeout(() => {
    mobileNavbar.style.display = "none"
  }, 300)
}