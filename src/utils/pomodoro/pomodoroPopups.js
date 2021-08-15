var headButtonInfo = document.getElementById('headButtonInfo'),
     infoOverlay = document.getElementById('infoOverlay'),
     infoPopup = document.getElementById('infoPopup'),
     infoPopupCerrar = document.getElementById('infoPopupCerrar'),
     authorOverlay = document.getElementById('authorOverlay'),
     authorPopup = document.getElementById('authorPopup'),
     authorPopupCerrar = document.getElementById('authorPopupCerrar'),
     headButtonAuthor = document.getElementById('headButtonAuthor'),
     musicPopup = document.getElementById('musicPopup'),
     musicPopupCerrar = document.getElementById('musicPopupCerrar'),
     musicOverlay = document.getElementById('musicOverlay'),
     headButtonMusic = document.getElementById('headButtonMusic');



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

headButtonMusic.addEventListener('click', function () {
    musicOverlay.classList.add('active');
});

musicPopupCerrar.addEventListener('click', function () {
    musicOverlay.classList.remove('active');
});
