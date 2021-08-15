/*         POPUPS               */
var headButtonInfo = document.getElementById('headButtonInfo'),
    infoOverlay = document.getElementById('infoOverlay'),
    infoPopup = document.getElementById('infoPopup'),
    infoPopupCerrar = document.getElementById('infoPopupCerrar'),
    authorOverlay = document.getElementById('authorOverlay'),
    authorPopup = document.getElementById('authorPopup'),
    authorPopupCerrar = document.getElementById('authorPopupCerrar'),
    headButtonAuthor = document.getElementById('headButtonAuthor'),
    timerString = document.getElementById('timerString');



headButtonInfo.addEventListener('click', function () {
    infoOverlay.classList.add('active');
});

infoPopupCerrar.addEventListener('click', function () {
    infoOverlay.classList.remove('active');
});

headButtonAuthor.addEventListener('click', function () {
    authorOverlay.classList.add('active');
});

authorPopupCerrar.addEventListener('click', function () {
    authorOverlay.classList.remove('active');
});
/********************************************************************/



/**                Main                     **/
var timerOptionsPomodoro = document.getElementById('timerOptionsPomodoro'),
    timerOptionsShortBreak = document.getElementById('timerOptionsShortBreak'),
    timerOptionsLongBreak = document.getElementById('timerOptionsLongBreak'),
    currentlySelected = timerOptionsPomodoro,
    startButton = document.getElementById('startButton');
    body = document.getElementById('body');

timerOptionsPomodoro.addEventListener('click', function () {
    currentlySelected.classList.remove('buttonSelected');
    timerOptionsPomodoro.classList.add('buttonSelected');
    currentlySelected = timerOptionsPomodoro;
    body.classList.add('main-1');
    body.classList.remove('main-2');
    body.classList.remove('main-3');
    startButton.classList.add('startButton1');
    startButton.classList.remove('startButton2');
    startButton.classList.remove('startButton3');
    timerString.innerHTML = "25:00";


});

timerOptionsShortBreak.addEventListener('click', function () {
    currentlySelected.classList.remove('buttonSelected');
    timerOptionsShortBreak.classList.add('buttonSelected');
    currentlySelected = timerOptionsShortBreak;
    body.classList.add('main-2');
    body.classList.remove('main-1');
    body.classList.remove('main-3');

    startButton.classList.remove('startButton1');
    startButton.classList.add('startButton2');
    startButton.classList.remove('startButton3');
    timerString.innerHTML = "05:00";
});

timerOptionsLongBreak.addEventListener('click', function () {
    currentlySelected.classList.remove('buttonSelected');
    timerOptionsLongBreak.classList.add('buttonSelected');
    currentlySelected = timerOptionsLongBreak;
    body.classList.add('main-3');
    body.classList.remove('main-1');
    body.classList.remove('main-2');

    startButton.classList.remove('startButton1');
    startButton.classList.remove('startButton2');
    startButton.classList.add('startButton3');
    timerString.innerHTML = "15:00";

});




/*********************************************/
