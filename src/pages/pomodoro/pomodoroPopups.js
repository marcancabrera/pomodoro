var headButtonInfo = document.getElementById('headButtonInfo'),
     infoOverlay = document.getElementById('infoOverlay'),
     infoPopup = document.getElementById('infoPopup'),
     infoPopupCerrar = document.getElementById('infoPopupCerrar'),
     authorOverlay = document.getElementById('authorOverlay'),
     authorPopup = document.getElementById('authorPopup'),
     authorPopupCerrar = document.getElementById('authorPopupCerrar'),
     headButtonAuthor = document.getElementById('headButtonAuthor');



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

var createPom = document.getElementById("createPom");
var buttonCreatePom = document.getElementById("buttonCreatePom");

createPom.style.display = "none";

function showCreatePom(){
    createPom.style.display = "block";
    buttonCreatePom.style.display = "none"
}

function hideCreatePom(){
    createPom.style.display = "none";
    buttonCreatePom.style.display = "block"
}


function addTaskToContainer(){
    createPom.style.display = "none";
    buttonCreatePom.style.display = "block"
    const div = document.createElement('div');

    div.className = 'newTask';
    div.innerHTML = `
    <div class="task">
          <div class="task__head">
            <span class="task__title">Soy el titulo</span>
            <div class="task__control">
              <span class="task__number">soy subtitulo</span>
              <button class="task__edit"><img src="edit.png" alt="icon"></button>
            </div>

          </div>
          <div class="task__note">
            <span class="task__noteSpan">soy una nota</span>
          </div>
        </div>
  `;


  document.getElementById('taskContainer').appendChild(div);
}

