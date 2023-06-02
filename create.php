<?php

require_once "config.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST") { 

        $json =file_get_contents('php://input');
        $data = json_decode($json);
        $card =$data -> card;
       // $back= $data -> style;

        $sql ="INSERT INTO grusskarten (card) VALUES (?)";
        if ($stmt =mysqli_prepare ($link, $sql)) {
            mysqli_stmt_bind_param($stmt, "s", $param_card);
           
            $param_card =$card;
           

            if ($stmt -> execute()) {
                $jsonReturn = array(
                    'status' => "OK"
                );
            }
            else {
                $jsonReturn = array(
                    'status' => "NOK"
                );
            }
        }

       $stmt -> close();
        echo json_encode($jsonReturn);



    }

?>