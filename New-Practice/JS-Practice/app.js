let btn = document.getElementById('my-btn')
let body = document.querySelector("body")
let parabtn = document.getElementById('paraBtn')
let paragraph = document.querySelector('p')

function changeBackground() {
    body.style.backgroundColor = "Blue"
}
parabtn.addEventListener('click' , ()=>{
    paragraph.textContent = "Main Javascript seekh raha hoon"
})