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