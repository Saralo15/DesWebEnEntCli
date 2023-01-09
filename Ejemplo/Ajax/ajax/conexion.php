<?php
$mysql_host="localhost";
$mysql_usuario="root";
$mysql_password="cfgsasir2";
$mysql_bd="usuarios";

$conexion=mysqli_connect($mysql_host,$mysql_usuario,$mysql_password,$mysql_bd);

if (mysqli_connect_errno()){
    echo "Error de conexión ". $mysqli_connect_error();
    }
else{
    echo "conectado";
    }
?>