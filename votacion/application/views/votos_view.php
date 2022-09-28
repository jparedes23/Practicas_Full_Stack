<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Votos 2022</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
</head>
<body>
	<h1>Conteo de Votos 2022</h1>
<div class="container">
<a class="btn btn-success" href="index.php/votos/reportes">Reportes</a>
<form method="POST" id="formulario" name="formulario"  >
	<div class="form-group">
	  <label for="nombre" >Nombre de Colegio</label>
	  <input type="text" class="form-control" id="nombre" name="nombre"  placeholder="Escribe el nombre">
	</div>
	<div class="form-group">
	  <label for="distrito" >Distrito</label>
	  <!-- <input type="text" class="form-control" id="distrito" name="distrito"  placeholder="Escribe el nombre"> -->
	  <select class= "js-example-basic-single form-control form-control-lg" name="distrito" id="distrito">
		<option value="CHIMBOTE">CHIMBOTE</option>
		<option value="CACERES DEL PERU">CACERES DEL PERU</option>
		<option value="COISHCO">COISHCO</option>
		<option value="MACATE">MACATE</option>
		<option value="MORO">MORO</option>
		<option value="NEPEÑA">NEPEÑA</option>
		<option value="SAMANCO">SAMANCO</option>
		<option value="SANTA">SANTA</option>
		<option value="NUEVO CHIMBOTE">NUEVO CHIMBOTE</option>
	  </select>
	</div>
	<div class="form-group">
	  <label for="grupo" >Grupo de Votacion</label>
	  <input type="text" class="form-control" id="grupo_votacion" name="grupo_votacion"  placeholder="Escribe el Grupo de Votacion">
	</div>
	<div class="form-group">
	  <label for="visiado">Votos Visiados</label>
	  <input type="text" class="form-control" id="visiado" name="visiado" placeholder="Ingrese Votos Visiados">
	</div>

	<div class="form-group">
	  <label for="nulos">Votos Nulos</label>
	  <input type="text" class="form-control" id="nulos" name="nulos" placeholder="Ingrese Votos Nulos">
	</div>
	<div class="form-group">
	  <label for="valido">Votos Validos</label>
	  <input type="text" class="form-control" id="valido" name="valido" placeholder="Ingrese Votos Visiados">
	</div>

	<button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <div>
	  <h1 id="totalvotos" name="totalvotos"></h1>
  </div>
</div>

	
<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>

</body>
<script>
	// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
</script>
</html>