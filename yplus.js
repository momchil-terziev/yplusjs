function setup() {
  createCanvas(400, 400);
  title = createElement('h1','Near-wall grid calculator');
  title.position(0,0)
  ypos = 180;
  yd = 30;
  i = 50;
  
  Sp = createElement('h4','Speed (m/s)')
  Sp.position(0,60)
  
  shipSpeed = createInput('1');
  shipSpeed.position(ypos, i+yd);
  shipSpeed.size(100);
  
  L = createElement('h4','Length (m)');
  L.position(0,90)

  shipLength = createInput('1');
  shipLength.position(ypos,i+yd*2)
  shipLength.size(100);
  
  dens = createElement('h4','Density (kg/m^3)');
  dens.position(0,120);
  
  densityValue = createInput('997.561');
  densityValue.position(ypos,i+yd*3)
  densityValue.size(100);
  
  visc = createElement('h4','Dynamic viscosity (Pa-s)')
  visc.position(0,150);
  
  viscosity = createInput('8.8875e-4');
  viscosity.position(ypos,i+yd*4);
  viscosity.size(100);
  
  targetY = createElement('h4','Target y+');
  targetY.position(0, 180)
  
  yp = createInput('1');
  yp.position(ypos,i+yd*5)
  yp.size(100);
  
  S = createElement('h4','Stretch function');
  S.position(0,210)
  
  stretch = createInput('1.3');
  stretch.position(ypos,i+yd*6);
  stretch.size(100)
  
  sel = createSelect();
  sel.position(0, 260);
  sel.option('% of boundary layer');
  sel.option('% of length');
  sel.option('Distance (m)')
  
  d = createInput('20')
  d.position(ypos,i+yd*7)
  d.size(100)
  
  
  button = createButton('Calculate number of layers');
  button.position(120,i+yd*8);
  button.mousePressed(calc)
  
  line(0, 280, 280, 280)
 Reynolds = createElement('h4','Reynolds number: ')
  Reynolds.position(0,300)
    resolvedDistance = createElement('h4','Resolved distance (m): ');
  resolvedDistance.position(0,320)
    ddy = createElement('h4','dy (m):     ');
  ddy.position(0,340)
  n = createElement('h4','Number of layers:  ')
  n.position(0,360)
  
}


function calc() {
  
  const speed = shipSpeed.value();
  const length = shipLength.value();
  const density = densityValue.value();
  const miu = viscosity.value();
  const yplus = yp.value();
  const S = stretch.value();
  
  Reynolds = createElement('h4','Reynolds number: ')
  Reynolds.position(0,300)
  Reynolds.html('Reynolds number: ' + speed*length*density/miu)
  Re = speed*length*density/miu;
  const deltatype = sel.value();
  
  if (deltatype == '% of boundary layer') {
  deltap = d.value()/100;
    const deltafull = 0.382*length/pow(Re,1/5);
    delta = 0.382*length/pow(Re,1/5)*deltap;
  } else if (deltatype =='% of length') {
    deltap = d.value();
    const deltafull = 0.382*length/pow(Re,1/5);
    delta = length*deltap/100;
  } else if (deltatype == 'Distance (m)') {
    const deltafull = 0.382*length/pow(Re,1/5);
    delta = d.value();
  }
  
 
  resolvedDistance = createElement('h4','Resolved distance (m): ' + delta);
  resolvedDistance.position(0,320)

  Cf = 0.075/pow(Math.log10(Re)-2,2);
  t_w = Cf*density*pow(speed,2)/2;
  const vi = miu/density;
  dy = yplus*vi/sqrt(t_w/density);
  
  ddy = createElement('h4','dy (m):     ' + yplus*vi/sqrt(t_w/density));
  ddy.position(0,340);
  n = createElement('h4','Number of layers:  ')
  n.position(0,360);
  
  ddy = createElement('h4','dy (m):     ' + yplus*vi/sqrt(t_w/density));
  ddy.position(0,340)
  n = createElement('h4','Number of layers:  ')
  n.position(0,360)
  n.html('Number of layers:' + log(-delta*(1-S)/(2*dy)+1)/log(S))
  console.log(Cf)
}

function draw() {
  background('none');
}
