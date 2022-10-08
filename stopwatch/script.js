var intervalVariable=undefined;
var timeLeft=0;
var totalTime=0;

function startTimer() {
    intervalVariable=setInterval(
        updateTime
      ,  10
    );
}

function resetTimer() {
    stopTimer();
    timeLeft=-10;
    updateTime();
}
function stopTimer() {
    clearInterval(intervalVariable);
}
function updateTime() {
    timeLeft=timeLeft+10;
    let timers=document.getElementById("timers");
    let timerms=document.getElementById("timerms");
    let milli=timeLeft%1000;
    timers.innerHTML=Math.floor(timeLeft/1000);
    timerms.innerHTML=Math.floor(milli/10);
    timers.style.color="green";
    timerms.style.color="red";
}