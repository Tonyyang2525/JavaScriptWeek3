//create a function
function exerciseForToday() {
  //creae variable called todaysExcercise
  let exerciseForToday = "";

  //Return function or known as a return statement will return a value
  //to the clling function or script when it finishes a task
  return function (exerciseType) {
    if (exerciseType) {
      exerciseForToday = exerciseType;
      console.log(`Today's exercise: ${exerciseForToday}`);
    }
  };
}

//rename the function "exericeForToday" to a variable
//This allows for us to easily log the function with the
//string inside the parameters
const exercise = exerciseForToday();

// Output: Today's exercise: Running
console.log(exercise("Running"));
// Output: Today's exercise: Swimming
console.log(exercise("Swimming"));
// Output: Today's exercise: Dancing
console.log(exercise("Dancing"));
// Output: Today's exercise: Fencing
console.log(exercise("Fencing"));
