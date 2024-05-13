let time = document.querySelector('.time');
let stop = document.getElementById("stopbtn");
let start = document.getElementById("startbtn");
let reset =document.getElementById("resetbtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timerid = null;
start.addEventListener('click',function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer,10);
});

stop.addEventListener('click',function(){
    clearInterval(timerid);
});

reset.addEventListener('click',function(){
    clearInterval(timerid);
    time.innerHTML = `00 : 00 : 00`;
    msecs= secs = mins = 0;
});


function startTimer(){
    msec++;
    if( msec == 100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }
    let msecString;
    let secsString;
    let minsString;
    if (msec < 10 ){
        msecString = `0${msec}`;
    } else {
        msecString = msec;
    }
    if (secs < 10 ){
        secsString = `0${secs}`;
    } else {
        secsString = secs;
    }
    if (mins < 10 ){
        minsString = `0${mins}`;
    } else {
        minsString = mins;
    }

    time.innerHTML =`${minsString} : ${secsString} : ${msecString}`;
}
