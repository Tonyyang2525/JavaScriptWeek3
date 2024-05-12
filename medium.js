//create a function that takes in two parameters of people compared to the amount of pizza slices
function pizzaDivider(howManySlices, howManyPeople) {
  const slicesPerPerson = howManySlices / howManyPeople;

  //.toFixed(2) takes the number and rounds it down to 2 decimal places. this can be changed to any number of places within the parameter of toFixed()
  return `Each person gets ${slicesPerPerson.toFixed(
    2
  )} slices of pizza; from our ${howManySlices} slice pizza`;
}

// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
console.log(pizzaDivider(8, 2));
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(pizzaDivider(8, 3));
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(pizzaDivider(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
console.log(pizzaDivider(10, 3));
console.log(pizzaDivider(10, 25));
