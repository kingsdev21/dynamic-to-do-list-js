document.addEventListener("DOMContentLoaded", function(){
      
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
   
   
    loadTasks();
    function addTask(taskText, save = true) {
       
          
        if(taskText.trim() == "") {
            alert("Please enter a task.");
            return;
        }
        else{
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            const btnremove = document.createElement("button");
            btnremove.textContent = "Remove";
            btnremove.classList.add('remove-btn');
            btnremove.addEventListener("click", function() {
                taskList.removeChild(taskItem);
                const storedTask = JSON.parse(localStorage.getItem("tasks")) || [];
                const newtasks = storedTask.filter(task => task !== taskItem.childNodes[0].textContent.trim());
                localStorage.setItem("tasks", JSON.stringify(newtasks));
            })
            taskItem.appendChild(btnremove);
            taskList.appendChild(taskItem);
            taskInput.value = "";

            if (save) {
               const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
               //console.log(typeof(storedTasks));
               storedTasks.push(taskText);
               localStorage.setItem("tasks", JSON.stringify(storedTasks));
            }
        }
    }

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

        if(storedTasks.length > 0){
            storedTasks.forEach(taskTest => {
                addTask(taskTest, false);
            }); 
        }
       
        }

    addButton.addEventListener("click", function(){
        const taskText = taskInput.value.trim();
        addTask(taskText, true);
    });

    taskInput.addEventListener("keypress", function(event) {
        const taskText = taskInput.value.trim();
        if (event.key === "Enter") {
            addTask(taskText, true);
        }
    })

   
})