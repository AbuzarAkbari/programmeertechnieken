function tellLetters(){
  var tekst = document.getElementById('tekst').value;
  var apartLetters = tekst.split("");
  var apartWoorden = tekst.split(" ");
  var letterTeller = apartLetters.length;
  var woordenTeller = apartWoorden.length;

  document.getElementById('res1').innerHTML = "aantal letters " + letterTeller;
  document.getElementById('res2').innerHTML = "aantal woorden " + woordenTeller;
}
