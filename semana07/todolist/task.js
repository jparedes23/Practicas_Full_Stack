/**
 * Reglas de nuestra clase
 * 1) Que debemos recibir 3 parametros cuando instaciemos esta
 * 2) Tendemos 3 estados
 *    * status 1 = create
 *    * status 2 = done
 *    * status 3 = delete
 * 3) Tendremos una function para poder renderizar nuestra tarea
 * 4) Tendremos una function para actualizar nuestra tarea
 * 5) Tendremos una function para eleminar nuestra tarea
 * CRUD => CREATE - READ - UPDATE - DELETE
 */

//* Esta es la forma en la que instanciamos a la clase Task
//* const task = new Task("Tarea1", new Date(), 1);
//!!! Imporante un Clase siempre inicia en Mayuscula
//Para poder usar import de este archivo tenemos que decir 
///que nuestra clase sea exportable, es decir que pueda ser usada desde otro archivo
export class Task {
    constructor(name, date, status){
        this._name=name;
        this._date=date;
        this._status=status;
    }
/// En un clase no hace falta usar la palabra function
/// esta es una funcion
    render(){
        return `<div class="item_task">
        <input type="checkbox">
        <h6>${this._name}</h6>
        <button><img src="./img/edit.png" width="20" alt=""></button>
        <button><img src="./img/delete.png" width="20" alt=""></button>
    </div>`
    }
}