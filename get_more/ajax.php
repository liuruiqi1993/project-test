<?php
    $str = file_get_contents("info.json");
    $arr = json_decode($str);
    /*more than one*/
    $rand = array_rand($arr,5);
    for($i=0;$i<count($rand);$i++){
        $obj[$i] = $arr[$rand[$i]];
    }
    echo json_encode($obj);
 ?>
