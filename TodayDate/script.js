let dt = document.getElementById('date');


const showDate =() =>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    // console.log(+day+" "+month+" "+year);
    // day = day<10 ? `0${day}` : day;
    // month = month<10 ? `0${month}` : month;
    dt.innerHTML=`${day} : ${month} : ${year}`;
}


showDate();