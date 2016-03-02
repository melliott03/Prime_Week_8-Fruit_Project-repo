// Sets the inital variables
var applePrice=200;
var ojPrice=200;
var banPrice=300;
var pearPrice=600;
var bankMoney = 100;
var averagePrice = 0;



// Changes the prices of the fruits every 15 seconds
// var timer = setInterval(fruitPriceChange(), 15000);

// // Sets our empty arrays
  var appleArray = [];
  var ojArray = [];
  var banArray = [];
  var pearArray = [];

$(document).ready(function(){
  // Activating when the user clicks a button
  $(".apple-button").on("click", apple);
  // $(".banana-button").on("click", banana);
  // $(".orange-button").on("click", orange);
  // $(".pear-button").on("click", pear);
  priceToDom();
  setInterval(fruitPriceChange, 1500);

});

// initialPrice();

// Sets the initial price of the fruits
// function initialPrice(){
//   applePrice = randomNumber(0.50, 9.99);
//   ojPrice = randomNumber(0.50, 9.99);
//   banPrice = randomNumber(0.50, 9.99);
//   pearPrice = randomNumber(0.50, 9.99);

  // priceToDom();
  // setInterval(fruitPriceChange(), 15000);

// }

// Changes the prices of the fruits
function fruitPriceChange(){

  // // Sets the variables to the changed price

  var applePriceCh = randomNumber(-50, 50);
  var ojPriceCh = randomNumber(-50, 50);
  var banPriceCh = randomNumber(-50, 50);
  var pearPriceCh = randomNumber(-50, 50);


  // Calculates the price change

  applePrice += applePriceCh;
  ojPrice += ojPriceCh;
  banPrice += banPriceCh;
  pearPrice += pearPriceCh;


  applePrice = Math.min(Math.max((applePrice),50),999);
  ojPrice = Math.min(Math.max((ojPrice),50),999);
  banPrice = Math.min(Math.max((banPrice),50),999);
  pearPrice = Math.min(Math.max((pearPrice),50),999);


  priceToDom();

}
//
// // Runs our entire fruit market
function runMarket(fruitName, fruitArray, fruitPrice){
  // Values dumped into array
  pushMoney(fruitArray, fruitPrice);
  // changes the average price
  changeAvgPrice(fruitName, fruitArray);
  // Calculates the money the user has left
  moneyCalc(fruitArray);
  // Adds fruit to the inventory

}
//
// // Pushes the money values into the array(s)
function pushMoney(fruitArray, fruitPrice){
  fruitArray.push(fruitPrice);
  return fruitArray;
}
//
// Change the average price
function changeAvgPrice(fruitName, fruitArray){
  for (var i = 0; i < fruitArray.length; i++){
    averagePrice += fruitArray[i];

  }
  averagePrice /= fruitArray.length;
  $('.' + fruitName + '-avg-price').text("$" + averagePrice.toFixed(2));
  return averagePrice;

}
// Calculates the money the user has left
function moneyCalc(fruitArray){
  // if (bankMoney < )
  bankMoney -= (fruitArray[fruitArray.length - 1]);
  $(".total-money").text("Total Money: $" + bankMoney.toFixed(2));
  return bankMoney;
}

// Counts the fruit collected and displays it in the DOM
function countFruit(fruitArray, fruitName){
  var fruitAmount = fruitArray.length;
  $('.' + fruitName + '-number').text(fruitAmount);
}

// Adds the updated prices to the DOM
function priceToDom(){
  $('.apple-price').text('$' + applePrice/100);
  $('.orange-price').text('$' + ojPrice/100);
  $('.banana-price').text('$' + banPrice/100);
  $('.pear-price').text('$' + pearPrice/100);
}
//
function apple(){
  runMarket("apple", appleArray, (applePrice/100));
}
//

//
// function banana(){
//   runMarket(ban, banArray, banPrice);
// }
//
// function orange(){
//   runMarket(orange, ojArray, ojPrice);
// }
//
// function pear(){
//   runMarket(pear, pearArray, pearPrice);
// }
//

//
// Random number generator
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
