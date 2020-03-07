function getJSON() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let op = document.getElementById('op').value;

  let url = "/week09/team/math_service?num1=" + num1
    + "&num2=" + num2
    + "&operation=" + op;

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      obj = JSON.parse(this.responseText);
      document.getElementById('content').innerHTML = "<p>" + obj.result + "</p>";
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}