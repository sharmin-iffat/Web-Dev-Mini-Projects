let todaydate= document.getElementById('date');
let day= document.getElementById('day');
let month= document.getElementById('month');
let year= document.getElementById('year');

const date = new Date();

const weekDays =["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

todaydate.innerHTML=date.getDate();
day.innerHTML=weekDays[date.getDay()];
month.innerHTML=allMonths[date.getMonth()];
year.innerHTML=date.getFullYear();