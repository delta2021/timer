//get DOM
const timeInput = document.getElementById('time-input');
const submitBtn = document.getElementById('submit-btn');
const minuteText = document.getElementById('minute');
const secondText = document.getElementById('second');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');


//to keep track of status
let timerID;
let minute = 0, second = 0;

//initialize z-index
playBtn.style.zIndex = 1;


//event listeners
submitBtn.onclick = function(){
    if (timerID !== null){
        clearInterval(timerID);
    }
    pauseBtn.style.zIndex = playBtn.style.zIndex + 1;
    const time = processTime(timeInput.value);
    minute = time;
    second = 0;
    timerID = startTimer();
    
}



playBtn.onclick = function(){
    timerID = startTimer();
    pauseBtn.style.zIndex = playBtn.style.zIndex + 1 
}

pauseBtn.onclick = function(){
    clearInterval(timerID);
    playBtn.style.zIndex = pauseBtn.style.zIndex + 1 
}
// let currentTime = new Date().getTime();
// let dueTime = currentTime + timeInput.value * 60 * 1000;


//display remaining time 
function updateTime(){
    if (second === 0){
        if (minute === 0){
            return;
        }
        second = 60;
        minute -= 1;
        minuteText.innerText = minute < 10 ? `0${minute}` : minute;     
    }
    second -= 1;
    secondText.innerText = second < 10 ? `0${second}` : second;
}

//to make sure user input is valid
function processTime(time){
    if (time === ""){
        return 10;
    }
    if (time<0){
        time = -time;
    }
    return Math.floor(time)
}



//
function startTimer(){
    timerID = setInterval(function(){
        if (minute === 0 && second === 0){
            clearInterval(timerID)
        } else {
         updateTime()
        }
       }, 1000)
 
    return timerID;
}