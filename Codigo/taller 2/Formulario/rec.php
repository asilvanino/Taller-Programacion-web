  <?php 

  include("Conexion.php");

  $name = $_GET['name'];
  $last = $_GET['last'];
  $mail = $_GET['mail'];
  $typecard = $_GET['typecard'];
  $num = $_GET['num'];
  $cvv2 = $_GET['cvv2'];
  $month = $_GET['month'];
  $year = $_GET['year'];
  $address = $_GET['address'];
  $city = $_GET['city'];
  $state = $_GET['state'];
  $zip = $_GET['zip'];
  $country = $_GET['country'];
  $phone = $_GET['phone'];


  foreach ($_GET as $key => $value) {
    echo $value;
  }

  $sql = "INSERT INTO formu (name, last, mail, typecard, num, cvv2, month, year, address, city, state, zip, country, phone)VALUES ('$name', '$last', '$mail', '$typecard', '$num', '$cvv2', '$month', '$year', '$address', '$city', '$state', '$zip', '$country', '$phone')";

  if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();