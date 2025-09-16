export const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const getTasks = () => {
    return JSON.parse(localStorage.getItem("tasks")) ?? [];
}