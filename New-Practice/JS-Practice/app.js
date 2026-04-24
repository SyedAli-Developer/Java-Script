let ula = document.querySelector('ul')
let li = document.createElement('li')
li.textContent = 'Russia'
ula.appendChild(li)

let lis = document.querySelectorAll('li')
// for(let i = 0; i < lis.length ; i++)
// {
//     console.log(lis[i].textContent)
//     lis[i].textContent = `${lis[i].innerHTML} ${i}`
// }
lis.forEach(element => {
    let num = Math.round(Math.random()*10)
    console.log(`${element.innerHTML}  ${num}`)
    element.textContent = `${element.innerHTML}  ${num}`
});