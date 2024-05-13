let ti = document.getElementById('time');
let tf = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime, 1000);
});

const showTime =() =>{
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // console.log("hour"+hour+"min"+min+"sec"+sec);
    hour = hour<10 ? `0${hour}` : hour;
    min = min<10 ? `0${min}` : min;
    sec = sec<10 ? `0${sec}` : sec;
    ti.innerHTML=`${hour} : ${min} : ${sec}`;

    timeformat.innerHTML = hour>12 ?"PM" : "AM";
}


