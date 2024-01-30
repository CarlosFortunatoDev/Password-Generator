let passwordLength = 16
const inputEl = document.querySelector("#password")

const generatePassword = () =>{
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSYUVWXYZ123456789?!@&*()[]"

    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }

    inputEl.value = password
}

const copy = () =>{
    navigator.clipboard.writeText(inputEl.value) //API do navegador para copiar valores
}

const passwordLengthEl = document.querySelector('#password-length')
passwordLengthEl.addEventListener('input', () => {
    passwordLength = passwordLengthEl.value
    generatePassword()
})

const copyButtonEl = document.querySelector('#copy')
copyButtonEl.addEventListener('click', copy)

generatePassword()