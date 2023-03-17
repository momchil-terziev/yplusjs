function discretisedDistance() {
let deltatype = sel.value();
  const speed = shipSpeed.value();
  const length = shipLength.value();
  const density = densityValue.value();
  const miu = viscosity.value();
Re = speed*length*density/miu;
  
if (deltatype == '% of boundary layer') {
     deltap = d.value()/100;
     deltafull = 0.382*length/pow(Re,1/5);
     delta = 0.382*length/pow(Re,1/5)*deltap;
  } else if (deltatype =='% of length') {
    deltap = d.value();
     deltafull = 0.382*length/pow(Re,1/5);
     delta = length*deltap/100;
  } else if (deltatype == 'Distance (m)') {
     deltafull = 0.382*length/pow(Re,1/5);
     delta = d.value();
     
  }

  return delta
}
