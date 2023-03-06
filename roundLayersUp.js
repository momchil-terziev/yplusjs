function roundLayersUp() {
    const speed = shipSpeed.value();
  const length = shipLength.value();
  const density = densityValue.value();
  const miu = viscosity.value();
  const S = stretch.value();
  calculate()
  n1 = ceil(nLayers)
  
  delta = discretisedDistance();
 // dy = (((1 - S) / pow((1 - S), n.value)) * delta) / 2;
  dy = (1-S)/(1-pow(S,n1))*delta/2;
  Cf = 0.075 / pow(Math.log10(Re) - 2, 2);
  t_w = (Cf * density * pow(speed, 2)) / 2;
  yplus = (sqrt(t_w / density) * dy) / (miu/density);
  ddyLabel = "dy (m): ";
n.html(NumberOfLayersLabel + n1)  
  ddy.html(ddyLabel + dy)
  yp.value(yplus) 
  
  const ypluschoice= yDropdown.value();
  if (ypluschoice == "First layer thickness (m)") {
    yDropdown.value('Target y+');
    
  }
}
