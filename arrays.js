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
}
