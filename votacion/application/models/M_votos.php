<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class M_votos extends CI_Model {
    
    public function __construct()
    {
        parent::__construct();
    }

    public function guardardatos($tabla, $vector)
    {
            if (!$this->db->insert($tabla, $vector)) {
                //var_dump($this->db->error());
                return FALSE;
            } else return $this->db->insert_id();
    
    }
    public function get_data($data)
    {
        $this->db->select("*");
        $this->db->from($data['from']);
        if (isset($data['join'])) {
            $data['join'];
        }
        if (isset($data['where'])) {
            $this->db->where($data['where']);
        }
        if (isset($data['order_by'])) {
            $data['order_by'];
        }
        if (isset($data['limit'])) {
            $this->db->limit($data['limit']);
        }
        $resultado = $this->db->get();
        return $resultado->result();
    }

    public function get_data_distritos($data)
    {
        $this->db->select("*,
        CASE
        WHEN lv.distrito = 'CHIMBOTE' THEN SUM(voto_validos)
        WHEN lv.distrito = 'CACERES DEL PERU' THEN SUM(voto_validos)
        WHEN lv.distrito = 'COISHCO' THEN SUM(voto_validos)
        WHEN lv.distrito = 'MACATE' THEN SUM(voto_validos)
        WHEN lv.distrito = 'MORO' THEN SUM(voto_validos)
        WHEN lv.distrito = 'NEPEÑA' THEN SUM(voto_validos)
        WHEN lv.distrito = 'SAMANCO' THEN SUM(voto_validos)
        WHEN lv.distrito = 'SANTA' THEN SUM(voto_validos)
        WHEN lv.distrito = 'NUEVO CHIMBOTE' THEN SUM(voto_validos)
        END as sumadistrito,CASE
        WHEN lv.distrito = 'CHIMBOTE' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'CACERES DEL PERU' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'COISHCO' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'MACATE' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'MORO' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'NEPEÑA' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'SAMANCO' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'SANTA' THEN SUM(voto_visiados)
        WHEN lv.distrito = 'NUEVO CHIMBOTE' THEN SUM(voto_visiados)
        END as sumadistrito_visiados,
        CASE
        WHEN lv.distrito = 'CHIMBOTE' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'CACERES DEL PERU' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'COISHCO' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'MACATE' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'MORO' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'NEPEÑA' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'SAMANCO' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'SANTA' THEN SUM(voto_nulos)
        WHEN lv.distrito = 'NUEVO CHIMBOTE' THEN SUM(voto_nulos)
        END as sumadistrito_votosnulos ");
        $this->db->from($data['from']);
        if (isset($data['join'])) {
            $data['join'];
        }
        if (isset($data['where'])) {
            $this->db->where($data['where']);
        }
        if (isset($data['order_by'])) {
            $data['order_by'];
        }
        if (isset($data['limit'])) {
            $this->db->limit($data['limit']);
        }
        $resultado = $this->db->get();
        return $resultado->result();
    }

}