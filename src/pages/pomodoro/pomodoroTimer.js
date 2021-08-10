var startButton = document.getElementById('startButton'),
    timerString = document.getElementById('timerString');

startButton.addEventListener('click',function(){
    var timeS = timerString.innerText;
    var time = parseInt(timeS,10);
    console.log(time);
});
