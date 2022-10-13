

const inputTask = document.querySelector(".input__task");
const btnCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task")
///creamos un arreglo vacio
const arraytask =[];



// !!Nota cuando una funcion no tiene nombre se llama Funcion Anonima
btnCreate.onclick = function(){
    const taskText = inputTask.value;
    // console.log("taskText", taskText)

//vamos a validar que el tasktext no estea vacio
if (taskText === "") {
    alert("Debe completar la caja de texto");
    return;
}

const task = new Task(arraytask.length +1, taskText, new Date(), 1)
arraytask.push(task);
// console.log(arraytask);
//task. biene de la instancia 
//recuerda que listTask biene del contenedor del html y el render se incrusta el div que iba a adentro
listTask.innerHTML += task.render();

inputTask.value = ""; // para limpiar el input 
}

function destroy(id){
    // como eliminamos un elemento de un array
    //en la condicion podemos decir que traiga todos los elemento que tenga 
    //el id que estamos reciviendo

    
}