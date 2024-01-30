let passwordLength = 16

const generatePassword = () =>{
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSYUVWXYZ123456789?!@&*()[]"

    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }

    const inputEl = document.querySelector("#password")
    inputEl.value = password
}

const passwordLengthEl = document.querySelector('#password-length')
passwordLengthEl.addEventListener('input', () => {
    passwordLength = passwordLengthEl.value
    generatePassword()
})

generatePassword()