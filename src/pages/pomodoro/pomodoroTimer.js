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
       finishedPom(); /////////////////////////////// para los TASKS
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


/////////////////////////////////////////////////////////////

timeA = 1500; // se pueden obtener los valores de algun input
timeB = 300; // se pueden obtener los valores de algun input
timeC = 900; // se pueden obtener los valores de algun input

timeInit = timeA;   // al abrir la pagina el time por defecto es el A
setTimer(timeA);  // se actualiza el texto del tiempo con el tiempo A


var timeInit; // tiempo inicial, solo cambia cuando se elige otra opcion
var timeNow; // tiempo actual, que decrece cuando se apreta START

// cada boton de las 3 opciones envia un valor entre 0 y 2, que corresponden con los 3 times
function timerOptionOnClick(value){
    if(value== 0){
        timeInit = timeA;
        setTimer(timeA);
    } else if(value == 1){
        timeInit = timeB;
        setTimer(timeB);
    }else if(value == 2){
        timeInit = timeC;
        setTimer(timeC);
    }
    timeNow = timeInit;
}

// Esta función solo convierte los segundos en strings con formato minutos:segundos
function setTimer(value){
    value %= 3600;
    minutes = Math.floor(value / 60);
    seconds = value % 60;
    if(seconds < 10){
        seconds = '0'+seconds;
    }
    if(minutes < 10){
        minutes = '0'+minutes;
    }
    document.getElementById('timerValue').textContent = minutes + ":" +seconds; //    <-  ACTUALIZA EL TEXTO TIEMPO
}

//Esta función solo inicia el conteo regresivo hasta llegar a 0.
//Todavia no funciona bien porque si se vuelve a llamar el conteo se acelera por alguna razón
//Talvez se solucione con un booleano
function startTimer(){
    setTimeout(() => {
        if(timeNow > 0){
            self.startTimer();
            timeNow -= 1;
            setTimer(timeNow);
        }
    }, 1000);
}




