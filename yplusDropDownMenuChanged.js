function yplusDropDownMenuChanged() {
 
  const ypluschoice= yDropdown.value();
  
  if (ypluschoice == 'Target y+') {
    NumberOfLayersLabel = 'Number of layers: ';
    ddyLabel = 'dy (m): ';
    ddy.html(ddyLabel)
    n.html(NumberOfLayersLabel)
  } else if (ypluschoice == 'Number of layers') {
    NumberOfLayersLabel = 'Achieved y+: ';
    ddyLabel = 'dy (m): ';
    n.html(NumberOfLayersLabel)
    ddy.html(ddyLabel)
  } else if (ypluschoice == 'First layer thickness (m)') {
    NumberOfLayersLabel = 'Number of layers: ';
    ddyLabel = 'Achieved y+: ';
    n.html(NumberOfLayersLabel)
    ddy.html(ddyLabel)
}
  
}