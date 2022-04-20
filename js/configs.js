const inputPwd = document.getElementById('password')
const iconShowPwd = document.getElementById('vision-passwd')
const teste = document.querySelector('.forgot-pwd')
const messageError = document.querySelector('.message')

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
// messageError.textContent = 'olá mundo';

const insertElements = new SettingsElements()

insertElements.addElement(iconShowPwd)

insertElements.showPasswd()