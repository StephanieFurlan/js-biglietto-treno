function checkAge(age) {
   if (!isNaN(age) && age >= 0 && age <= 120 && age % 1 == 0) {
      return true;
   }
   return false;
}

function checkKm(km) {
   console.log(km);
   if (!isNaN(km) && km >= 0) {
      return true;
   }
   return false;
}

var age = parseFloat(prompt("How old are you?"));
while (!checkAge(age)) {
   age = parseFloat(prompt("AGE = Positive integer less or equal than 120! Try again... How old are you?"));
}



var km = parseFloat(prompt("How long would you travel for?"));
while (!checkKm(km)) {
   km = parseFloat(prompt("The value must be a positive number! Try again...How long would you travel for?"));
}

var price = km * 0.21;

if (age < 18) {
   price *= (1 -  20 / 100);
} else if (age > 65) {
   price *= (1 -  40 / 100);
}

document.getElementById("age").innerHTML = age;
document.getElementById("km").innerHTML = km;

document.getElementById("price").innerHTML = price.toFixed(2);
