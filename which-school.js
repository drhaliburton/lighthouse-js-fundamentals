var schools = ["Elementary School", "Secondary School", "Lighthouse Labs"];

function whichSchool(age) {
  if (age < 13) {
    return "You should go to " + schools[0];
  } else if (age >= 13 && age <= 18) {
    return "You should to go " + schools[1];
} else {
      return "You should go to " + schools[2];
    }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
