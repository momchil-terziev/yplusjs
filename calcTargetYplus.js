function calcTargetYplus() {
  const speed = shipSpeed.value();
  const length = shipLength.value();
  const density = densityValue.value();
  const miu = viscosity.value();
  const yplus = yp.value();
  const S = stretch.value();
 
  yplusDropDownMenuChanged();
//  Reynolds = createElement("h4", "Reynolds number: ");
//  Reynolds.position(0, 300);
  Reynolds.html("Reynolds number: " + (speed * length * density) / miu);
  Re = (speed * length * density) / miu;

  delta = discretisedDistance();
  resolvedDistance.html("Resolved distance (m): " + delta);
  resolvedDistance.position(0, 320);

  Cf = 0.075 / pow(Math.log10(Re) - 2, 2);
  t_w = (Cf * density * pow(speed, 2)) / 2;
  const vi = miu / density;
  dy = (yplus * vi) / sqrt(t_w / density);

  ddy.html(ddyLabel + (yplus * vi) / sqrt(t_w / density));
  //n = createElement('h4','Number of layers:  ')
  //n.position(0,360)
  n.html(NumberOfLayersLabel + log((-delta * (1 - S)) / (2 * dy) + 1) / log(S));
  nLayers = log((-delta * (1 - S)) / (2 * dy) + 1) / log(S);
  return nLayers, Cf, t_w, density
}
