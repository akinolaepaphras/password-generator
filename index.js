const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstBtn = document.getElementById("footer__first-btn")
let secondBtn = document.getElementById("footer__second-btn")
let modal = document.querySelector(".modal")
let passwordLength = 12


    function generate() {
        firstBtn.style.opacity = "1"
        secondBtn.style.opacity = "1 "
        passwordOne = ""
        passwordTwo = ""

        for (let i = 0; i <= passwordLength; i++) {
            indexOne = Math.floor(Math.random() * characters.length)
     indexTwo = Math.floor(Math.random() * characters.length)
passwordOne += characters[indexOne]
passwordTwo += characters[indexTwo]
        }
firstBtn.textContent = passwordOne
secondBtn.textContent = passwordTwo
    }

    firstBtn.addEventListener("click", ()=> {
        navigator.clipboard.writeText(firstBtn.textContent)
        modal.classList.add("active") 
 setTimeout(()=> {
    modal.classList.remove("active")
 }, 1700)
    })

    secondBtn.addEventListener("click", ()=> {
        navigator.clipboard.writeText(secondBtn.textContent)
        modal.classList.add("active") 
 setTimeout(()=> {
    modal.classList.remove("active")
 }, 1700)
    })
