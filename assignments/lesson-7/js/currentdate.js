var w = new Date();

var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.getElementById("curDate").innerHTML = weekdays[w.getDay()] + ", " + w.getDate()+" "+month[w.getMonth()]+" "+w.getFullYear();
