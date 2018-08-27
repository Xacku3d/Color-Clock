const clock = document.getElementById("clock");
const color = document.getElementById("color");

function newClock() {

    let date = new Date();
    let h = date.getHours().toString();
    let m = date.getMinutes().toString();
    let s = date.getSeconds().toString();

    if ( h.length < 2) {
        h = "0" + h;
    }

    if ( m.length < 2) {
        m = "0" + m;
    }

    if ( s.length < 2) {
        s = "0" + s;
    }

    let clockString = h + ":" + m + ":" + s;
    let clockColor = "#" + h + m + s;

    clock.textContent = clockString;
    color.textContent = clockColor;

    document.body.style.background = clockColor;
}

newClock();

function startClock() {
setTimeout(function updateClock() {
    newClock();
    startClock();
}, 1000);
}

startClock();