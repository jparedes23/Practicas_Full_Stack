function capturar() {
    // console.log("Capturado");
    function Persona(nombre,edad) {
        this.nombre=nombre;
        this.edad=edad;
    };
    let nombreCaptura = document.getElementById("nombre").value;
    // console.log(nombreCaptura);
    let edadCaptura = document.getElementById("edad").value;

    nuevoSujeto = new Persona(nombreCaptura,edadCaptura);
    console.log(nuevoSujeto);
    agregar();
};

let datbase=[];
function agregar() {
   datbase.push(nuevoSujeto);
   console.log(datbase);
   document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tbody>';
};
