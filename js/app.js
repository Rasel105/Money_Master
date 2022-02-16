function expenseCalculation() {
    const salaryInput = document.getElementById("salary-input");
    const salaryInputValue = parseFloat(salaryInput.value);
    const foodCost = document.getElementById("food-cost");
    const foodCostValue = parseFloat(foodCost.value);
    const rentInput = document.getElementById("rent-cost");
    const rentInputValue = parseFloat(rentInput.value);
    const clothesInput = document.getElementById("clothes-cost");
    const clothesInputValue = parseFloat(clothesInput.value);


    const totalExpense = foodCostValue + rentInputValue + clothesInputValue
    const finalExpense = salaryInputValue  - totalExpense
    
    // total calculation 
    document.getElementById("total-expense").innerText = totalExpense;
    const existingBalace = document.getElementById('balance').innerText = finalExpense;
    
    return existingBalace

}


document.getElementById("calculate-btn").addEventListener("click", function () {

    expenseCalculation();
    

});

document.getElementById('savings-btn').addEventListener('click', function () {
    const totalAmount = expenseCalculation();
    console.log(totalAmount)
    const savingInput = document.getElementById('savings-input');
    const salaryInputValue = parseFloat(savingInput.value)
    console.log(salaryInputValue)
    

    const savingsPercentage = (totalAmount / salaryInputValue) * 100
    console.log(savingsPercentage)
    
})