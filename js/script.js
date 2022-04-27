const btnLogin = document.querySelector('.btn-login')
const menuUser = document.querySelector('.menu-user')

class Client {
    constructor () {
        this.elementArr = []
    }

    insertElement (data) {
        this.elementArr.push(data)
    }

    userMenu () {
        let btnUser = this.elementArr.filter(item => item.classList.contains('btn-login'))

        document.addEventListener('click', this.menuList.bind(this))
    }

    menuList (event) {
        if(event.target.classList.contains('btn-login')) {
            menuUser.innerHTML = ''

            if(menuUser.style.display === 'block') {
                menuUser.style.display = ''
                return
            }

            menuUser.style.display = 'block'
            menuUser.innerHTML = `<span>Brian Costa</span>`
            let ul = document.createElement('ul')
            ul.innerHTML = `
                <li><a href="#"><i class='bx bxs-user-badge'></i>Perfil</a></li>
                <li><a href="#"><i class='bx bxs-user-detail'></i>Configurações</a></li>
                <li><a href="../../index.html"><i class='bx bx-exit' ></i>Sair</a></li>
                `
            menuUser.appendChild(ul)
            return
        }
        
        menuUser.style.display = ''
    }
}

const user = new Client()

user.insertElement(btnLogin)

user.userMenu()

/*
    {
            if(item.classList.value == 'btn-login') {
                item.onclick = () => {
                    menuUser.innerHTML = ''
                    if(menuUser.style.display === 'block') {
                        menuUser.style.display = ''
                        return
                    }
                    menuUser.style.display = 'block'
                    menuUser.innerHTML = `<span>Brian Costa</span>`
                    let ul = document.createElement('ul')
                    ul.innerHTML = `
                        <li>Perfil</li>
                        <li>Configurações</li>
                        <li><a href="../../index.html">Sair</a></li>
                    `
                    menuUser.appendChild(ul)
                }
            }
        }
*/