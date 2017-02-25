function ageCalculator(name, yearOfBirth, currentYear) {
  var age = (currentYear - yearOfBirth);
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Rebecca", 1991, 2017));
