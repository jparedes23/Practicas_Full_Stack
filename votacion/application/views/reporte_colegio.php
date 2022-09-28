<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap4.min.css">
</head>
<body>
<div class="container text-center">
<a class="btn btn-success" href="/votacion/index.php/votos/reportes">Reportes general</a>
<a class="btn btn-success" href="/votacion/index.php/votos/reportes_distrito">Reportes por Distrito</a>
<a class="btn btn-success" href="/votacion/index.php/votos/reportes_colegio">Reportes por Colegio</a>

<table id="example" class="table table-striped table-bordered" style="width:100%">

        <thead>
            <tr>
                <th>N°</th>
                <th>Colegio</th>
                <th>Distrito</th>
                <th>Voto Valido</th>
                <th>Voto Visiado</th>
                <th>Voto Nulo</th>
                <th>Total de Votos</th>
            </tr>
        </thead>
        <tbody>
		<?php $c = 0 ; foreach ($data_reporte as $reporte) {?>
            <tr>
                <td><?php echo $c+1  ?> </td>
                <td><?php echo $reporte->nombre_local  ?> </td>
                <td><?php echo $reporte->distrito ?> </td>
                <td><?php echo $reporte->voto_validos  ?> </td>
                <td><?php echo $reporte->voto_visiados  ?> </td>
                <td><?php echo $reporte->voto_nulos ?> </td>
                <td><?php echo $reporte->total_votos  ?> </td>                
            </tr>
		<?php $c++; }?>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>
	</div>
    <a class="btn btn-success" href="/votacion/index.php">Regresar</a>
</body>
<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap4.min.js"></script>


</html>
<script>

$(document).ready(function () {
    $('#example').DataTable();
});
</script>