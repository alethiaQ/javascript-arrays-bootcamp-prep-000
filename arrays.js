var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, foo) { 
   chocolateBars =  ["foo",...chocolateBars];
   return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,foo) {
  chocolateBars.unshift("foo");
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, foo) {
  chocolateBars = [...chocolateBars,"foo"];
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index){
  return chocolateBars["index"];
}