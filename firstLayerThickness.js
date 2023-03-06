function firstLayerThickness() {
  const speed = shipSpeed.value();
  const length = shipLength.value();
  const density = densityValue.value();
  const miu = viscosity.value();
  const firstLayer = yp.value()/2;
  const S = stretch.value();

  delta = discretisedDistance();
  resolvedDistance.html("Resolved distance (m): " + delta);
  resolvedDistance.position(0, 320);

  Cf = 0.075 / pow(Math.log10(Re) - 2, 2);
  t_w = (Cf * density * pow(speed, 2)) / 2;
  const vi = miu / density;
  
  nLayers = log((-delta * (1 - S)) / (2 * firstLayer) + 1) / log(S);
  achievedYplus = (sqrt(t_w / density) * firstLayer) / vi;
  
   ddy.html(ddyLabel + achievedYplus);
  //n = createElement('h4','Number of layers:  ')
  //n.position(0,360)
  n.html(NumberOfLayersLabel + nLayers);
  return nLayers, Cf, t_w, achievedYplus
  
}
