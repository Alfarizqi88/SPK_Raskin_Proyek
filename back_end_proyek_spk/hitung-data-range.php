<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    require 'db_connection.php';
    $allUsers = mysqli_query($db_conn,"SELECT * FROM `data_awal`");
    $ar_data = array(array());
    $ar_data_pertama = array();
    $pendidikan ;
     $nama_id_alternatif ;
      $pekerjaan ;
       $penghasilan ;
        $anggota_keluarga;
    $count = 0;
    if(mysqli_num_rows($allUsers) > 0){
    $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);
    

    foreach($all_users as $a)
    {       

//ID
        
        $var_nama_id_alternatif = $a['nama_id_alternatif'];

//PENDIDIKAN
        
        if($a['pendidikan'] == 5)
        {
            $pendidikan = "Tidak Tamat SD";
            
        }
        elseif ($a['pendidikan'] == 4) {
            $pendidikan = "Tamat SD";   
        }
        elseif ($a['pendidikan'] == 3) {
            $pendidikan = "SLTP/Sederajat"; 
        }
        elseif ($a['pendidikan'] == 2) {
            $pendidikan = "SLTA/Sederajat"; 
        }
        elseif ($a['pendidikan'] == 1) {
            $pendidikan = "DV/Setara S1";   
        }

//PEKERJAAN

        if($a['pekerjaan'] == 5)
        {
            $pekerjaan = "Petani/Pekebun";
            
        }
        elseif ($a['pekerjaan'] == 4) {
            $pekerjaan = "Wiraswasta"; 
        }
        elseif ($a['pekerjaan'] == 3) {
            $pekerjaan = "Karyawan Swasta";    
        }
        elseif ($a['pekerjaan'] == 2) {
            $pekerjaan = "Pedagang";   
        }
        elseif ($a['pekerjaan'] == 1) {
            $pekerjaan = "PNS";    
        }

//PENGHASILAN

        if($a['penghasilan'] == 5)
        {
            $penghasilan = "0 - 500.000";
            
        }
        elseif ($a['penghasilan'] == 4) {
            $penghasilan = "500.000 - 1.000.000";    
        }
        elseif ($a['penghasilan'] == 3) {
            $penghasilan = "1.000.0000-1.500.000";   
        }
        elseif ($a['penghasilan'] == 2) {
            $penghasilan= "1.500.000 - 2.000.000";  
        }
        elseif ($a['penghasilan'] == 1) {
            $penghasilan = "lebih dari 2.000.000";   
        }

//ANGGOTA KELUARGA

        if($a['anggota_keluarga'] == 5)
        {
            $anggota_keluarga = "9-10";
            
        }
        elseif ($a['anggota_keluarga'] == 4) {
            $anggota_keluarga = "7-8";    
        }
        elseif ($a['anggota_keluarga'] == 3) {
            $anggota_keluarga= "5-6";    
        }
        elseif ($a['anggota_keluarga'] == 2) {
            $anggota_keluarga = "3-4";    
        }
        elseif ($a['anggota_keluarga'] == 1) {
            $anggota_keluarga = "1-2";    
        }

        $count++;
        $ar_data_pertama[] = ["nama_id_alternatif" => $var_nama_id_alternatif, "pendidikan" => $pendidikan ,
         "pekerjaan" => $pekerjaan , "penghasilan" => $penghasilan , "anggota_keluarga" => $anggota_keluarga];
    }

    
}

       //mengurutkan array
    function make_comparer() {
    // Normalize criteria up front so that the comparer finds everything tidy
    $criteria = func_get_args();
    foreach ($criteria as $index => $criterion) {
        $criteria[$index] = is_array($criterion)
            ? array_pad($criterion, 3, null)
            : array($criterion, SORT_ASC, null);
    }

    return function($first, $second) use (&$criteria) {
        foreach ($criteria as $criterion) {
            // How will we compare this round?
            list($column, $sortOrder, $projection) = $criterion;
            $sortOrder = $sortOrder === SORT_DESC ? -1 : 1;

            // If a projection was defined project the values now
            if ($projection) {
                $lhs = call_user_func($projection, $first[$column]);
                $rhs = call_user_func($projection, $second[$column]);
            }
            else {
                $lhs = $first[$column];
                $rhs = $second[$column];
            }

            // Do the actual comparison; do not return if equal
            if ($lhs < $rhs) {
                return -1 * $sortOrder;
            }
            else if ($lhs > $rhs) {
                return 1 * $sortOrder;
            }
        }

        return 0; // tiebreakers exhausted, so $first == $second
    };
    }

     usort($ar_data_pertama, make_comparer(['nama_id_alternatif', SORT_DESC]));

    echo json_encode(["success"=>1,"data_pertama"=>$ar_data_pertama]);

?>