
let tasksList = [];
var savable = false;
var saveButton = document.getElementById("buttonSaveTask");
var titleInput = document.getElementById('taskTitleInput');
var createPom = document.getElementById('createPom');
var taskNote = document.getElementById('taskNote');
var buttonCreateTask = document.getElementById('buttonCreatePom');
var lastClicked;
var estCount = 0;
// Clase tarea
function task(title,pomCountActual, pomCount, note, id){
    this.title = title;
    this.pomCountActual = pomCountActual;
    this.pomCount = pomCount;
    this.note = note;
    this.id = id;
}
loadData();
if(tasksList != null){
    document.getElementById('taskContainer').innerHTML = '';
    tasksList.forEach(element => {
        addTaskToContainer(element.title, element.pomCountActual, element.pomCount, element.note, element.id);


    });
}



function upCountPom(){
    document.getElementById('pomCount').value = parseInt(document.getElementById('pomCount').value) + 1;

}
function downCountPom(){
    if(parseInt(document.getElementById('pomCount').value) > 1){
        document.getElementById('pomCount').value = parseInt(document.getElementById('pomCount').value) - 1;
    }
}

taskNote.style.display = "none";

titleInput.addEventListener('input',listenerInputTitle);

saveButton.style.cursor = "default";
function listenerInputTitle(){
    if(titleInput.value != ""){

        savable = true;
        saveButton.style.cursor = "pointer";
        saveButton.style.backgroundColor = "rgb(120, 120, 120)";
        saveButton.style.borderColor = "rgb(120, 120, 120)";
    } else {
        savable = false;
        saveButton.style.cursor = "default";
        saveButton.style.backgroundColor = "rgb(171, 171, 171)";
        saveButton.style.borderColor = "rgb(171, 171, 171)";
    }
}


createPom.style.display = "none";

function showCreateTask(){
    buttonCreateTask.style.display = "none";
    createPom.style.display = "block";
}
function hideCreateTask(){
    titleInput.value = "";

    buttonCreateTask.style.display = "flex";
    taskNote.style.display = "none";
    document.getElementById('pomCount').value = "1";
    document.getElementById('taskNote').value = "";
    document.getElementById('addnotebutton').style.display = "block";
    document.getElementById('taskNoteInput').value = "";
    createPom.style.display = "none";
}
function showAddNote(){
    taskNote.style.display = "block";
    document.getElementById('addnotebutton').style.display = "none";
}

taskCount = 0;

//añade un task a la lista de tasks, pone en blanco los campos y oculta el creador de tasks
function addTask(){

    if(savable == true){

        let newID = Date.now();
        estCount++;
        updateStats();

        tasksList[newID] = new task(titleInput.value, 0,document.getElementById('pomCount').value,document.getElementById('taskNoteInput').value, newID);

            /*console.log(document.getElementById('taskTitleInput').value);
            console.log(document.getElementById('pomCount').value);
            console.log(document.getElementById('taskNote').value);*/

        addTaskToContainer(titleInput.value, document.getElementById('pomCount').value,document.getElementById('taskNoteInput').value, newID);

        titleInput.value = "";
        document.getElementById('pomCount').value = 1;
        document.getElementById('taskNoteInput').value = "";

        taskNote.style.display = "none";
        createPom.style.display = "none";
        savable = false;
        saveButton.style.cursor = "default";
        saveButton.style.backgroundColor = "rgb(171, 171, 171)";
        saveButton.style.borderColor = "rgb(171, 171, 171)";
        document.getElementById("addnotebutton").style.display = "block";
        taskCount++;
        saveData();
    }


}

function updateStats(){
    document.getElementById("estText").textContent = estCount;
    var actualTime = new Date();
    var minuts = (actualTime.getHours() * 60) + actualTime.getMinutes();
    var minutsFinal = minuts + (estCount*25);

    var hours = (minutsFinal / 60);
    var rhours = Math.floor(hours);
    var minutesa = (hours - rhours) * 60;
    var rminutes = Math.round(minutesa);

    if(rhours < 10){
        rhours = "0"+rhours;
    }
    if(rminutes < 10){
        rminutes = "0"+rminutes;
    }

    document.getElementById("actText").textContent = rhours +":"+rminutes;




}




