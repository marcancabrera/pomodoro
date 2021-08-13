
var sec, min, time, id, paused;
sec = 0;


var startButton = document.getElementById('startButton'),
    timerString = document.getElementById('timerString');




startButton.addEventListener('click', function () {
    paused = false;
    min = parseInt(timerString.innerHTML, 10);

    var opcion = startButton.innerHTML;
    console.log(opcion);
    if (opcion == "START") {
        startButton.innerHTML = "STOP";
        if (id == null) {
            id = setInterval(countBack, 1000);
            console.log(id);
            console.log("id creado");
        }

    } else if (opcion == "STOP") {
        clearInterval(id);
        id = null;
        startButton.innerHTML = "START";
    }
});





function countBack() {
    console.log(min);
    console.log(sec);
    if (!paused) {
        console.log("contando");
        write();
        if (sec > 0) {
            sec--;
        } else if (min > 0) {
            min--;
            sec = 59;
        } else {
            console.log("limpiando");
            clearInterval(id);
        }
    }
}


function write() {
    let secAuxi, minAuxi;
    if (sec < 10) {
        secAuxi = "0" + sec;
    } else {
        secAuxi = sec;
    }

    if (min < 10) {
        minAuxi = "0" + min;
    } else {
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




