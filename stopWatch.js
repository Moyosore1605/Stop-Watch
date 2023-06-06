const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const formattedTime = (params)=>{
    const ms = Math.floor((params % 1000) / 10);
    const s = Math.floor((params % (1000 * 60) )/ 1000);
    const m = Math.floor(params % ( 1000 * 60 * 60) / (1000 * 60));
    const h = Math.floor(params / (1000 * 60 * 60));
    const msStr = (ms ? ms.toString().padStart(2,'0') : '00');
    const sStr = (s ? s.toString().padStart(2,'0'): '00');
    const mStr = (m ? m.toString().padStart(2,'0'): '00');
    const hStr = (h ? h.toString().padStart(2,'0'): '00');
    return `${hStr}:${mStr}:${sStr}.${msStr}`
}

const startWatch = ()=>{
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(()=>{
        elapsedTime = Date.now() - startTime
        timerEl.textContent = formattedTime(elapsedTime)
    },10)
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

const stopWatch = ()=>{
    clearInterval(timerInterval);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}

const resetWatch = ()=>{
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerEl.textContent = '00:00:00'
    stopBtn.disabled = true;
    startBtn.disabled = false
}


startBtn.addEventListener('click',startWatch);
stopBtn.addEventListener('click',stopWatch);
resetBtn.addEventListener('click',resetWatch);