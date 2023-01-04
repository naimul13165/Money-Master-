
document.getElementById("calculate-btn").addEventListener('click', function(){
  const incomeInput = document.getElementById("income");
  const incomeInputString = incomeInput.value;
  const incomeFinalInput = parseFloat(incomeInputString);
  


 // second st
 const foodInput = document.getElementById("food");
 const foodInputString = foodInput.value;
 const foodFinalInput = parseFloat(foodInputString);
//  console.log(foodFinalInput);

//  2

 const rentInput = document.getElementById("rent");
 const rentInputString = rentInput.value;
 const rentFinalInput = parseFloat(rentInputString);
 
//  3
 const clothesInput = document.getElementById("clothes");
 const clothesInputString = clothesInput.value;
 const clothesFinalInput = parseFloat(clothesInputString);

//  sum
const costSum = foodFinalInput + rentFinalInput + clothesFinalInput;


// Total Expense
const previousTotalExpense = document.getElementById("total-expense");
const previousTotalExpenseInput = previousTotalExpense.innerText;
previousTotalExpense.innerText = costSum;



// Balance
const balanceInput = document.getElementById("balance")
const totallBalance = incomeFinalInput - costSum;
balanceInput.innerText = totallBalance;
})
// second addEventListener save
document.getElementById("save-btn").addEventListener('click', function(){
  const saveBalance = document.getElementById("balance");
  const saveBalanceString = saveBalance.innerText;
  const saveBalanceParfloat = parseFloat(saveBalanceString);
  // 2
  const saveInput = document.getElementById("save");
 const saveInputString = saveInput.value;
 const saveFinalInput = parseFloat(saveInputString);
 const TotalSaveBalance = saveBalanceParfloat / 100;
 const finalTotalSaveBalance =  TotalSaveBalance * saveFinalInput;


 const savingAmount = document.getElementById('saving-amount');
 savingAmount.innerText = finalTotalSaveBalance;
//  remaining-balance
const foundRemainingBalance = saveBalanceParfloat - finalTotalSaveBalance;
const LocationRemainingBalance = document.getElementById('remaining-balance');
LocationRemainingBalance.innerText = foundRemainingBalance;
})