
var sec, min, time, id, paused;
sec = 0;


var startButton = document.getElementById('startButton'),
    timerString = document.getElementById('timerString'),
    body = document.getElementById('body'),
    stopButton = document.getElementById('stopButton');


stopButton.addEventListener('click', function () {
    var mainStatus = body.classList.item(0);
    console.log(mainStatus);
    clearInterval(id);
    id = null;
    startButton.innerHTML = "START";
    stopButton.classList.remove('show');
    sec = 0;
    switch (mainStatus) {
        case 'main-1': {
            timerString.innerHTML = "25:00";
            break;
        };
        case 'main-2': {
            timerString.innerHTML = "05:00";
            break;
        };
        case 'main-3': {
            timerString.innerHTML = "15:00";
            break;
        };
    }
});

startButton.addEventListener('click', function () {
    paused = false;
    min = parseInt(timerString.innerHTML, 10);

    var opcion = startButton.innerHTML;
    console.log(opcion);
    if (opcion == "START") {
        startButton.classList.add('pauseButton');
        startButton.innerHTML = "STOP";
        stopButton.classList.add('show');
        if (id == null) {
            id = setInterval(countBack, 1000);
            console.log(id);
            console.log("id creado");

        }

    } else if (opcion == "STOP") {
        startButton.classList.remove('pauseButton');
        clearInterval(id);
        id = null;
        startButton.innerHTML = "START";
        stopButton.classList.remove('show');
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






