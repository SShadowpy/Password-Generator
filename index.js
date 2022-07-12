const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?","/"];

function generateRandomPassword(password1,password2) {
    let passwordEl1 = document.querySelector(password1)
    let passwordEl2 = document.querySelector(password2)
    passwordEl1.textContent = passwordEl2.textContent = ""
    for (let i = 0; i < 15; i++){
        passwordEl1.textContent += characters[Math.floor(Math.random() * characters.length)]
        passwordEl2.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}

function copy(password) {
    let text = document.querySelector(password)
    text.onclick = navigator.clipboard.writeText(text.innerText)
   
}