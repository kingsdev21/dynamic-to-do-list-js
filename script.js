document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value;
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }
        else{
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            const btnremove = document.createElement("button");
            btnremove.textContent = "Remove";
            btnremove.className = "remove-btn";
            btnremove.addEventListener("click", function() {
                taskList.removeChild(taskItem);
            })
            taskItem.appendChild(btnremove);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    })

    addTask();
})