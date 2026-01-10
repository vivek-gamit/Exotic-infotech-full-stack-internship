let a ;
let date;
let time;
let hour;
let minute;
let secound;

let TwoH;
let TwoM;
let TwoS;


setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString()
    hour = a.getHours();
    minute = a.getMinutes();
    secound = a.getSeconds();

    TwoH = String(hour).padStart(2,'0');
    TwoM = String(minute).padStart(2,'0');
    TwoS = String(secound).padStart(2,'0');

    time = TwoH + ':' + TwoM + ':' + TwoS;
    document.getElementById('time').textContent = `${time} on ${date}`;
}, 1000);



