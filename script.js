var age = parseInt(prompt("How old are you?"));

var km = parseFloat(prompt("How long would you travel for?"));

var price = km * 0.21;

if (age < 18) {
   price *= (1 -  20 / 100);
} else if (age > 65) {
   price *= (1 -  40 / 100);
}

document.getElementById("km").innerHTML = km;
document.getElementById("age").innerHTML = age;
document.getElementById("price").innerHTML = price;
