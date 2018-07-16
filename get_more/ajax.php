<?php
<<<<<<< HEAD
    $str = file_get_contents("info.json");
    $arr = json_decode($str);
    /*more than one*/
    $rand = array_rand($arr,5);
=======
    $header[] = "Content-type: application/x-www-form-urlencoded";
    $str = file_get_contents("info.json");
    $arr = json_decode($str);
    /*MORE THAN ONE*/
    $rand = array_rand($arr,2);
>>>>>>> 43d1374d5d892b507da2270cc1c4cfd5808cb833
    for($i=0;$i<count($rand);$i++){
        $obj[$i] = $arr[$rand[$i]];
    }
    echo json_encode($obj);
 ?>
