function expenseCalculation() {
    const salaryInput = document.getElementById("salary-input");
    const salaryInputValue = parseFloat(salaryInput.value);
    if (salaryInputValue > 0) {
        const foodCost = document.getElementById("food-cost");
    const foodCostValue = parseFloat(foodCost.value);
    const rentInput = document.getElementById("rent-cost");
    const rentInputValue = parseFloat(rentInput.value);
    const clothesInput = document.getElementById("clothes-cost");
    const clothesInputValue = parseFloat(clothesInput.value);

    // expense calculation 
    const totalExpense = foodCostValue + rentInputValue + clothesInputValue
    const finalExpense = salaryInputValue  - totalExpense
    
    // total calculation 
    document.getElementById("total-expense").innerText = totalExpense;
    const existingBalace = document.getElementById('balance').innerText = finalExpense;
    salaryInput.value = ''
    return existingBalace
    }
    {
        const errors =  document.getElementById()
    }
    
   

}

function percentageCalculation()
{
    const totalAmount = expenseCalculation();
    const savingInput = document.getElementById('savings-input');
    const salaryInputValue = parseFloat(savingInput.value);

    const savingsPercentage = (totalAmount * salaryInputValue) / 100;
    document.getElementById('savings-show').innerText = savingsPercentage;

    document.getElementById('remaining-amount').innerText = totalAmount - savingsPercentage;
}
// finding calculate button 
document.getElementById("calculate-btn").addEventListener("click", function () {
    expenseCalculation();
});


document.getElementById('savings-btn').addEventListener('click', function () {
    // receiving the existing balance 
    percentageCalculation()
})