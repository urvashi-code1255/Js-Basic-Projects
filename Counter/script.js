let display = document.querySelector('.span');
let Increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');
let Decrease = document.querySelector('.decrease');

let count = 0;

Increase.addEventListener('click', ()=>{
    count++;
    display.innerHTML = count;
    if(count > 0){
        display.style.color = "greenyellow";
    }
    if(count == 0)
    {
        display.style.color = "grey";
    }
})

reset.addEventListener('click', ()=>{
    count = 0;
    display.innerHTML = count;
    display.style.color = "grey";
})

Decrease.addEventListener('click', ()=>{
    count--;
    display.innerHTML = count;
    if(count < 0){
        display.style.color = "red";
    }
    if(count == 0)
    {
        display.style.color = "grey";
    }
})