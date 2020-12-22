<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id_kriteria) 
	&& isset($data->nama_kriteria) 
	&& is_numeric($data->id_kriteria) 
	&& !empty(trim($data->nama_kriteria)) 

	){
    $nama_kriteria = mysqli_real_escape_string($db_conn, trim($data->nama_kriteria));
    $bobot = mysqli_real_escape_string($db_conn, trim($data->bobot));
    $status = mysqli_real_escape_string($db_conn, trim($data->status));

    
        $updateUser = mysqli_query($db_conn,"UPDATE `data_kriteria` SET `nama_kriteria`='$nama_kriteria' , 
            `bobot` = '$bobot',
            `status` = '$status'
            WHERE `id_kriteria`='$data->id_kriteria'");
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