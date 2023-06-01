<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta name="author" content="S.Dorn">
        <title>test lesen</title>
    </head>
     <style>
        .svgc {
            float: left;
            width: 400px;
           /* height: 400px; */
          
            
        }

        svg {

        margin: 10px;
        float: left;
        background-size: cover;



        }
     </style>
    <body>
        <header>auslesen</header>

        <main>
        <?php 
            require_once "config.php";

            $sql ="SELECT * From grusskarten";

            if ($result =mysqli_query($link, $sql)) {
                //echo '<table border="1">';
                while($row =mysqli_fetch_array($result)) {

                    /*
                    echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['card'] . "</td>";
                    echo "<td>" . $row['back'] . "</td>";
                    */
                    //echo $row['card'];
                    $t= $row['card'];
                    

                    echo "
                        <div class=svgc> 
                           $t
                        </div> 
                    " ;
                    //$row['card'];
                   
                    
                        
                    
                        
                    

                 
                   // echo $_GET["js_variable"];

                   //$obj = json_encode($row['card']);
                  // echo $obj;

                }
                //echo "</table>";
                mysqli_free_result($result);
            }

        ?>
        </main> 

        <script>
           
            
        </script>

    </body>


</html>