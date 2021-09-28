const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("button")
const span = document.querySelector('.color')
let randomNumber;
button.addEventListener('click' , ()=>{
    randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    span.textContent = colors[randomNumber];
})