//Añade un task al div contenedor de tasks
function addTaskToContainer(title, subtitle, note, id){
    createPom.style.display = "none";
    buttonCreatePom.style.display = "flex"
    const div = document.createElement('div');




    div.className = 'taskCard';
    div.onclick = function(){
        this.className = "taskCard--clicked";
        if(lastClicked){
            if(lastClicked != this)
            lastClicked.className = "taskCard";
        }
        lastClicked = this;
        updateActualTask(this.id);

    }

    div.id = id;

/*  icono checked gris https://i.ibb.co/n39jmmt/checked-1.png
    icono checked rojo https://i.ibb.co/2MqCtFR/checked.png     */
    if(note != ""){
        div.innerHTML = `
            <div class="taskCard__content">
              <div class="taskContent__left">
                <div class="taskContent__imageCheck">
                  <div class="taskContent__check" onclick="checkUncheck(`+id+`)"></div>
                </div>
                <span class="taskContent__title" id="taskTitle__">
                    `+title+`
                </span>
              </div>
              <div class="taslContent__right">
                <span class="taskContent__subtitle">
                    0/`+subtitle+`
                </span>
                <div class="taskContent__buttonOption">
                  <button class="taskContent__button" onclick="editTask(`+id+`)"><img class="taskContent__imageButton" src="https://i.ibb.co/ZcBHC2p/edit.png" alt=""></button>
                </div>
              </div>
            </div>
            <div class="taskCard__note">
            <p class="taskCard__noteP">
            `+note+`
            </p>
            </div>
            `;
    } else {
        div.innerHTML = `
            <div class="taskCard__content">
              <div class="taskContent__left">
                <div class="taskContent__imageCheck">
                  <div class="taskContent__check"  onclick="checkUncheck(this,`+id+`)"></div>
                </div>
                <span class="taskContent__title" id="taskTitle__">
                     `+title+`
                </span>
              </div>
              <div class="taslContent__right">
                <span class="taskContent__subtitle">
                   0/`+subtitle+`
                </span>
                <div class="taskContent__buttonOption">
                  <button class="taskContent__button" onclick="editTask(`+id+`)"><img class="taskContent__imageButton" src="https://i.ibb.co/ZcBHC2p/edit.png" alt=""></button>
                </div>
              </div>
            </div>
            `;
    }

    var taskEditor = document.createElement('div');
    taskEditor.className = 'createTask';
    taskEditor.style.display = 'none';
    taskEditor.innerHTML = `<div class="createTask__title">
                <input type="text" class="createTask__titleInput" placeholder="Que tarea estas realizando?">
            </div>
            <div class="createTask__subtitle">
                <p>Pom count</p>
            </div>
            <div class="createTask__countPom">
                <input type="number" class="createTask__countInput" value="1" min="1">
                <button class="createTask__countbutton" onclick="upCountPomEdit()"><img src="https://i.ibb.co/CJ2HdG3/caret-up.png" alt="" width="10px"></button>
                <button class="createTask__countbutton" onclick="downCountPomEdit()"><img src="https://i.ibb.co/1KFrG2p/caret-down.png" alt="" width="10px"></button>
            </div>
            <div class="createTask__note" id="taskNoteEdit">
              <textarea class="createTask__noteInput" name="text" id="noteEdit" placeholder="Alguna nota..."></textarea><br>
            </div>

            <button class="createTask__addNote" onclick="showCreateNoteEditTask()">
                +Add note
            </button>



            <div class="createTask__submit2">
                <button class="createTask__Cancel" onclick="deleteTask()">
                    Delete
                </button>
                <div class="createTask__deleteRight">
                <button class="createTask__Cancel" onclick="cancelEditTask()">
                    Cancel
                </button>
                <button class="createTask__Save" onclick="saveEditTask()" id="buttonSaveTask">
                    Save
                </button>
                </div>
            </div>`;
    div.appendChild(taskEditor);




  document.getElementById('taskContainer').appendChild(div);

}

function upCountPomEdit(){
    document.getElementById(taskEditing).querySelector(".createTask__countInput").value = parseInt(document.getElementById(taskEditing).querySelector(".createTask__countInput").value) + 1;

}
function downCountPomEdit(){
    if(parseInt(document.getElementById(taskEditing).querySelector(".createTask__countInput").value) > 1){
        document.getElementById(taskEditing).querySelector(".createTask__countInput").value = parseInt(document.getElementById(taskEditing).querySelector(".createTask__countInput").value) - 1;
    }
}

function updateActualTask(id){
    document.getElementById("taskName").textContent = tasksList[id].title;
}


function checkUncheck(taskclicked, id){

    if(taskclicked.className == "taskContent__check"){
        estCount--;
        updateStats();
        taskclicked.className = "taskContent__check--clicked";
        document.getElementById(id).querySelector(".taskContent__title").style.color = "#AAAAAA";
        document.getElementById(id).querySelector(".taskContent__title").style.textDecoration  = "line-through";
    } else {
        estCount++;
        updateStats();
        taskclicked.className = "taskContent__check";

        document.getElementById(id).querySelector(".taskContent__title").style.color = "rgb(85, 85, 85)";
        document.getElementById(id).querySelector(".taskContent__title").style.textDecoration  = "none";
    }
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();


}

var taskEditing;

function showCreateNoteEditTask(){
    document.getElementById(taskEditing).querySelector('.createTask__addNote').style.display = "none";
    document.getElementById(taskEditing).querySelector(".createTask__note").style.display = "block";
}

