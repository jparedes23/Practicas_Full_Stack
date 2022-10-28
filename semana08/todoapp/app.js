const taskList = document.querySelector("#tasks_list");
const inputTask = document.querySelector("#input_task");

inputTask.addEventListener("keyup", function(ev){
    if (ev.key === "Enter" && this.value !== "") {
        const task = new Task(this.value);
        taskList.append(task);
         
        this.value = "";
        this.focus();
    }
});

