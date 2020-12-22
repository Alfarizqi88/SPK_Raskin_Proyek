<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

 if(isset($data->nama_alternatif) 
// 	&& isset($data->user_bobot) 
//     && isset($data->user_status) 
// 	&& !empty(trim($data->user_nama_kriteria)) 
// 	&& !empty(trim($data->user_bobot))
//     && !empty(trim($data->user_status))
 	){
 	$nama_id_alternatif = mysqli_real_escape_string($db_conn, trim($data->nama_id_alternatif));
 	$nik = mysqli_real_escape_string($db_conn, trim($data->nik));
    $nama_alternatif = mysqli_real_escape_string($db_conn, trim($data->nama_alternatif));
    
    
        $insertUser = mysqli_query($db_conn,"INSERT INTO `data_alternatif`(`nama_id_alternatif`,`nik`,`nama_alternatif`) VALUES('$nama_id_alternatif','$nik','$nama_alternatif')");
        if($insertUser){
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success"=>1,"msg"=>"User Inserted.","id"=>$last_id]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Inserted!"]);
        }
   
 }
// else{
//     echo ($data->$user_nama_kriteria);
//     echo($data->$user_bobot);
//     echo($data->$status);
//     echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
// }