function editTask(id){
    taskEditing = id;

    document.getElementById(id).className = "createTask";
    document.getElementById(id).onclick = "";
    document.getElementById(id).querySelector(".taskCard__content").style.display = "none";

    if(document.getElementById(id).querySelector(".taskCard__note")){
        document.getElementById(id).querySelector(".taskCard__note").style.display = "none";
    }
    document.getElementById(id).querySelector(".createTask").style.display = "block";
    document.getElementById(id).querySelector(".createTask__titleInput").value = tasksList[id].title;
    document.getElementById(id).querySelector(".createTask__countInput").value = tasksList[id].pomCount;

    if(tasksList[taskEditing].note != ""){
        showCreateNoteEditTask();
        document.getElementById(id).querySelector(".createTask__noteInput").value = tasksList[id].note;
    } else {

        document.getElementById(id).querySelector(".createTask__note").style.display = "none";
    }

    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
}


function saveEditTask(){

    estCount -= tasksList[taskEditing].pomCount;
    estCount += parseInt(document.getElementById(taskEditing).querySelector(".createTask__countInput").value);
    updateStats();

    tasksList[taskEditing].title = document.getElementById(taskEditing).querySelector(".createTask__titleInput").value;
    tasksList[taskEditing].pomCount = document.getElementById(taskEditing).querySelector(".createTask__countInput").value;
    tasksList[taskEditing].note = document.getElementById(taskEditing).querySelector(".createTask__noteInput").value;

    saveData();
    console.log(document.getElementById(taskEditing).querySelector(".createTask__titleInput").value);
    document.getElementById(taskEditing).querySelector(".taskContent__title").textContent = document.getElementById(taskEditing).querySelector(".createTask__titleInput").value;
    document.getElementById(taskEditing).querySelector(".taskContent__subtitle").textContent = document.getElementById(taskEditing).querySelector(".createTask__countInput").value;

    if(document.getElementById(taskEditing).querySelector(".createTask__noteInput").value != ""){
        if(document.getElementById(taskEditing).querySelector(".taskCard__noteP") != null){
            document.getElementById(taskEditing).querySelector(".taskCard__noteP").textContent = document.getElementById(taskEditing).querySelector(".createTask__noteInput").value;

        } else {
            var newdiv = document.createElement('div');
        newdiv.innerHTML = `
            <p class="taskCard__noteP">
            `+document.getElementById(taskEditing).querySelector(".createTask__noteInput").value+`
            </p>`;

        newdiv.className = "taskCard__note";
        document.getElementById(taskEditing).appendChild(newdiv);
        }

    } else {
        if(document.getElementById(taskEditing).querySelector(".taskCard__noteP") != null){
            document.getElementById(taskEditing).querySelector(".taskCard__note").remove();

        }
    }

    closeEditTask();
}

function cancelEditTask(){

    document.getElementById(taskEditing).querySelector(".createTask__titleInput").value = tasksList[taskEditing].title;
    document.getElementById(taskEditing).querySelector(".createTask__countInput").value = tasksList[taskEditing].pomCount;
    document.getElementById(taskEditing).querySelector(".createTask__noteInput").value = tasksList[taskEditing].note;

    closeEditTask();
}

function deleteTask(){
    estCount -= tasksList[taskEditing].pomCount;
    updateStats();
    console.log(tasksList[taskEditing]);console.log(taskEditing);

    if(document.getElementById(taskEditing).querySelector(".taskCard__note") != null){
        document.getElementById(taskEditing).querySelector(".taskCard__note").style.display = "block";
    }

    document.getElementById(taskEditing).querySelector('.createTask__addNote').style.display = "block";
    document.getElementById(taskEditing).querySelector(".createTask__note").style.display = "none";
    document.getElementById(taskEditing).querySelector(".taskCard__content").style.display = "flex";
    document.getElementById(taskEditing).querySelector(".createTask").style.display = "none";
    document.getElementById(taskEditing).className = 'taskCard';
    delete tasksList[taskEditing];
    console.log(tasksList[taskEditing]);

    document.getElementById(taskEditing).remove();

    taskCount--;
    saveData();


}

function closeEditTask(){
    console.log(taskEditing);

    if(document.getElementById(taskEditing).querySelector(".taskCard__note") != null){
        document.getElementById(taskEditing).querySelector(".taskCard__note").style.display = "block";
    }

    document.getElementById(taskEditing).querySelector('.createTask__addNote').style.display = "block";
    document.getElementById(taskEditing).querySelector(".createTask__note").style.display = "none";
    document.getElementById(taskEditing).querySelector(".taskCard__content").style.display = "flex";
    document.getElementById(taskEditing).querySelector(".createTask").style.display = "none";
    document.getElementById(taskEditing).className = 'taskCard';
    document.getElementById(taskEditing).onclick = function(){
        this.className = "taskCard--clicked";
        if(lastClicked){
            if(lastClicked != this)
            lastClicked.className = "taskCard";
        }
        lastClicked = this;
        updateActualTask(this.id);

    }

}



function finishedPom(){
    tasksList[lastClicked.id].pomCountActual++;
    document.getElementById(lastClicked.id).querySelector(".taskContent__subtitle").textContent = tasksList[lastClicked.id].pomCountActual + "/" + tasksList[lastClicked.id].pomCount;

}



function saveData(){

    localStorage.setItem("counttask",taskCount);

}

function loadData(){
    tasksList = JSON.parse(localStorage.getItem("list"));

}
