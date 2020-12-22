<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id_data_awal) 
	&& isset($data->nama_id_alternatif) 
	&& is_numeric($data->id_data_awal) 
	&& !empty(trim($data->nama_id_alternatif)) 

	){
    $nama_id_alternatif = mysqli_real_escape_string($db_conn, trim($data->nama_id_alternatif));
    $pendidikan = mysqli_real_escape_string($db_conn, trim($data->pendidikan));
    $pekerjaan = mysqli_real_escape_string($db_conn, trim($data->pekerjaan));
    $penghasilan = mysqli_real_escape_string($db_conn, trim($data->penghasilan));
    $anggota_keluarga = mysqli_real_escape_string($db_conn, trim($data->anggota_keluarga));

    
        $updateUser = mysqli_query($db_conn,"UPDATE `data_awal` SET `nama_id_alternatif`='$nama_id_alternatif',
            `pendidikan` = '$pendidikan',
            `pekerjaan`='$pekerjaan',
            `penghasilan`='$penghasilan',
            `anggota_keluarga`='$anggota_keluarga'
            WHERE `id_data_awal`='$data->id_data_awal'");
        if($updateUser){
            echo json_encode(["success"=>1,"msg"=>"User Updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Updated!"]);
        }
}
else{
    
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}