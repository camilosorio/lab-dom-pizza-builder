// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)s
var state = {
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false,
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($pep) {
    if (state.mushrooms) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function ($pep) {
    if (state.greenPeppers) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}


// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function ($pep) {
    if (state.whiteSauce) {
      $pep.classList.add("sauce-white");
    }
    else {
      $pep.classList.remove("sauce-white");
    }
  })
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function ($pep) {
    if (state.glutenFreeCrust) {
      $pep.classList.add("crust-gluten-free");
    }
    else {
      $pep.classList.remove("crust-gluten-free");
    }
  })
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  state.pepperonni ? document.querySelector(".btn-pepperonni").classList.add("active") : document.querySelector(".btn-pepperonni").classList.remove("active");

  state.mushrooms ? document.querySelector(".btn-mushrooms").classList.add("active") : document.querySelector(".btn-mushrooms").classList.remove("active");

  state.greenPeppers ? document.querySelector(".btn-green-peppers").classList.add("active") : document.querySelector(".btn-green-peppers").classList.remove("active");

  state.whiteSauce ? document.querySelector(".btn-sauce").classList.add("active") : document.querySelector(".btn-sauce").classList.remove("active");

  state.glutenFreeCrust ? document.querySelector(".btn-crust").classList.add("active") : document.querySelector(".btn-crust").classList.remove("active");
}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const pepPrice = document.querySelectorAll("aside ul li")[0];
  const mushPrice = document.querySelectorAll("aside ul li")[1];
  const greenPeppersPrice = document.querySelectorAll("aside ul li")[2];
  const whiteSaucePrice = document.querySelectorAll("aside ul li")[3];
  const glutenFreeCrustPrice = document.querySelectorAll("aside ul li")[4];

  state.pepperonni ? pepPrice.style.display = "block" : pepPrice.style.display = "none";

  state.mushrooms ? mushPrice.style.display = "block" : mushPrice.style.display = "none";

  state.greenPeppers ? greenPeppersPrice.style.display = "block" : greenPeppersPrice.style.display = "none";

  state.whiteSauce ? whiteSaucePrice.style.display = "block" : whiteSaucePrice.style.display = "none";

  state.glutenFreeCrust ? glutenFreeCrustPrice.style.display = "block" : glutenFreeCrustPrice.style.display = "none";

  let result = basePrice + state.pepperonni + state.mushrooms + state.greenPeppers + (state.whiteSauce * 3) + (state.glutenFreeCrust * 5);

  document.querySelector("strong").innerHTML = `$${result}`;
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}