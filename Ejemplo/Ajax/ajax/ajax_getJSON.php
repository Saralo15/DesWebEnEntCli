<?php
require "conexion2.php";

echo $_GET['dni'];

// creamos un objeto de tipo json
$objetojson = new stdClass();
//creamos clase Usuario para luego crear un objeto json de esta clase
class Usuario {
    public $dni = "";
    public $nombre = "";
    public $apellidos = "";
    public $domicilio = "";
    public $telefono = "";
    public $email = "";
	}

$dni=$_GET['dni'];
$resultado=mysqli_query($conexion,"select * from usuarios where dni='$dni'");
$usuario = new Usuario;
if (mysqli_num_rows($resultado)>0){
    $fila=mysqli_fetch_row($resultado);
    $usuario->dni=$fila[0];
    $usuario->nombre=$fila[1];
    $usuario->apellidos=$fila[2];
    $usuario->domicilio=$fila[3];
    $usuario->telefono=$fila[4];
    $usuario->email=$fila[5];
    $usuario->alta=false;
    }else{
        $usuario->dni='';
        $usuario->nombre='';
        $usuario->apellidos='';
        $usuario->domicilio='';
        $usuario->telefono='';
        $usuario->email='';
        $usuario->alta=true;
    }
$json=json_encode($usuario);
echo $json;
mysqli_close($conexion);
?>