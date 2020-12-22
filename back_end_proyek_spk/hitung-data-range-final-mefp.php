<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    require 'db_connection.php';
    $allUsers = mysqli_query($db_conn,"SELECT * FROM `data_awal`");
    
    $arr_data_range_final_mefp = array();
    $pendidikan_angka = 0.15 ;
     $var_nama_id_alternatif ;
      $pekerjaan_angka = 0.23 ;
       $penghasilan_angka = 0.35 ;
        $anggota_keluarga_angka = 0.27;
    $count = 0;
    if(mysqli_num_rows($allUsers) > 0){
    $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);
    

    foreach($all_users as $a)
    {       

//ID
        
        $var_nama_id_alternatif = $a['nama_id_alternatif'];
        $hasil_pendidikan = $pendidikan_angka * $a['pendidikan'];
        $hasil_pekerjaan = $pekerjaan_angka * $a['pekerjaan'];
        $hasil_penghasilan = $penghasilan_angka * $a['penghasilan'];
        $hasil_anggota_keluarga = $anggota_keluarga_angka * $a['anggota_keluarga'];
        $total = $hasil_pendidikan + $hasil_pekerjaan + $hasil_penghasilan + $hasil_anggota_keluarga;

//PENDIDIKAN
        
       

        $count++;
        $arr_data_range_final_mefp[] = ["nama_id_alternatif" => $var_nama_id_alternatif, "pendidikan" => (string)$hasil_pendidikan ,
         "pekerjaan" => (string)$hasil_pekerjaan , "penghasilan" => (string)$hasil_penghasilan , 
         "anggota_keluarga" => (string)$hasil_anggota_keluarga , 'total' => (string)$total];
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

     usort($arr_data_range_final_mefp, make_comparer(['nama_id_alternatif', SORT_DESC]));
    

    echo json_encode(["success"=>1,"data_range_final_mefp"=>$arr_data_range_final_mefp]);
}

?>