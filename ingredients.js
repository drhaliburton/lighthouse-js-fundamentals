var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var count = 0
while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}

// Write a for loop that prints out the contents of ingredients:

for (var count = 0; count < (ingredients.length - 1); count++) {
  console.log(ingredients[count]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var count = (ingredients.length - 1); count >= 0; count--) {
  console.log(ingredients[count]);
}
