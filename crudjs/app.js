let listaEmpleados =[];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: ''
}
//esta variable define cuando tiene que agregar y actualizar la informacion
let editando = false; 
//creamos constantes para elementos de los formularios de input y del botton
const formulario = document.querySelector('#id-form');
const nombreInput = document.querySelector('#id-nombre');
const puestoInput = document.querySelector('#id-puesto');
const btnAgregar = document.querySelector('#btnAgregar');
//cuando detecte el submit va a llamar a la funcion validarFormulario
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    //esto es para que no se ejecute de forma automatica
    e.preventDefault();

    //queremos que cuando deemos el boton agregar
    // verifique que los campos input no este vacios y si no esta vacio ninguno
    // de los 2 entonces procede a hacer la operacion 

    if(nombreInput.value === '' || puestoInput.value === ''){
        alert('Todos los campos son obligatorios.');
        return
    }
//vamos a revisar si la variable edditando esta en true o en false ya que no dira si al momento de presionar el botton va a agrgar o actulizar la informacion de ese elemento
// 
    if(editando){
        editarEmpleado();
        editando=false;
    } else {
        objEmpleado.id = Date.now(); //nos obtiene el tiempo en milisegundo
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.puesto = puestoInput.value;
//llamamos a la funcion agregarEmpleado
        agregarEmpleado();
    }

}

function agregarEmpleado(){
    //decimos con le push que agregue objetos
    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();

    formulario.reset();

    limpiarObjeto();
}

function limpiarObjeto(){
    objEmpleado.id='';
    objEmpleado.nombre='';
    objEmpleado.puesto=''
}

function mostrarEmpleados(){
//limpiamos html
limpiarhtml();


    //esto para tener referencia en parte vamos a agregar los elementos html
    const divEmpleados = document.querySelector('.divEmpleados');//empleados biene desde el html
//recorremos la lista de empleados por foreah y vamos a reestructurar los elementos para aceder mas facila a ellos
    listaEmpleados.forEach( empleado => {
        const {id, nombre, puesto} = empleado;
        //creamos una constante al parrafo y creamos una etiqueta p
        const parrafo = document.createElement('p');
        
        parrafo.textContent = `${id} ${nombre} - ${puesto} -`;
        parrafo.dataset.id = id; //para idenificar que parrafo tenemos que eliminar

        const editarBoton = document.createElement('button');
        //editar
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //eliminar
        eliminarBoton.onclick = () => eliminarEmpleado(empleado);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');
        //y todo los vamos a agregar a divempleados
        //agregarmos un nodo hijo al contenedor div-empleados
        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });
}

function cargarEmpleado(empleado){
    const {id, nombre, puesto} = empleado;

    nombreInput.value = nombre;
    puestoInput.value = puesto;

    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent='Actualizar';
    editando=true;

}

function editarEmpleado(){
    objEmpleado.nombre = nombreInput.value;
    objEmpleado.puesto =puestoInput.value;

    listaEmpleados.map( empleado => {
        if(empleado.id === objEmpleado.id) {
            empleado.id = objEmpleado.id;
            empleado.nombre= objEmpleado.nombre;
            empleado.puesto= objEmpleado.puesto;

        }
    });

    limpiarhtml();
    mostrarEmpleados();

    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent='Agregar';
    editando = false;
}

function eliminarEmpleado(id){
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);
    limpiarhtml();
    mostrarEmpleados();
}

function limpiarhtml(){
    const divEmpleados = document.querySelector('.divEmpleados');
    //mi el contenedor div-Empleados tenga hijos va a ir eliminando de 1 en 1 hasta que no tenga hijos 
    while(divEmpleados.firstChild){
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}