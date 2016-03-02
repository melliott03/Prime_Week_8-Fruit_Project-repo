// Sets the inital variables
var applePrice;
var ojPrice;
var banPrice;
var grapePrice;
var pearPrice;
var watermelonPrice;
var bankMoney = 100;
var averagePrice = 0;

// Sets the variables to the changed price
var applePriceCh = initialPriceChange;
var ojPriceCh = initialPriceChange;
var banPriceCh = initialPriceChange;
var grapePriceCh = initialPriceChange;
var pearPriceCh = initialPriceChange;
var watermelonPriceCh = initialPriceChange;

// Changes the prices of the fruits every 15 seconds
// var timer = setInterval(fruitPriceChange(), 15000);

// Sets our empty arrays
var appleArray = [];
var ojArray = [];
var banArray = [];
var grapeArray = [];
var pearArray = [];
var watermelonArray = [];

$(document).ready(function(){
  // Activating when the user clicks a button
  $(".apple-button").on("click", apple);
  // $(".grape-button").on("click", grape);
  // $(".banana-button").on("click", banana);
  // $(".orange-button").on("click", orange);
  // $(".pear-button").on("click", pear);
  // $(".watermelon-button").on("click", watermelon);

});

initialPrice();

// Sets the initial price of the fruits
function initialPrice(){

  var initialFruitCalc = randomNumber(50, 999) / 100;
  // var finishedFruitCalc = initialFruitCalc / 100;


  applePrice = initialFruitCalc;
  ojPrice = initialFruitCalc;
  banPrice = initialFruitCalc;
  grapePrice = initialFruitCalc;
  pearPrice = initialFruitCalc;
  watermelonPrice = initialFruitCalc;
  console.log(applePrice);
  priceToDom();
  setInterval(fruitPriceChange(), 15000);

}

function initialPriceChange(){

  var fruitCalc = randomNumber(-50, 50) / 100;

  applePriceCh = setInterval(fruitCalc, 15000);
  ojPriceCh = setInterval(fruitCalc, 15000);
  banPriceCh = setInterval(fruitCalc, 15000);
  grapePriceCh = setInterval(fruitCalc, 15000);
  pearPriceCh = setInterval(fruitCalc, 15000);
  watermelonPriceCh = setInterval(fruitCalc, 15000);

  return;
}

// Changes the prices of the fruits
function fruitPriceChange(){

  // Calculates the price change
  applePrice += applePriceCh;
  ojPrice += ojPriceCh;
  banPrice += banPriceCh;
  grapePrice += grapePriceCh;
  pearPrice += pearPriceCh;
  watermelonPrice += watermelonPriceCh;
  console.log(applePrice);
  priceToDom();
  return;
}

// Runs our entire fruit market
function runMarket(fruitName, fruitArray, fruitPrice){
  // Values dumped into array
  pushMoney(fruitArray, fruitPrice);
  // changes the average price
  changeAvgPrice(fruitName, fruitArray);
  // Calculates the money the user has left
  moneyCalc(fruitArray);
  // Adds fruit to the inventory

}

// Pushes the money values into the array(s)
function pushMoney(fruitArray, fruitPrice){
  fruitArray.push(fruitPrice);
  return fruitArray;
}

// Change the average price
function changeAvgPrice(fruitName, fruitArray){
  for (var i = 0; i < fruitArray.length; i++){
    averagePrice += (fruitArray[i]).toFixed(2);
  }
  averagePrice /= fruitArray.length;
  $("." + fruitName + "-avg-price").text("$" + averagePrice);
  return averagePrice;

}

// Calculates the money the user has left
function moneyCalc(fruitArray){
  // if (bankMoney < )
  bankMoney -= (fruitArray[fruitArray.length - 1]);
  $(".total-money").text("Total Money: $" + bankMoney);
  return bankMoney;
}

// Counts the fruit collected and displays it in the DOM
function countFruit(fruitArray, fruitName){
  var fruitAmount = fruitArray.length;
  $('.' + fruitName + '-number').text(fruitAmount);
  return;
}

// Adds the updated prices to the DOM
function priceToDom(){
  console.log(applePrice);
  $('.apple-price').text('$ Fuck This');
  $('.orange-price').text('$' + ojPrice);
  $('.banana-price').text('$' + banPrice);
  $('.grape-price').text('$' + grapePrice);
  $('.pear-price').text('$' + pearPrice);
  $('.watermelon-price').text('$' + watermelonPrice);
}

function apple(){
  runMarket("apple", appleArray, applePrice);
}

function grape(){
  runMarket("grape", grapeArray, grapePrice);
}

function banana(){
  runMarket("ban", banArray, banPrice);
}

function orange(){
  runMarket("orange", ojArray, ojPrice);
}

function pear(){
  runMarket("pear", pearArray, pearPrice);
}

function watermelon(){
  runMarket("watermelon", watermelonArray, watermelonPrice);
}

// Random number generator
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
