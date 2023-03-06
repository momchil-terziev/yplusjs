function setup() {
  createCanvas(400, 400);
  title = createElement("h1", "Near-wall grid calculator");
  title.position(0, 0);
  ypos = 180;
  yd = 30;
  i = 50;

  Sp = createElement("h4", "Speed (m/s)");
  Sp.position(0, 60);

  shipSpeed = createInput("1");
  shipSpeed.position(ypos, i + yd);
  shipSpeed.size(100);

  L = createElement("h4", "Length (m)");
  L.position(0, 90);

  shipLength = createInput("1");
  shipLength.position(ypos, i + yd * 2);
  shipLength.size(100);

  dens = createElement("h4", "Density (kg/m^3)");
  dens.position(0, 120);

  densityValue = createInput("997.561");
  densityValue.position(ypos, i + yd * 3);
  densityValue.size(100);

  visc = createElement("h4", "Dynamic viscosity (Pa-s)");
  visc.position(0, 150);

  viscosity = createInput("8.8875e-4");
  viscosity.position(ypos, i + yd * 4);
  viscosity.size(100);

  targetY = createElement("h4", "Target y+");
  targetY.position(0, 180);
  
  yp = createInput("1");
  yp.position(ypos, i + yd * 5);
  yp.size(100);

  S = createElement("h4", "Stretch function");
  S.position(0, 210);

  stretch = createInput("1.3");
  stretch.position(ypos, i + yd * 6);
  stretch.size(100);

  sel = createSelect();
  sel.position(0, 260);
  sel.option("% of boundary layer");
  sel.option("% of length");
  sel.option("Distance (m)");
  sel.changed(discretisedDistance);

  d = createInput("20");
  d.position(ypos, i + yd * 7);
  d.size(100);

  button = createButton("<b>Calculate</b>");
  button.position(0, i + yd * 8);
  button.mousePressed(calculate);
  button.size(290);

  line(0, 280, 280, 280);
  Reynolds = createElement("h4", "Reynolds number: ");
  Reynolds.position(0, 300);
  resolvedDistance = createElement("h4", "Resolved distance (m): ");
  resolvedDistance.position(0, 320);
  ddy = createElement("h4", "dy (m):     ");
  ddy.position(0, 340);
  n = createElement("h4", "Number of layers:  ");
  n.position(0, 360);

  yDropdown = createSelect();
  yDropdown.position(0, 200);
  yDropdown.option("Target y+");
  yDropdown.option("Number of layers");
  yDropdown.option("First layer thickness (m)");
  yDropdown.changed(yplusDropDownMenuChanged);
  

}

function calculate() {
  const ypluschoice = yDropdown.value();

  if (ypluschoice == "Target y+") {
    calcTargetYplus();
    //
  upb = createButton("↑")
  upb.position(360,380);
  upb.mousePressed(roundLayersUp);
  
  downb = createButton("↓")
  downb.position(380,380)
    downb.mousePressed(roundLayersDown)
    
  roundupdown = createElement("h4","Round:")
  roundupdown.position(300,360) 
    // 
  } else if (ypluschoice == "Number of layers") {
    calculateNumberOfLayers();
  } else if (ypluschoice == "First layer thickness (m)") {
    firstLayerThickness();
  }
  

  
}


function draw() {
  background("none");
}
