const day = document.getElementById('desc-day')
const hours = document.getElementById('desc-hr')
const minutes = document.getElementById('desc-mn')
const seconds = document.getElementById('desc-sc')



const relogio = setInterval(function time(){

let dateToday = new Date();


let da = dateToday.getDate();
let hr = dateToday.getHours();
let mn = dateToday.getMinutes();
let sc = dateToday.getSeconds();
 
if (hr < 10) hr = '0' + hr;

if (mn < 10) mn = '0' + mn;

if (sc < 10) sc = '0' + sc;



day.textContent = da;
hours.textContent = hr;
minutes.textContent = mn;
seconds.textContent = sc;

})
