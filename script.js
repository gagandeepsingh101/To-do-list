let input_task = document.querySelector("#task-text");
let addTask = document.querySelector("#add-task");
let taskList = document.querySelector("#task-list");
let deleteTask = document.querySelector(".delete-task");

// Handle addition of tasks in the task list
function addNewTask(value) {
  if (value === "") {
    alert("Add new task");
  } else {
    let li = document.createElement("li");
    li.innerText = value;
    li.classList.add("task");
    let span = document.createElement("span");
    span.innerHtml = "X";
    li.appendChild(span);
    taskList.appendChild(li);
  }

  //  store the tasklist item in the localStorage
  localStorage.setItem("task", taskList.innerHTML);
  input_task.value = "";
}


addTask.addEventListener("click", () => {
  addNewTask(input_task.value);
});

// Add listeners to handle checked and deleted tasks 
taskList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    localStorage.setItem("task", taskList.innerHTML);
  },
  false
);

// fetch locatstorage task list
taskList.innerHTML = localStorage.getItem("task");
