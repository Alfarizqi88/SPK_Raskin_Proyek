<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id_alternatif) 
	&& isset($data->nama_alternatif) 
	&& is_numeric($data->id_alternatif) 
	&& !empty(trim($data->nama_alternatif)) 

	){
    $nama_id_alternatif = mysqli_real_escape_string($db_conn, trim($data->nama_id_alternatif));
    $nik = mysqli_real_escape_string($db_conn, trim($data->nik));
    $nama_alternatif = mysqli_real_escape_string($db_conn, trim($data->nama_alternatif));

    
        $updateUser = mysqli_query($db_conn,"UPDATE `data_alternatif` SET `nama_id_alternatif`='$nama_id_alternatif',
            `nik` = '$nik',
            `nama_alternatif`='$nama_alternatif'
            WHERE `id_alternatif`='$data->id_alternatif'");
        if($updateUser){
            echo json_encode(["success"=>1,"msg"=>"User Updated."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Updated!"]);
        }
}
else{
    echo json_decode($data->id_alternatif);    
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}