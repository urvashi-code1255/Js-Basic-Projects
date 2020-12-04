let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let stop = document.querySelector('.stop');
let seconds = document.querySelector('.seconds');
let milliSeconds = document.querySelector('.milliSeconds');
let timeInterval;
let sec = 00;
let mSec = 00;

start.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timeInterval = setInterval(startTimer, 10 );
    seconds.style.color = "greenyellow";
    milliSeconds.style.color = "greenyellow";
})

reset.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    sec = 00;
    mSec = 00;
    seconds.innerHTML = "00";
    milliSeconds.innerHTML = "00";
    seconds.style.color = "grey";
    milliSeconds.style.color = "grey";
})

stop.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    seconds.style.color = "red";
    milliSeconds.style.color = "red";
})

function startTimer(){
    mSec++;

    if(mSec < 9){
        milliSeconds.innerHTML = "0" + mSec;
    }

    if(mSec > 9){
        milliSeconds.innerHTML = mSec;
    }

    if(mSec > 59){
        sec++;
        seconds.innerHTML = "0" + sec;
        mSec = 0;
        milliSeconds.innerHTML = mSec;
    }

    if(sec > 9){
        seconds.innerHTML = sec;
    }
}