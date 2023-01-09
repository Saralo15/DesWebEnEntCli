<?php
require "conexion2.php";


$dni=$_GET['dni'];

$nombre=$_GET['nombre'];
$apellidos=$_GET['apellidos'];
$domicilio=$_GET['domicilio'];
$email=$_GET['email'];
$telefono=$_GET['telefono'];

$resultado=mysqli_query($conexion,"select * from usuarios where dni='$dni'");
$sql='';
if (mysqli_num_rows($resultado)>0){
    $fila=mysqli_fetch_row($resultado);
    $sql.="UPDATE USUARIOS SET ";
    $sql.="nombre='$nombre', ";
    $sql.="apellidos='$apellidos', ";
    $sql.="domicilio='$domicilio', ";
    $sql.="telefono='$telefono', ";
    $sql.="email='$email' ";
    $sql.="where dni='$dni'";
    }else{
        $sql.="INSERT INTO USUARIOS(dni,nombre,apellidos,domicilio,telefono,email) VALUES (";
        $sql.="'$dni', ";
        $sql.="'$nombre', ";
        $sql.="'$apellidos', ";
        $sql.="'$domicilio', ";
        $sql.="'$telefono', ";
        $sql.="'$email' ";
        $sql.=")"; 
        }
if (mysqli_query($conexion, $sql)) {
           mysqli_query($conexion,"commit");
      } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
            } 
      
mysqli_close($conexion);
header("Location:ajax_getJSON.html");
?>