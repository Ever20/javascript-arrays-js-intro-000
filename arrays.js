 var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(myArray, element) {
  return [element, ...myArray];
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift(element);
  return myArray;
}

function addElementToEndOfArray(myArray, element) {
  return [...myArray, element];
}

function destructivelyAddElementToEndOfArray(myArray, element) {
  myArray.unshift(element);
  return myArray;
}
