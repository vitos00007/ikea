// day 1
const btnBurger = document.querySelector('.btn-burger')
const catalog = document.querySelector('.catalog')
const btnClose = document.querySelector('.btn-close')
const subCatalog = document.querySelector('.subcatalog')
const subCatalHead = document.querySelector('.subcatalog-header')
const btnReturn = document.querySelector('.btn-return')

const overlay = document.createElement('div')

overlay.classList.add('overlay')
document.body.insertAdjacentElement('beforeend', overlay)

const openMenu = () => {
    catalog.classList.add('open')
    overlay.classList.add('active')
}

const closeMenu = () => {
    catalog.classList.remove('open')
    overlay.classList.remove('active')
    closeSubMenu()
}

const opnSubMenu = e => {
    e.preventDefault()
    const trg = e.target
    const itmLst = trg.closest('.catalog-list__item')
    if(itmLst) {
        subCatalHead.innerHTML = itmLst.textContent
        subCatalog.classList.add('subopen')
    }

}

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen')
}


btnBurger.addEventListener('click', openMenu)
btnClose.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)
catalog.addEventListener('click', opnSubMenu)
btnReturn.addEventListener('click', closeSubMenu)