var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://www.google.com');
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhttp.response);
  }
}
xhttp.send(null);
