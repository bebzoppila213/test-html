const burger = document.querySelector('.burger')
const btnSearchClose = document.querySelector('.search-mobile-close')

burger.addEventListener('click', () => {
    const search = document.querySelector('.search')
    search.classList.add("search--open")
})

btnSearchClose.addEventListener('click', () => {
    const search = document.querySelector('.search')
    search.classList.remove("search--open")
})