const btnLogin = document.querySelector('.btn-login')
const menuUser = document.querySelector('.menu-user')

const bgMaterials = document.querySelector('.add-materials')
const boxAddItem = document.querySelector('.add-item')
const btnAdd = document.getElementById('add-item')

const inputsClean = document.querySelectorAll('.clean')
const btnClean = document.querySelector('.btn-clean')

const bgMessage = document.querySelector('.bg-message')

const sideBar = document.querySelector('.side-bar')

class Client {
    constructor () {
        this.elementArr = []
    }

    insertElement (data) {
        this.elementArr.push(data)
    }

    showBoxAddItem () {
        bgMaterials.style.display = 'flex'

        bgMaterials.addEventListener('click', e => {
            if(e.target.classList.contains('add-materials') || e.target.classList.contains('bx-x')) {
                bgMaterials.style.display = 'none'
            }
        })
    }

    cleanInputs () {
        inputsClean.forEach(data => data.value = '')
    }

    versionApp (version) {
        let span = document.createElement('span')
        span.id = 'version'
        span.innerHTML = `<strong>Versão</strong> ${version}`

        this.elementArr[3].appendChild(span)
    }

    appInit () {
        this.versionApp('v1.0.0') //version

        document.addEventListener('click', this.menuList.bind(this))

        if(this.elementArr[1] !== null) {
            this.elementArr[1].addEventListener('click', this.showBoxAddItem)
        }

        if(this.elementArr[2] !== null) {
            this.elementArr[2].addEventListener('click', this.cleanInputs)
        }
    }

    messagePopup (message, turn) {
        if(turn === true && message.length > 0) {
            let messageBox = `
            <div class="message">
                <div class="header">
                    <span>Aviso</span>
                    <i class='bx bx-x'></i>
                </div>
                <div class="message-box">
                    <p>${message}</p>
                </div>
                <div class="btn-decision">
                    <button>Sim</button>
                    <button>Não</button>
                </div>
            </div>
            `
            bgMessage.addEventListener('click', e => {
                if(e.target.classList.contains('bx-x') || e.target.textContent == 'Não') {
                    bgMessage.style.display = 'none'
                    return
                }
            })

            bgMessage.style.display = 'block'
            bgMessage.innerHTML = messageBox

            return
        }
        bgMessage.style.display = 'none' 
        
        /* como usar
            messagePopup('Você tem certeza que deseja excluir esse item?', true)
        */
       return
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

user.insertElement(btnLogin) //0
user.insertElement(btnAdd) //1
user.insertElement(btnClean) //2
user.insertElement(sideBar) //3

user.appInit()
console.log(user)