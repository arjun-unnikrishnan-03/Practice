export const renderTasks = (tasks, taskList) => {
    taskList.innerHTML = tasks
    .map(
        ({ id , text }) => `
        <li data-id = "${id}">
        <span>${text}</span>
        <button class="delete-btn">Delete</button>
        </li>
        `
    ).join("");
}