const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const span = document.querySelector('.color')

function getRandomNumber(){
    return Math.floor( Math.random() * hex.length)
}

btn.addEventListener('click' , ()=>{
    let hexCode = "#";
    for(let i=0;i<6;i++){
        hexCode += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexCode;
    span.textContent = hexCode;
})