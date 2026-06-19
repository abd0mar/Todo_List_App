//Actions Btn
let addBtn = document.querySelector(".add");

let allBtn = document.querySelector(".all");
let activeBtn = document.querySelector(".active");
let completedBtn = document.querySelector(".completed");

let tabsBtns = document.querySelector(".actions");

//Tasks Sections
let sectionBtns = document.querySelectorAll(".actions > button");
let tasksListSection = document.querySelector(".list");

//===========================================================================
let tasks = [];
let allList = () => tasks
let activeList = () => tasks.filter(e => e.completed == false);
let compList = () => tasks.filter(e => e.completed == true);

//===============================
//Local Storage
//===============================

let lsCheckTasks = localStorage.getItem("tasks");
let lsCheckCurrenSec = localStorage.getItem("currentSec");
window.onload = function(){
  if(lsCheckTasks){
    tasks = JSON.parse(lsCheckTasks);
  }

  if(lsCheckCurrenSec){
    if(lsCheckCurrenSec == "active"){
      render(activeList());
      currentBtnClass(activeBtn);
    }
    else if(lsCheckCurrenSec == "completed"){
      render(compList());
      currentBtnClass(completedBtn);
    }
    else{
      render(tasks);
      currentBtnClass(allBtn);
    }
  }
}

//Updateing Local Storage----------
function lsUpdateTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function lsUpdateCurrentSec(value){
  localStorage.setItem("currentSec", value);
}

//===============================
//Add a new task
//===============================
function addNewTask(input){
  let task = {
    name: input,
    id: Date.now(),
    completed: false,
  };
  tasks.push(task);
}

//===============================
//Delete tasks Function
//===============================
function deleteTask(taskId){
  tasks = tasks.filter(e => e.id != taskId);
}

//===============================
//Completed Value Toggle
//===============================
function toggleTask(taskId){
  let task = tasks.find(t => t.id === Number(taskId));
  task.completed = !task.completed;
}

//===============================
//Add Current class
//===============================
function currentBtnClass(btn){
  sectionBtns.forEach(e => e.classList.remove("currentBtn"));
  btn.classList.add("currentBtn");
}

//===============================
//Render Function
//===============================
function render(tasksList){
  //Create a new task
  tasksListSection.innerHTML = "";
  let allTasksHtml = tasksList.map(value =>`
    <div class="task" data-id="${value.id}">
      <p class="text ${value.completed === true ? "done" : ""}">${value.name}</p>
      <i class="fa-solid fa-trash"></i>
      <input type="checkbox" class="checkbox" ${value.completed ? "checked" : ""}>
    </div>`
  ).join("");
  tasksListSection.innerHTML = allTasksHtml;
}


//===============================
//Start Observers
//===============================
//Add Button

let taskInput = document.querySelector(".taskText");
addBtn.addEventListener("click", e => {
  if(taskInput.value !== ""){
    addNewTask(taskInput.value);
    render(activeList());
    currentBtnClass(activeBtn);
    lsUpdateCurrentSec("active");
    lsUpdateTasks();
  }
  taskInput.focus();
  taskInput.value = "";
})

function sectionRender(){
  let lsCuChk = localStorage.getItem("currentSec");
  if(lsCuChk == "active"){
    console.log("active")
    render(activeList())
  }
  if(lsCuChk == "completed"){
    console.log("completed")
    render(compList())
  }
  if(lsCuChk == "all"){
    console.log("all")
    render(allList())
  }
}

//Tasks list Actions
tasksListSection.addEventListener("click", e => {
  let taskId = e.target.parentElement.dataset.id;
  if(e.target.classList.contains("fa-trash")){
    deleteTask(taskId);
    lsUpdateTasks();
    sectionRender()
  };
  if(e.target.classList.contains("checkbox")){
    toggleTask(taskId);
    lsUpdateTasks();
    sectionRender()
  };
})

tabsBtns.addEventListener("click", function(e){
  let btnId = e.target.dataset.id;

  if(btnId == "activeBtn"){
    render(activeList());
    lsUpdateCurrentSec("active");
    currentBtnClass(activeBtn);
  }
  else if(btnId == "completedBtn"){
    render(compList());
    lsUpdateCurrentSec("completed");
    currentBtnClass(completedBtn);
  }else{
    render(allList());
    lsUpdateCurrentSec("all");
    currentBtnClass(allBtn);
  }
})



