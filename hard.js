//This is the
function patient(name, ssn) {
  const PII = {
    name: name,
    SSN: ssn,
  };
  return {
    //This is a private function below that can only be accessed if
    //being from the patient function first then the private function of getName or getSSN
    getName: function () {
      return PII.name;
    },
    getSSN: function () {
      return PII.SSN;
    },
  };
}
const patient2 = patient("Tony", "123-23-1234");
const patient3 = patient("John", "111-11-1111");

// Output: Undefined
console.log(patient2.names);
// Output: Undefined
console.log(patient2.ssn);
// Output: John
console.log(patient2.getName());
// Output: 123-45-6789
console.log(patient2.getSSN());
console.log(patient3.ssn);
console.log(patient3.getName());
console.log(patient3.getSSN());
