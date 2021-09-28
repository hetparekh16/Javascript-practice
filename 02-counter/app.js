let count = 0;
const btns = document.querySelectorAll('.btn');
const span = document.querySelector('span')
let className;
btns.forEach( (btn) =>{
    btn.addEventListener('click' , (e)=>{
        className = e.currentTarget.classList;
        if(className[1] == "decrease"){
            count--;
            span.style.color = "red"
        }
        else if(className[1] == "increase"){
            count++;
            span.style.color = "green"
        }
        else{
            count = 0;
            span.style.color = "inherit"
        }
        if(count < 0) span.style.color = "red";
        else if(count > 0) span.style.color = "green"
        else span.style.color = "inherit"
        span.textContent = count
    })
})