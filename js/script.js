"use strict"; {

    //querySelectors below
    const name = document.querySelector('.name');
    let budget = document.querySelector('.budget');
    const addButton = document.querySelector('.add');
    let showBudgetTotal = document.querySelector('.totalBudget');

    let itemClothing = document.querySelector('.item-clothing');
    let itemBills = document.querySelector('.item-bills');
    let itemEntertainment = document.querySelector('.item-entertainment');
    let itemFood = document.querySelector('item-food');

    let costClothing = document.querySelector('.cost-clothing');
    let costBills = document.querySelector('.cost-bills');
    let costFood = document.querySelector('.cost-food');
    let costEntertainment = document.querySelector('.cost-entertainment');

    const enterClothing = document.querySelector('.enter-clothing');
    const enterBills = document.querySelector('.enter-bills');
    const enterFood = document.querySelector('.enter-food');
    const enterEntertainment = document.querySelector('.enter-entertainment');

    // Selects hidden form
    let hiddenForm = document.querySelector('.entry-form');

    // Selects username input and display span
    const userName = document.querySelector('.name');
    const userNameDisplay = document.querySelector('.username-display');


    //BUDGETS 

    // Initiates running budget total holder
    let runningBudget = 0;

    let foodBudget = 0;
    let billsBudget = 0;
    let entertainmentBudget = 0;
    let clothingBudget = 0;


    //FUNCTIONS - each individual budget is calculated separately below
    // const updateFoodBudget = (costFood) => {
    //     foodBudget + costFood.value;
    // }

    // Converts user input for total budget from string to number
    let getBudgetNumber = () => {
        runningBudget = parseInt(budget.value, 10);
    };

    // Updates total budget output each time it's called
    let updateBudget = () => {
        showBudgetTotal.innerText = `$${runningBudget}`;
    };

    // Class for clothing purchases, initiates empty array
    class purchaseClothing {
        constructor() {
          this.clothes = [];
        } 
        // Pushes new items to clothes array
        addItem() {
          let newClothes = new Clothing(itemClothing.value, costClothing.value);
          this.clothes.push(newClothes); 
        }
        // Subtracts value of each new purchase from budget total
        deductBudget() {
          let price = parseInt(costClothing.value, 10);
          runningBudget -= price;
          updateBudget();
        }
      }
      // Class for clothing items
      class Clothing {
        constructor(item, price) {
          this.item = item;
          this.price = price;
        }
      }

    // Makes new clothing instance
    let newClothesBudget = new purchaseClothing();


    //EVENTS - buttons used to change the budget totals

    // Takes user input and displays value for budget and username, hides initial form, and scrolls to top of page
    addButton.addEventListener('click', () => {
        getBudgetNumber();
        showBudgetTotal.innerText = `$${runningBudget}`;
        userNameDisplay.innerText = `${userName.value}`;
        hiddenForm.classList.add("hide");
        window.scrollTo(0, 0);
    });

    // Adds new clothing purchase when user hits enter, deducts price from budget total, clears fields
    enterClothing.addEventListener('click', () => {
        newClothesBudget.addItem();
        newClothesBudget.deductBudget();
    
        itemClothing.value = '';
        costClothing.value = '';
      });

}


