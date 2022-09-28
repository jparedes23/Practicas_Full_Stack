$("#formulario").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
 
    var form = $(this);
    //var actionUrl = form.attr('action');
    //console.log( $( this ).serialize() );
    $.ajax({
        type: "POST",
        url: "index.php/votos/conteovotos",
        data: form.serialize(), // serializes the form's elements.
        success: function(data)
        {
        //   alert('Datos Guardados con Exito'); // show response from the php script.
        console.log(data);
        $("#totalvotos").html(data);
        },
        Error: function (data){
            // alert('Error al Guardar Datos'); // show response from the php script.
        }
    });
    
});