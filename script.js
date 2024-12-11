let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let timer = false;

startBtn.addEventListener("click", function() {
    if(timer==false){
    timer = true;
    stopWatch();
    }
});

stopBtn.addEventListener("click", function () {
    timer = false;
});

resetBtn.addEventListener("click", function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        second++;

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        document.getElementById('hours').innerHTML = hrString;
        document.getElementById('minutes').innerHTML = minString;
        document.getElementById('seconds').innerHTML = secString;
        
        setTimeout(stopWatch, 1000);
    }
}
