<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'grußkarten');
 
/* Attempt to connect to MySQL database */
    $link=mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
     

if ($link ==false) {
    die ("could not connect" . mysqli_connect_error());
}
?>