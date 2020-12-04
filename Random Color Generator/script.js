let rgb = document.querySelector('.rgb');
let ClickMe = document.querySelector('.clickMe');
let Body = document.querySelector('body');
let Rvalue, Gvalue, Bvalue, RGB;

ClickMe.addEventListener('click', ()=>{
    Rvalue = Math.floor(Math.random()*255);
    Gvalue = Math.floor(Math.random()*255);
    Bvalue = Math.floor(Math.random()*255);
    rgb.innerHTML = RGB;
    RGB = `rgb(${Rvalue},${Gvalue},${Bvalue})`;
    Body.style.backgroundColor = RGB;
    ClickMe.style.backgroundColor = RGB;
})