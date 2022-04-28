const inputPwd = document.getElementById('password')
const inputUser = document.getElementById('user')
const iconShowPwd = document.getElementById('vision-passwd')
const teste = document.querySelector('.forgot-pwd')
const messageError = document.querySelector('.message-login')
const btnLogin = document.getElementById('btnLogin')

class SettingsElements {
    constructor () {
        this.elementArr = []
    }

    addElement(element) {
        this.elementArr.push(element)
    }

    showPasswd() {
        this.elementArr.forEach(data => {
            const isIconEye = data.classList.contains('bx-low-vision')

            if(isIconEye) {
                data.classList.add('active')
                data.onclick = () => {
                    if(iconShowPwd.classList.contains('active')) {
                        iconShowPwd.style.color = "#333"
                        inputPwd.type = 'text'
                        iconShowPwd.classList.remove('active')
                    } else {
                        iconShowPwd.style.color = "#8a8a8a"
                        inputPwd.type = 'password'
                        iconShowPwd.classList.add('active')
                    }
                }
            }
        })
    }
}


// messageError.style.display = 'block'
// messageError.textContent = 'Usuário ou senha incorretas!';

const insertElements = new SettingsElements()

insertElements.addElement(iconShowPwd)

insertElements.showPasswd()

/* TEMPORARIO */
const validateTeste = (user, pwd) => {
    if(user === 'eliaquin.araujo' && pwd === '123456') {
        location.href = 'http://127.0.0.1:5501/pages/dashboard/dashboard.html'
        return
    }
    alert('Senha ou usuário invalidos!')
    inputUser.value = ''
    inputPwd.value = ''
}

btnLogin.addEventListener('click', () => {
    let usuario = inputUser.value
    let senha = inputPwd.value

    validateTeste(usuario, senha)
})