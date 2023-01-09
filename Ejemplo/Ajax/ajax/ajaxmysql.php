<?php
require "conexion.php";
$resultado=mysqli_query($conexion,"select * from users");

$usuariosbd="";
$usuariosbd .= "<table>";
$usuariosbd .="<tr>";
$usuariosbd .= "<th>Numusuario</th><th>Usuario</th><th>email</th>";
$usuariosbd .="</tr>";

while ($fila=mysqli_fetch_assoc($resultado)){
    $usuariosbd .= "<tr>";
    $usuariosbd .= "<th>".$fila['numusuario']."</th><th>".$fila['usuario']."</th><th>".$fila['email']."</th>";
    $usuariosbd .= "</tr>";
}

$usuariosbd .= "</table>";
mysqli_close($conexion);
echo $usuariosbd;
?>