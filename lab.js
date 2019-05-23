setInterval(zeitgeber, 5000);

function zeitgeber(){
  var heute = new Date();
  if(<10)
  var uhr = new Array(heute.getDate(), heute.getMonth(), heute.getHours(), heute.getMinutes());						//neues objekt der klasse Date  					//neue variable mit dem datum
  document.getElementById("uhr").value = "Heute ist der "+ uhr[0] + "." + uhr[1]+ " um "+ uhr[2] + ":" + uhr[3] + "Uhr";
}

function keinwiderstand()
{
  var unit = parseFloat(document.freifall.unit.value);		//variablen aus dem dokument lesen					//
  var g = parseFloat(document.freifall.gravfree.value);		//und auf speicher verteilen
  var h = parseFloat(document.freifall.heightfree.value);	//
  var vms;							//
  var vkmh;							//

if(unit == "" || h == ""){alert("Bitte Werte auswählen");}	//alarm, wenn werte nicht definiert

  if(g == "")
  {
    g = 9.81;							//wenn nicht definiert wird standart verwendet
  }

    vms = Math.sqrt(2 * g * h).toFixed(2);			//berechnung der geschwindigkeit
  if(unit == "ms")
  {
    return vms;
  }else if(unit == "kmh")					//bedingung für return in km/h oder m/s
  {
    vkmh = (vms * 3.6).toFixed(2);
    return vkmh;
  }
}

function airfall()
{
  var g = parseFloat(document.luftfall.gravluft.value);		//variablen aus dokument lesen
  var h = parseFloat(document.luftfall.heightluft.value);	//und variablen zuordnen
  var m = parseFloat(document.airval.mass.value);		//dabei in float umwandeln
  var A = parseFloat(document.airval.area.value);		//
  var cw = parseFloat(document.airval.cwvalue.value);		//
  var T = parseFloat(document.airval.temp.value);		//

  if(g == "" || h == "" || m == "" || A == "" || cw == "" || T == "")	//alarm, wenn werte nicht definiert sind
    {
      alert("Bitte wählen sie in allen Feldern Werte aus!");
    }

  var Fb = 0;							//definieren weiterer speicherplätze
  var vms = 0;							//
  var t = 0;							//
  var s = 0;							//
  var a = 0;							//
  var Flw;							//
  var vkmh;							//

  var rho = (0.00459 * T + 1.2967).toFixed(2);			//berechnen der luftdichte in abhängigkeit von der Temperatur
  if(g == "")							//wenn g nicht definiert, dann verwende standart
  {
    g = 9.81;
  }
  var Fm = g * m;						//berechnen der gewichtskraft
  var dt = 0.1;							//festlegen der Genauigkeit, beeinflusst rechenleistung und ergebnis


do{
    console.log("1");						//prüfzahl für manuelle kontrolle der schritte
    Flw = 0.5 * A * cw * rho * Math.pow(vms, 2);		//berechnen der
    Fb = Fm - Flw;						//geschwindigkeit
    a = Fb / m;
    vms = vms + a * dt;						//für jedes
    s = s + v * dt;						//einzelnes
    t += dt;							//Intervall
  }while(s < h)							//nachgestellte Bedingung

  if(unit == "ms")						//auswahl der rückgabe
  {
    return v;
  }else if(unit == "kmh")
  {
    vkmh = vms * 3.6;
    return vkmh;
  }
}

function del()
{

}
