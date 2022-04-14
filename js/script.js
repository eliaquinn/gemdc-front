const menuMaterials = document.getElementById('menu-materials')
const subMenuMaterials = document.getElementById('sub-menu-materials')

const slideMenuMaterials = function () {
    menuMaterials.addEventListener('click', () => {
       if (subMenuMaterials.classList.contains('active')) {
           subMenuMaterials.style.display = 'none'
           subMenuMaterials.classList.remove('active')
       } else {
           subMenuMaterials.style.display = 'block'
           subMenuMaterials.classList.add('active')
       }
    })
}

const startApp = function () {
    slideMenuMaterials()
}

startApp()