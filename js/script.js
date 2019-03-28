"use strict"; {

  //querySelectors below
  const name = document.querySelector('.name');
  let budget = document.querySelector('.budget');
  let showBudgetTotal = document.querySelector('.totalBudget');
  let showBudgetTotal2 = document.querySelector('.totalBudget2');

  let itemClothing = document.querySelector('.item-clothing');
  let itemFood = document.querySelector('.item-food');
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

  let transactions = document.querySelector('.transactions');
  let transactionsHide = document.querySelector('.transactions-hide');

  // Selects hidden forms
  const hiddenForm = document.querySelector('.entry-form');
  const noMoney = document.querySelector('.no-money');
  const notEnough = document.querySelector('.not-enough');
  const addButton = document.querySelector('.add');
  const okay1 = document.querySelector('.go-back');
  const okay2 = document.querySelector('.go-back2');

  // Selects username input and display span
  const userName = document.querySelector('.name');
  const userNameDisplay = document.querySelector('.username-display');

  // Selects graph elements    
  let percentBarClothes = document.querySelector('.clothing-1');
  let percentBarFood = document.querySelector('.food-1');
  let percentBarEntertainment = document.querySelector('.entertainment-1');
  let percentBarBills = document.querySelector('.bills-1');

  let percentClothes = document.querySelector('.clothesPercent');
  let percentFood = document.querySelector('.foodPercent');
  let percentEntertainment = document.querySelector('.entertainmentPercent');
  let percentBills = document.querySelector('.billsPercent');

  const budgetInput = document.getElementById('budget_input');
  let showEntireBudget = document.querySelector('.entireBudget');
  let showEntireSpend = document.querySelector('.totalSpend')


  //BUDGETS 

  // Initiates running budget total holder
  let runningBudget = 0;
  let clothingBudget = 0;
  let foodBudget = 0;
  let entertainmentBudget = 0;
  let billsBudget = 0;
  let wholeBudget = 0;
  
  // Stores total budget with no changes/static
  let overallBudget = () => {
    wholeBudget = parseFloat(budget.value);
    let formatWhole = wholeBudget.toFixed(2);
    showEntireBudget.innerText = `$${formatWhole}`;
  };

  // Converts user input for total budget from string to number
  let getBudgetNumber = () => {
      runningBudget = parseFloat(budget.value);
  };

  
  // Updates total budget output each time it's called. 
  let updateBudget = () => {
      let formatRunning = runningBudget.toFixed(2);
      showBudgetTotal.innerText = `$${formatRunning}`;
      showBudgetTotal2.innerText = `$${formatRunning}`;      
  };

  
  //updates expenses
  let updateClothingExpenses = () => {
    let formatClothing = clothingBudget.toFixed(2);
    clothingSpend.innerText = `$${formatClothing}`;
    clothingColor.innerText = `$${formatClothing}`;
    let clothingTransaction = document.createElement('p');

    let costFormat = parseFloat(costClothing.value).toFixed(2);
    clothingTransaction.innerHTML = `${itemClothing.value}: <span class= "clothing-color">$${costFormat}</span>`;
    transactions.appendChild(clothingTransaction);
    transactionsHide.classList.add("hide");
  }


  let updateFoodExpenses = () => {
    let formatFood = foodBudget.toFixed(2);
    foodSpend.innerText = `$${formatFood}`;
    foodColor.innerText = `$${formatFood}`;
    let foodTransaction = document.createElement('p');

    let costFormat = parseFloat(costFood.value).toFixed(2);
    foodTransaction.innerHTML = `${itemFood.value}: <span class= "food-color">$${costFormat}</span>`;
    transactions.appendChild(foodTransaction);
    transactionsHide.classList.add("hide");
  }

  let updateEntertainmentExpenses = () => {
    let formatEntertainment = entertainmentBudget.toFixed(2);
    entertainmentSpend.innerText = `$${formatEntertainment}`;
    entertainmentColor.innerText = `$${formatEntertainment}`;
    let entertainmentTransaction = document.createElement('p');

    let costFormat = parseFloat(costEntertainment.value).toFixed(2);
    entertainmentTransaction.innerHTML = `${itemEntertainment.value}: <span class= "entertainment-color">$${costFormat}</span>`;
    transactions.appendChild(entertainmentTransaction);
    transactionsHide.classList.add("hide");
  }

  let updateBillsExpenses = () => {
    let formatBills = billsBudget.toFixed(2);
    billsSpend.innerText = `$${formatBills}`;
    billsColor.innerText = `$${formatBills}`;
    let billsTransaction = document.createElement('p');

    let costFormat = parseFloat(costBills.value).toFixed(2);
    billsTransaction.innerHTML = `${itemBills.value}: <span class= "bills-color">$${costFormat}</span>`;
    transactions.appendChild(billsTransaction);
    transactionsHide.classList.add("hide");
  }

  let totalSpent = () => {
    let total = clothingBudget + foodBudget + entertainmentBudget + billsBudget;
    let formatTotal = total.toFixed(2);
    showEntireSpend.innerText = `$${formatTotal}`;
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
        let price = parseFloat(costClothing.value);
        runningBudget -= price;
        updateBudget();
      }
      runningClothingExpenses() {
        let price = parseFloat(costClothing.value);
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
        let price = parseFloat(costFood.value);
        runningBudget -= price;
        updateBudget();
      }
      runningFoodExpenses() {
        let price = parseFloat(costFood.value);
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
        let price = parseFloat(costEntertainment.value);
        runningBudget -= price;
        updateBudget();
      }
      runningEntertainmentExpenses() {
        let price = parseFloat(costEntertainment.value);
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
        let price = parseFloat(costBills.value);
        runningBudget -= price;
        updateBudget();
      }
      runningBillsExpenses() {
        let price = parseFloat(costBills.value);
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

  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const empt = document.form1;
    if(empt.querySelector('.name').value === "" || budgetInput.value < 1){
      alert("Value cannot be empty or negative!");
    } else {
     
      getBudgetNumber();
      updateBudget();
      
      userNameDisplay.innerText = `${userName.value}`;
      hiddenForm.classList.add("hide");
      window.scrollTo(0, 0);

      updateClothesGraph();
      updateFoodGraph();
      updateEntertainmentGraph();
      updateBillsGraph();
      overallBudget();
      totalSpent();
    }
  // }

  });

  // Adds new purchases when user hits enter, deducts price from budget total, and clears fields.
  
    enterClothing.addEventListener('click', (e) => {
      e.preventDefault();
      const empt = document.form2;
      if (empt.querySelector('.item-clothing').value === " " || costClothing.value < 0.01){
        alert ("Value cannot be empty or negative!");
      } else {
        // If cost of entry being entered exceeds running budget, then pop-up initiated and fields cleared.
        if (costClothing.value > runningBudget) {
       

          notEnough.classList.remove("hide");
          okay2.focus();
          itemClothing.value = '';
          costClothing.value = '';

          notEnough.classList.remove("hide");

          
  
        }
        /* If everything is normal and there's enough in the budget for the entry, then add new purchase, 
        deduct from budget, and updates running category budget and graph. */
        else if (runningBudget >= 0) {
          newClothesBudget.addClothingItem();
          newClothesBudget.deductBudgetClothing();
          newClothesBudget.runningClothingExpenses();
          updateClothesGraph();
          totalSpent();
          itemClothing.blur();
          costClothing.blur();

      
          itemClothing.value = '';
          costClothing.value = '';
          window.scrollTo(0, 0);
        }
        // If running budget reaches zero, pop-up is initiated to inform user.
        if (runningBudget === 0) {
          noMoney.classList.remove("hide");
          okay1.focus();
        }
      
    }});

  // Hides pop-up when user clicks "ok", disables enter buttons in case the budget reaches.
    okay1.addEventListener('click', () => {
      // Hides pop-up again and scrolls page to top.
      noMoney.classList.add("hide");
      window.scrollTo(0, 0);
      // Disables buttons.
      enterClothing.disabled = true;
      enterFood.disabled = true;
      enterEntertainment.disabled = true;
      enterBills.disabled = true;
      // Makes buttons grayed out.
      enterClothing.classList.add("gray");
      enterFood.classList.add("gray");
      enterEntertainment.classList.add("gray");
      enterBills.classList.add("gray");
    });
    

  // Hides pop-up when user clicks "ok".
    okay2.addEventListener('click', () => {
      notEnough.classList.add("hide");
      window.scrollTo(0, 0);
    });

    enterFood.addEventListener('click', (e) => {
      e.preventDefault();
      const empt = document.form3;
      if (empt.querySelector('.item-food').value === " " || costFood.value < 0.01){
        alert ("Value cannot be empty or negative!");
      } else {
      // If cost of entry being entered exceeds running budget, then pop-up initiated and fields cleared.
      if (costFood.value > runningBudget) {
        notEnough.classList.remove("hide");
        okay2.focus();
        itemFood.value = '';
        costFood.value = '';
      }
      /* If everything is normal and there's enough in the budget for the entry, then add new purchase, 
      deduct from budget, and updates running category budget and graph. */
      else if (runningBudget >= 0) {
        newFoodBudget.addFoodItem();
        newFoodBudget.deductBudgetFood();
        newFoodBudget.runningFoodExpenses();
        updateFoodGraph();
        totalSpent();
        itemFood.blur();
        costFood.blur();

        itemFood.value = '';
        costFood.value = '';
      }
      // If running budget reaches zero, pop-up is initiated to inform user.
      if (runningBudget === 0) {
        noMoney.classList.remove("hide");
        okay1.focus();
      }
    }});

    enterEntertainment.addEventListener('click', (e) => {
      e.preventDefault();
      const empt = document.form4;
      if (empt.querySelector('.item-entertainment').value === " " || costEntertainment.value < 0.01){
        alert ("Value cannot be empty or negative!");
      } else {
      // If cost of entry being entered exceeds running budget, then pop-up initiated and fields cleared.
      if (costEntertainment.value > runningBudget) {
        notEnough.classList.remove("hide");
        okay2.focus();
        itemEntertainment.value = '';
        costEntertainment.value = '';
      }
      /* If everything is normal and there's enough in the budget for the entry, then add new purchase, 
      deduct from budget, and updates running category budget and graph. */
      else if (runningBudget >= 0) {
        newEntertainmentBudget.addEntertainmentItem();
        newEntertainmentBudget.deductBudgetEntertainment();
        newEntertainmentBudget.runningEntertainmentExpenses();
        updateEntertainmentGraph();
        totalSpent();
        itemEntertainment.blur();
        costEntertainment.blur();
    
        itemEntertainment.value = '';
        costEntertainment.value = '';
      }
      // If running budget reaches zero, pop-up is initiated to inform user.
      if (runningBudget === 0) {
        noMoney.classList.remove("hide");
        okay1.focus();
      }
    }});

    enterBills.addEventListener('click', (e) => {
      e.preventDefault();
      const empt = document.form5;
      if (empt.querySelector('.item-bills').value === " " || costBills.value < 0.01){
        alert ("Value cannot be empty or negative!");
      } else {
      // If cost of entry being entered exceeds running budget, then pop-up initiated and fields cleared.
      if (costBills.value > runningBudget) {
        notEnough.classList.remove("hide");
        okay2.focus();
        itemBills.value = '';
        costBills.value = '';
        
      }
      /* If everything is normal and there's enough in the budget for the entry, then add new purchase, 
      deduct from budget, and updates running category budget and graph. */
      else if (runningBudget >= 0) {
        newBillsBudget.addBillsItem();
        newBillsBudget.deductBudgetBills();
        newBillsBudget.runningBillsExpenses();
        updateBillsGraph();
        totalSpent();
        itemBills.blur();
        costBills.blur();
    
        itemBills.value = '';
        costBills.value = '';
        itemBills.blur();
        costBills.blur();
      }
      // If running budget reaches zero, pop-up is initiated to inform user.
      if (runningBudget === 0) {
        noMoney.classList.remove("hide");
        okay1.focus();
      }
    }});

    //Graph functions!

    function updateClothesGraph () {
      overallBudget();
      let divide = clothingBudget / wholeBudget;
      let total = divide * 100;
      percentBarClothes.style.width = `${total}%`;
      percentClothes.innerText = `${Math.trunc(total)}%`;
    };

    function updateFoodGraph () {
      overallBudget();
      let divide = foodBudget / wholeBudget;
      let total = divide * 100;
      percentBarFood.style.width = `${total}%`;
      percentFood.innerText = `${Math.trunc(total)}%`;
    };

    function updateEntertainmentGraph () {
      overallBudget();
      let divide = entertainmentBudget / wholeBudget;
      let total = divide * 100;
      percentBarEntertainment.style.width = `${total}%`;
      percentEntertainment.innerText = `${Math.trunc(total)}%`;
    };
    
    function updateBillsGraph () {
      overallBudget();
      let divide = billsBudget / wholeBudget;
      let total = divide * 100;
      percentBarBills.style.width = `${total}%`;
      percentBills.innerText = `${Math.trunc(total)}%`;
    };
}


