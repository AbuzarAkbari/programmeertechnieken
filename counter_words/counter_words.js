function tellLetters(){
  var tekst = document.getElementById('tekst').value;
  var apartLetters = tekst.split("");
  var apartWoorden = tekst.split(" ");
  var letterTeller = apartLetters.length;
  var woordenTeller = apartWoorden.length;
  var langste = 0;
  for (var i = 0; i < apartWoorden.length; i++) {
    if (langste < apartWoorden[i].length) {
      langste = apartWoorden[i].length;
      var word = apartWoorden [i]
    }
  }
  document.getElementById('res1').innerHTML = "aantal letters " + letterTeller;
  document.getElementById('res2').innerHTML = "aantal woorden " + woordenTeller;
  document.getElementById('res3').innerHTML = "aantal woorden " + word;
  document.getElementById('res4').innerHTML = hoofdletter();
  document.getElementById('res5').innerHTML = meestVorkomende();


}
function hoofdletter(){
  var tekst = document.getElementById('tekst').value;
  var apartWoorden = tekst.split(" ");
  var array1 = [];

  for(var i = 0; i < apartWoorden.length; i++){
    array1.push(apartWoorden[i].charAt(0).toUpperCase()+apartWoorden[i].slice(1));
  }
  return array1.join(' ');
  }

  function meestVorkomende(){
    var tekst = document.getElementById('tekst').value;
    var apartWoorden = tekst.split(" ");
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<apartWoorden.length; i++){
            for (var j=i; j<apartWoorden.length; j++){
              if (apartWoorden[i] == apartWoorden[j])
              m++;
              if (mf<m){
                mf=m;
                item = apartWoorden[i];
              }
            }
            m=0;
          }
          return (item+" ( " +mf +" komt het vaakste voor ) ") ;
        }
