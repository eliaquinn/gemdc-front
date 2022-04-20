const btnLogin = document.querySelector('.btn-login')
const menuUser = document.querySelector('.menu-user')

class DocumentSettings {
    constructor () {
        this.arrElements = []
    }

    insertElement (data) {
        this.arrElements.push(data)
    }

    userMenu () {
        this.arrElements.filter(item => {
            if(item.classList.value == 'btn-login') {
                item.onclick = () => {
                    menuUser.innerHTML = ''

                    if(menuUser.style.display === 'block') {
                        menuUser.style.display = ''
                        return
                    }

                    menuUser.style.display = 'block'

                    let ul = document.createElement('ul')
                    
                    ul.innerHTML = `
                    <li>Perfil</li>
                    <li>Configurações</li>
                    <li>Sair</li>
                    `

                    menuUser.appendChild(ul)
                }
            }
        })
    }
}

const userLogin = new DocumentSettings()

userLogin.insertElement(btnLogin)

userLogin.userMenu()