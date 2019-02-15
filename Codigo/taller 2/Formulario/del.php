<?php
  include("Conexion.php");
  $option = $_GET['option'];

  if ($conn) {
    $listar="SELECT * FROM `formu`";
    $traer = $conn->query($listar);
    while ($fila=$traer->fetch_assoc()) {
      // code...
      foreach ($fila as $key => $value) {
        echo $value.' -- ';
      }
      echo "</br>";
    }
  } else {
    echo "No se guardo la informacion";
  }
?>
