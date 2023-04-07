const startButton = document.getElementsByClassName("start");
const stopButton = document.getElementsByClassName("stop");
const resetButton = document.getElementsByClassName("reset");
const showTime_hour = document.getElementsByClassName("hour"); //hour表示
const showTime_min = document.getElementsByClassName("min"); //min表示
const showTime_sec = document.getElementsByClassName("sec"); //sec表示
const showTime_msec = document.getElementsByClassName("msec"); //msec表示
let timer; 
let startTime; //開始時間
let elapsedTime = 0; //経過時間
let holdTime = 0; //停止時の保持時間

function start() {
    startTime = Date.now(); //開始時間を現在時刻に設定
    measureTime(); //時間計測

    startButton[0].disabled = true;
    stopButton[0].disabled = false;
    resetButton[0].disabled = false;
}

function stop() {
    clearInterval(timer); //タイマー停止
    holdTime += Date.now() - startTime;

    startButton[0].disabled = false;
    stopButton[0].disabled = true;
    resetButton[0].disabled = false;
}

function reset() {
    clearInterval(timer); //タイマー停止
    elapsedTime = 0;
    holdTime = 0;
    showTime_hour[0].innerHTML = "00";
    showTime_min[0].innerHTML = "00";
    showTime_sec[0].innerHTML = "00";
    showTime_msec[0].innerHTML = "000";

    startButton[0].disabled = false;
    stopButton[0].disabled = true;
    resetButton[0].disabled = true;
}

function measureTime() {
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime + holdTime;
        const h = String(new Date(elapsedTime).getHours()-9).padStart(2, '0');
        const m = String(new Date(elapsedTime).getMinutes()).padStart(2, '0');
        const s = String(new Date(elapsedTime).getSeconds()).padStart(2, '0');
        const ms = String(new Date(elapsedTime).getMilliseconds()).padStart(3, '0');
        
        showTime_hour[0].innerHTML = `${h}`;
        showTime_min[0].innerHTML = `${m}`;
        showTime_sec[0].innerHTML = `${s}`;
        showTime_msec[0].innerHTML = `${ms}`;
    }, 10);
}