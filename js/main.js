//CALCOLO TRAIN TICKET


//Get data from user Km percorrenza
var percorrenzaKm = parseInt ( prompt ('Quanti chilometri devi percorrere?') );
//Get data from user Età
var eta = parseInt ( prompt ('Quanti anni hai?') );

//Price for Km

var priceKm = 0.21


//Calc Ticket Price and Discount

var grossPrice = percorrenzaKm * priceKm;
var discount20 = (priceKm / 100) * 20;
var discount40 = (priceKm / 100) * 40;
var totalPrice = 0;

//Calc Ticket Price and Discount for underage

if ( eta < 18 ) {
  var totalPrice = grossPrice - discount20;
  document.getElementById('totalPrice').innerHTML = totalPrice.toFixed (2);
  document.getElementById('percorrenzaKm').innerHTML = percorrenzaKm;
  document.getElementById('discount').innerHTML = ('Hai usufruito di uno sconto del <strong>20%</strong> per passeggeri di età inferione ai 18 anni');
}

//Calc Ticket Price and Discount for over 65

else if (eta >= 65 ) {
  var totalPrice = grossPrice - discount40;
  document.getElementById('totalPrice').innerHTML = totalPrice.toFixed (2);
  document.getElementById('percorrenzaKm').innerHTML = percorrenzaKm;
  document.getElementById('discount').innerHTML = ('Hai usufruito di uno sconto del <strong>40%</strong> per i passeggeri over 65');
}

else {
  document.getElementById('totalPrice').innerHTML = grossPrice.toFixed (2);
  document.getElementById('percorrenzaKm').innerHTML = percorrenzaKm;
  document.getElementById('discount').innerHTML = ('Non usufruisci di nessuno sconto. Tiè!');
}
