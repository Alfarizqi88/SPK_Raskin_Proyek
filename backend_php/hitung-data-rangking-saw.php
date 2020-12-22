<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

 
    $ar_data = array(array());  
    $arr_data_normalisai_saw= array();
    $count = 0;
    $max_pendidikan = 0;
    $max_pekerjaan = 0;
    $max_penghasilan = 0;
    $max_anggota_keluarga = 0;


    $allUsers = mysqli_query($db_conn,"SELECT * FROM `data_awal` ORDER BY 'id_data_awal' ASC");
    if(mysqli_num_rows($allUsers) > 0){
        $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);
       

    

    foreach($all_users as $a)
    {    	

//ID		

//PENDIDIKAN
    	
    	if($a['pendidikan'] == 5)
    	{

    		if($max_pendidikan<$a['pendidikan'])
            {
                $max_pendidikan = 5;
            }
    		
    	}
    	elseif ($a['pendidikan'] == 4) {
    		if($max_pendidikan<$a['pendidikan'] )
            {
                $max_pendidikan = 4;
            }
    	}
    	elseif ($a['pendidikan'] == 3) {
    		if($max_pendidikan<$a['pendidikan'] )
            {
                $max_pendidikan = 3;
            }
    	}
    	elseif ($a['pendidikan'] == 2) {
    		if($max_pendidikan<$a['pendidikan'] )
            {
                $max_pendidikan = 2;
            }
    	}
    	elseif ($a['pendidikan'] == 1) {
    		if($max_pendidikan<$a['pendidikan'] )
            {
                $max_pendidikan = 1;
            }
    	}

//PEKERJAAN

    	if($a['pekerjaan'] == 5)
    	{
    		if($max_pekerjaan<$a['pekerjaan'])
            {
                $max_pekerjaan = 5;
            }
    		
    	}
    	elseif ($a['pekerjaan'] == 4) {
    		
            if($max_pekerjaan<$a['pekerjaan'])
            {
                $max_pekerjaan = 4;
            }
    	}
    	elseif ($a['pekerjaan'] == 3) {
    		
            if($max_pekerjaan<$a['pekerjaan'])
            {
                $max_pekerjaan = 3;
            }
    	}
    	elseif ($a['pekerjaan'] == 2) {
    		
            if($max_pekerjaan<$a['pekerjaan'])
            {
                $max_pekerjaan = 2;
            }	
    	}
    	elseif ($a['pekerjaan'] == 1) {
    		
            if($max_pekerjaan<$a['pekerjaan'])
            {
                $max_pekerjaan = 1;
            }
    	}

//PENGHASILAN

    	if($a['penghasilan'] == 5)
    	{
    		if($max_penghasilan<$a['penghasilan'])
            {
                $max_penghasilan = 5;
            }
    		
    	}
    	elseif ($a['penghasilan'] == 4) {
    		if($max_penghasilan<$a['penghasilan'])
            {
                $max_penghasilan = 4;
            }
    	}
    	elseif ($a['penghasilan'] == 3) {
    		if($max_penghasilan<$a['penghasilan'])
            {
                $max_penghasilan = 3;
            }
    	}
    	elseif ($a['penghasilan'] == 2) {
    		if($max_penghasilan<$a['penghasilan'])
            {
                $max_penghasilan = 2;
            }
    	}
    	elseif ($a['penghasilan'] == 1) {
    		if($max_penghasilan<$a['penghasilan'])
            {
                $max_penghasilan = 1;
            }
    	}

//ANGGOTA KELUARGA

    	if($a['anggota_keluarga'] == 5)
    	{
    		if($max_anggota_keluarga<$a['anggota_keluarga'])
            {
                $max_anggota_keluarga = 5;
            }
    		
    	}
    	elseif ($a['anggota_keluarga'] == 4) {
    		
            if($max_anggota_keluarga<$a['anggota_keluarga'])
            {
                $max_anggota_keluarga = 4;
            }
    	}
    	elseif ($a['anggota_keluarga'] == 3) {
    		
            if($max_anggota_keluarga<$a['anggota_keluarga'])
            {
                $max_anggota_keluarga = 3;
            }
    	}
    	elseif ($a['anggota_keluarga'] == 2) {
    		
            if($max_anggota_keluarga<$a['anggota_keluarga'])
            {
                $max_anggota_keluarga = 2;
            }
    	}
    	elseif ($a['anggota_keluarga'] == 1) {
    		
            if($max_anggota_keluarga<$a['anggota_keluarga'])
            {
                $max_anggota_keluarga = 1;
            }
    	}


    	$count++;

        
    }

    // $count = 0;
    foreach($all_users as $a)
    {   
        $var_nama_id_alternatif = $a['nama_id_alternatif'];
        $hasil_pendidikan = $a['pendidikan'] / $max_pendidikan;
        $hasil_pekerjaan = $a['pekerjaan'] / $max_pekerjaan;
        $hasil_penghasilan =  $a['penghasilan'] / $max_penghasilan;
        $hasil_anggota_keluarga = $a['anggota_keluarga'] / $max_anggota_keluarga;
        $total = $hasil_pendidikan*0.15 + $hasil_pekerjaan*0.23 + $hasil_penghasilan*0.35 + $hasil_anggota_keluarga*0.27;

        // echo "ke". $count . $a['pendidikan'] . " " . $max_pendidikan . "\n";

        $arr_data_final_saw[] = ["nama_id_alternatif" => $var_nama_id_alternatif,  'total' => (string)$total ];

         // $count++;
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
    
    usort($arr_data_final_saw, make_comparer(['total', SORT_ASC]));
    
    
	echo json_encode(["success"=>1,"data_final_saw"=>$arr_data_final_saw]);



?>