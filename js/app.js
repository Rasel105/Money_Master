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
    document.getElementById('balance').innerText = finalExpense;

}


document.getElementById("calculate-btn").addEventListener("click", function () {

    const value = expenseCalculation();
    

});

document.getElementById('savings').addEventListener('click', function () {
    
})