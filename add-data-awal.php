<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

 if(isset($data->nama_id_alternatif) 
// 	&& isset($data->user_bobot) 
//     && isset($data->user_status) 
// 	&& !empty(trim($data->user_nama_kriteria)) 
// 	&& !empty(trim($data->user_bobot))
//     && !empty(trim($data->user_status))
 	){
 	$nama_id_alternatif = mysqli_real_escape_string($db_conn, trim($data->nama_id_alternatif));
 	$pendidikan = mysqli_real_escape_string($db_conn, trim($data->pendidikan));
    $pekerjaan = mysqli_real_escape_string($db_conn, trim($data->pekerjaan));
    $penghasilan = mysqli_real_escape_string($db_conn, trim($data->penghasilan));
    $anggota_keluarga = mysqli_real_escape_string($db_conn, trim($data->anggota_keluarga));
    
    
        $insertUser = mysqli_query($db_conn,"INSERT INTO `data_awal`
        	(`nama_id_alternatif`,`pendidikan`,`pekerjaan`,`penghasilan`,`anggota_keluarga`) 
        	VALUES('$nama_id_alternatif','$pendidikan','$pekerjaan','$penghasilan','$anggota_keluarga')");
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