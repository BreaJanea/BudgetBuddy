"use strict"; {

    //querySelectors below
    const name = document.querySelector('.name');
    let budget = document.querySelector('.budget');
    const addButton = document.querySelector('.add');
    let showBudgetTotal = document.querySelector('.totalBudget');

    let itemClothing = document.querySelector('.item-clothing');
    let itemFood = document.querySelector('item-food');
    let itemEntertainment = document.querySelector('.item-entertainment');
    let itemBills = document.querySelector('.item-bills');
    
    let costClothing = document.querySelector('.cost-clothing');
    let costFood = document.querySelector('.cost-food');
    let costEntertainment = document.querySelector('.cost-entertainment');
    let costBills = document.querySelector('.cost-bills');
    
    const enterClothing = document.querySelector('.enter-clothing');
    const enterFood = document.querySelector('.enter-food');
    const enterEntertainment = document.querySelector('.enter-entertainment');
    const enterBills = document.querySelector('.enter-bills');
  
    let clothingSpend = document.querySelector('.clothing-spend');
    let foodSpend = document.querySelector('.food-spend');
    let entertainmentSpend = document.querySelector('.entertainment-spend');
    let billsSpend = document.querySelector('.bills-spend');

    let clothingColor = document.querySelector('.clothing-color');
    let foodColor = document.querySelector('.food-color');
    let entertainmentColor = document.querySelector('.entertainment-color');
    let billsColor = document.querySelector('.bills-color');

    let enterButtons = document.querySelector('.enter');

    // Selects hidden form
    let hiddenForm = document.querySelector('.entry-form');

    // Selects username input and display span
    const userName = document.querySelector('.name');
    const userNameDisplay = document.querySelector('.username-display');


    //BUDGETS 

    // Initiates running budget total holder
    let runningBudget = 0;

    let clothingBudget = 0;
    let foodBudget = 0;
    let entertainmentBudget = 0;
    let billsBudget = 0;


    //FUNCTIONS - each individual budget is calculated separately below

    // Converts user input for total budget from string to number
    let getBudgetNumber = () => {
        runningBudget = parseInt(budget.value, 10);
    };

    

    // Updates total budget output each time it's called. Removes event listeners in case the budget reaches 0.
    let updateBudget = () => {
      if (runningBudget >= 0) {
        showBudgetTotal.innerText = `$${runningBudget}`;     
      }
      else {
        alert('You already spent all your money');
        enterButtons.classList.add("gray");
        canvas.removeEventListener('click', enterClothing);
        canvas.removeEventListener('click', enterFood);
        canvas.removeEventListener('click', enterEntertainment);
        canvas.removeEventListener('click', enterBills);

        //I couldn't figure out how to make the value go back to nothing here
        itemClothing.value = '';
        costClothing.value = '';
      }
        
    };

    


    //updates expenses
    let updateClothingExpenses = () => {
      clothingSpend.innerText = `$${clothingBudget}`;
      clothingColor.innerText = `$${clothingBudget}`;
    }

    let updateFoodExpenses = () => {
      foodSpend.innerText = `$${foodBudget}`;
      foodColor.innerText = `$${foodBudget}`;
    }

    let updateEntertainmentExpenses = () => {
      entertainmentSpend.innerText = `$${entertainmentBudget}`;
      entertainmentColor.innerText = `$${entertainmentBudget}`;
    }

    let updateBillsExpenses = () => {
      billsSpend.innerText = `$${billsBudget}`;
      billsColor.innerText = `$${billsBudget}`;
    }

    // Class for purchases, initiates empty array
    class purchaseClothing {
        constructor() {
          this.clothes = [];
        } 
        // Pushes new items to array
        addClothingItem() {
          let newClothes = new Clothing(itemClothing.value, costClothing.value);
          this.clothes.push(newClothes); 
        }
        // Subtracts value of each new purchase from budget total
        deductBudgetClothing() {
          let price = parseInt(costClothing.value, 10);
          runningBudget -= price;
          updateBudget();
        }
        runningClothingExpenses() {
          let price = parseInt(costClothing.value, 10);
          clothingBudget += price;
          updateClothingExpenses();
        }
      }

      class purchaseFood {
        constructor() {
          this.food = [];
        } 
        addFoodItem() {
          let newFood = new Food(itemFood.value, costFood.value);
          this.food.push(newFood); 
        }
        deductBudgetFood() {
          let price = parseInt(costFood.value, 10);
          runningBudget -= price;
          updateBudget();
        }
        runningFoodExpenses() {
          let price = parseInt(costFood.value, 10);
          foodBudget += price;
          updateFoodExpenses();
        }
      }

      class purchaseEntertainment {
        constructor() {
          this.entertainment = [];
        } 
        addEntertainmentItem() {
          let newEntertainment = new Entertainment(itemEntertainment.value, costEntertainment.value);
          this.entertainment.push(newEntertainment); 
        }
        deductBudgetEntertainment() {
          let price = parseInt(costEntertainment.value, 10);
          runningBudget -= price;
          updateBudget();
        }
        runningEntertainmentExpenses() {
          let price = parseInt(costEntertainment.value, 10);
          entertainmentBudget += price;
          updateEntertainmentExpenses();
        }
      }

      class purchaseBills {
        constructor() {
          this.bills = [];
        } 
        addBillsItem() {
          let newBills = new Bills(itemBills.value, costBills.value);
          this.bills.push(newBills); 
        }
        deductBudgetBills() {
          let price = parseInt(costBills.value, 10);
          runningBudget -= price;
          updateBudget();
        }
        runningBillsExpenses() {
          let price = parseInt(costBills.value, 10);
          billsBudget += price;
          updateBillsExpenses();
        }
      }

      // Class for purchased items
      class Clothing {
        constructor(item, price) {
          this.item = item;
          this.price = price;
        }
      }
      class Food{
        constructor(item, price) {
          this.item = item;
          this.price = price;
        }
      }
      class Entertainment {
        constructor(item, price) {
          this.item = item;
          this.price = price;
        }
      }
      class Bills {
        constructor(item, price) {
          this.item = item;
          this.price = price;
        }
      }

    // Makes new purchase instances
    let newClothesBudget = new purchaseClothing();
    let newFoodBudget = new purchaseFood();
    let newEntertainmentBudget = new purchaseEntertainment();
    let newBillsBudget = new purchaseBills();


    //EVENTS - buttons used to change the budget totals

    // Takes user input and displays value for budget and username, hides initial form, and scrolls to top of page
    addButton.addEventListener('click', () => {
        getBudgetNumber();
        showBudgetTotal.innerText = `$${runningBudget}`;
        userNameDisplay.innerText = `${userName.value}`;
        hiddenForm.classList.add("hide");
        window.scrollTo(0, 0);
    });

    // Adds new purchases when user hitting enter, deducts price from budget total, clears fields

    
    enterClothing.addEventListener('click', () => {
        newClothesBudget.addClothingItem();
        newClothesBudget.deductBudgetClothing();
        newClothesBudget.runningClothingExpenses();
    
        itemClothing.value = '';
        costClothing.value = '';
      });

      enterFood.addEventListener('click', () => {
        newFoodBudget.addFoodItem();
        newFoodBudget.deductBudgetFood();
        newFoodBudget.runningFoodExpenses();
    
        itemFood.value = '';
        costFood.value = '';
      });

      enterEntertainment.addEventListener('click', () => {
        newEntertainmentBudget.addEntertainmentItem();
        newEntertainmentBudget.deductBudgetEntertainment();
        newEntertainmentBudget.runningEntertainmentExpenses();
    
        itemEntertainment.value = '';
        costEntertainment.value = '';
      });

      enterBills.addEventListener('click', () => {
        newBillsBudget.addBillsItem();
        newBillsBudget.deductBudgetBills();
        newBillsBudget.runningBillsExpenses();
    
        itemBills.value = '';
        costBills.value = '';
      });
    
}


