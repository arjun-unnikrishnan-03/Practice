import { saveTasks, getTasks } from "./storage.js";
import { renderTasks } from "./ui.js";

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

let tasks = getTasks();

//Initial render
renderTasks(tasks, taskList);

// Add task 
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), text: taskInput.value.trim() };
    tasks = [...tasks, newTask];
    saveTasks(tasks);
    renderTasks(tasks, taskList);
    taskInput.value = "";
});

//Delete task event delegation
taskList.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-btn")) {
        const id = Number(e.target.parentElement.dataset.id);
        tasks = tasks.filter((t) => t.id !== id);
        saveTasks(tasks);
        renderTasks(tasks, taskList);
    }
});
