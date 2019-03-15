//querySelectors below
const initialForm = document.querySelector('.initialform');
const name = document.querySelector('.name');
let budget = document.querySelector('.budget');
const addButton = document.querySelector('.add');

let itemClothing = document.querySelector('.item-clothing');
let itemBills = document.querySelector('.item-bills');
let itemEntertainment = document.querySelector('.item-entertainment');
let itemFood = document.querySelector('item-food');

let costClothing = document.querySelector('cost-food');
let costBills = document.querySelector('.cost-bills');
let costFood = document.querySelector('.cost-food');
let costEntertainment = document.querySelector('.cost-entertainment');

let enterClothing = document.querySelector('enter-food');
let enterBills = document.querySelector('.enter-bills');
let enterFood = document.querySelector('.enter-food');
let enterEntertainment = document.querySelector('.enter-entertainment');

//username part
const userName = name.value;
const userName = document.createElement('p');
userName.innerText = `Hello, ${name}`;

//BUDGETS 
let foodBudget = 0;
let billsBudget = 0;
let entertainmentBudget = 0;
let clothingBudget = 0;

//FUNCTIONS - general budget functions that calculate the budget
const updateGeneralBudget = (costClothing, costBills, costFood, costEntertainment) => {
    let budgetResult = budget - costClothing - costBills - costFood - costEntertainment;
    return budgetResult;
}

//FUNCTIONS - each individual budget is calculated separately below
const updateFoodBudget = (costFood) => {
    foodBudget + costFood.value;
}


//EVENT LISTENERS - buttons used to change the budget totals
addButton.addEventListener('click', () => {
    updateBudget(costClothing.value, costBills.value, costFood.value, costEntertainment.value);

});



