var startButton = document.getElementById('startButton'),
    timerString = document.getElementById('timerString');

var sec,min,time,id,paused;

startButton.addEventListener('click',function(){

    var timeS = timerString.innerText;
    if(id == null){
        time = parseInt(timeS,10);
        sec = 0;
        min = time;
        id = setInterval(countBack,1000);
    }else{
        paused = false;
    }
});




function stop(){
    paused = true;
    startButton.innerHTML = "START";

}

function countBack(){
    if(!paused){
        write();
   if(sec > 0){
       sec--;
   } else if(min > 0){
        min --;
        sec = 59;
   }else{
       clearInterval(id);
   }
    }
}


function write(){
    let secAuxi, minAuxi;
    if(sec < 10){
        secAuxi = "0" + sec;
    }else{
        secAuxi = sec;
    }

    if(min < 10){
        minAuxi = "0" + min;
    }else{
        minAuxi = min;
    }

    timerString.innerHTML = minAuxi + ":" + secAuxi;
}
