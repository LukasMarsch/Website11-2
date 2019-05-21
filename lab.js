function freifall()
{
  var unit = document.freifall.unit.value;
  var vms;
  var vkmh;
  var g = parseFloat(document.getElementById("gravfree").value);
  var h = parseFloat(document.getElementById("heighfree").value);

if(unit == "" || h == ""){alert("Bitte Werte auswählen");}

  if(g == "")
  {
    g = 9.81;
  }

  if(unit == "ms")
  {
    vms = Math.sqrt(2 * g * h).toFixed(2);
  }else if(unit == "kmh")
  {
    vkmh = (vms * 3.6).toFixed(2);
  }
}
