function calculateNumberOfLayers() {
  const speed = shipSpeed.value();
  const length = shipLength.value();
  const density = densityValue.value();
  const miu = viscosity.value();
  const nlayers = yp.value();
  const S = stretch.value();

  delta = discretisedDistance();
 // dy = (((1 - S) / pow((1 - S), n.value)) * delta) / 2;
  dy = (1-S)/(1-pow(S,nlayers))*delta/2;
  Cf = 0.075 / pow(Math.log10(Re) - 2, 2);
  t_w = (Cf * density * pow(speed, 2)) / 2;
  yplus = (sqrt(t_w / density) * dy) / (miu/density);
  // 12
    ddy.html(ddyLabel + 2*(yplus * miu/density) / sqrt(t_w / density));
  //n = createElement('h4','Number of layers:  ')
  //n.position(0,360)
  n.html(NumberOfLayersLabel + yplus);
    resolvedDistance.html("Resolved distance (m): " + delta);
  resolvedDistance.position(0, 320);
  Reynolds.html("Reynolds number: " + (speed * length * density) / miu);

}
