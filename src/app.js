// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}


function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

var btnpat= document.querySelector(".btn-patty")
btnpat.onclick = function () {
  state.Patty = !state.Patty;
  
if(state.Patty){
  btnpat.classList.add("active")
}
else{
  btnpat.classList.remove("active")
}

  renderAll();
};
function renderButtons(){
// Trial 2 - Setup event listener for the cheese button
var btnche = document.querySelector(".btn-cheese");
btnche.onclick = function () {
  state.Cheese = !state.Cheese;
  
if(state.Cheese){
  btnche.classList.add("active")
}
else{
  btnche.classList.remove("active")
}

  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
var btntom = document.querySelector(".btn-tomatoes");
btntom.onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  
if(state.Tomatoes){
  btntom.classList.add("active")
}
else{
  btntom.classList.remove("active")
}

  renderAll();
};
// Trial 2 - Setup event listener for the onion button
var btnoni= document.querySelector(".btn-onions");
btnoni.onclick = function () {
  state.Onions = !state.Onions;
  
if(state.Onions){
  btnoni.classList.add("active")
}
else{
  btnoni.classList.remove("active")
}

  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
var btnlet= document.querySelector(".btn-lettuce");
btnlet.onclick = function () {
  state.Lettuce = !state.Lettuce ;
  
if(state.Lettuce){
  btnlet.classList.add("active")
  }
else{
  btnlet.classList.remove("active")
  
}
renderAll();
};} 

//Challenge 1 - Add/Remove the class active to the buttons based on state
//IT WAS EASY TO DO IT INSIDE THE SAME FUNCTION SO I DID IT INSIDE THE PREVIOUS CHALLENGE

//Challenge 2 - Render only the items selected in the ingredients board based on the state
 
  function renderIngredientsBoard(){
    var itm = document.getElementsByClassName("items")
    console.log(itm)
    
    for(let i=0;i<itm.length;i++){
      let arr=itm[i].textContent
      if(state[arr]!=true){
        itm[i].style.display="none"
      }
      else{
        itm[i].style.display="block"
      }
  }
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
 function renderPrice(){
  let total=CalculateTotal();
  let pricce=document.querySelector(".price-details");
  pricce.textContent=`INR ${total}`
 }
 function CalculateTotal(){
  let totaal = wholeWheatBun;
  for (let any in ingredients){
    if(state[any]){
      totaal+=ingredients[any]
    }
  }
  return totaal;
 }