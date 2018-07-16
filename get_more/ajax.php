<?php
    $str = file_get_contents("info.json");
    $arr = json_decode($str);
    /*MORE THAN ONE*/
    $rand = array_rand($arr,2);
    for($i=0;$i<count($rand);$i++){
        $obj[$i] = $arr[$rand[$i]];
    }
    echo json_encode($obj);
 ?>
