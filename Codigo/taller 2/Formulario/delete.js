function send(){
  var xhttp = new XMLHttpRequest();
  var option = document.getElementById("option").value;

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("con").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET",'del.php?option='+option,true);
  xhttp.send();

}
