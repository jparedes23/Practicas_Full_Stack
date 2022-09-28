<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Votos extends CI_Controller {
	public function __construct()
    {
        parent::__construct();
        $this->load->model("M_votos");

    }
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		$this->load->view('votos_view');
		
	}
	public function conteovotos()
	{
		$nombre = $this->input->post("nombre"); //name html desde el serializes
		$distrito = $this->input->post("distrito");
		$visiado = $this->input->post("visiado");
		$nulos = $this->input->post("nulos");
		$valido = $this->input->post("valido");
		$grupo_votacion = $this->input->post("grupo_votacion");
		$result = $visiado+$nulos+$valido;

		$tabla = "local_votacion" ;
		$vector = [
			'nombre_local'=>$nombre,
			'distrito'=>$distrito,
			'grupo_votacion'=>$grupo_votacion
		];
		
		$savedata = $this->M_votos->guardardatos($tabla,$vector);
		
		$tabla2 = "votos" ;
		$vector2 = [
			'voto_nulos'=>$nulos,
			'voto_visiados'=>$visiado,
			'voto_validos'=>$valido,
			'total_votos'=>$result,
			'id_local_votacion' => $savedata
		];

		$savedata_votacion = $this->M_votos->guardardatos($tabla2,$vector2);
		
		echo $result;
	}
	public function reportes()
    {
		$data_reportes["from"] = "votos v";
		$data_reportes["join"] = $this->db->join('local_votacion lv', 'lv.id_loca = v.id_local_votacion');
		$data_reporte["data_reporte"] = $this->M_votos->get_data($data_reportes);
		$this->load->view('reporte',$data_reporte);

    }
	
	public function reportes_distrito()
    {
		$data_reportes["from"] = "votos v";
		$data_reportes["join"] = $this->db->join('local_votacion lv', 'lv.id_loca = v.id_local_votacion');
		$data_reportes["order_by"] = $this->db->group_by("distrito");
		$data_reporte["data_reporte"] = $this->M_votos->get_data_distritos($data_reportes);
		$this->load->view('reporte_distrito',$data_reporte);

    }
}
