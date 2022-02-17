// main function start here 

function totalSalary(){
      // finding the salary input value 
    const salaryInput = document.getElementById("salary-input");
    const salaryInputValue = parseFloat(salaryInput.value);
    return salaryInputValue
}

function expenseCalculation() {
    // receiving the total salary value
    const salaryInputValue = totalSalary()
    
    // 1st error handling

    if(salaryInputValue > 0 && !isNaN(salaryInputValue)){

        // fining the all expense part and setting the value property 
    const foodCost = document.getElementById("food-cost");
    const foodCostValue = parseFloat(foodCost.value);
    
    const rentInput = document.getElementById("rent-cost");
    const rentInputValue = parseFloat(rentInput.value);
 
    const clothesInput = document.getElementById("clothes-cost");
    const clothesInputValue = parseFloat(clothesInput.value);
   
    // expense calculation 
    const totalExpense = foodCostValue + rentInputValue + clothesInputValue
    
    if(totalExpense > salaryInputValue){
        document.getElementById('fail3').style.display = 'block'
    }
    else{
        document.getElementById('total-expense').innerText = totalExpense
        const availableBalance =  document.getElementById('balance').innerText = salaryInputValue - totalExpense; 
        return availableBalance;
        }
           }
   else{
        //    showing err to the UI 
       document.getElementById('fail').style.display = 'block'
   }
  
}
// finding calculate button 
document.getElementById("calculate-btn").addEventListener("click", function () {
    expenseCalculation()
});

// second function start here

function savingsCalculation(){
    // Receiving the availableBalance here 
    const totalAmount = expenseCalculation();
    const percentage = document.getElementById('savings-input');
    const salaryInputValue = totalSalary()
    const percentageValue = parseFloat(percentage.value);

    // 1st error handling

   if(percentageValue > 0 ){
    const savingsPercentageAmount = (salaryInputValue * percentageValue) / 100;

     if(totalAmount < savingsPercentageAmount ){
        document.getElementById('fail2').style.display = 'block'
    }else{
        document.getElementById('savings-show').innerText = savingsPercentageAmount.toFixed(2);

        document.getElementById('remaining-amount').innerText = (totalAmount - savingsPercentageAmount).toFixed(2);
        percentage.value = '';
    }
         
      
    }
   else{
    //    showing err to the UI 
    document.getElementById('fail').style.display = 'block'
   }
}

// finding the saving button and call the second function 

document.getElementById('savings-btn').addEventListener('click', function(){
    savingsCalculation()
})