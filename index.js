// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
const incomeTransactions = transactions.filter(function(transactions)
  {  return transactions[0] === "income"

  });

console.log(incomeTransactions);


const expenseTransactions = transactions.filter(function(transactions)
  {  return transactions[0] === `expense`;

  });

console.log(expenseTransactions);
/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.0
       Output 4) 800

       ******************************************************************/
// 3)
const totalIncome = incomeTransactions.reduce( function(calculate,calculateincome){ 
    return calculate + calculateincome[1];},0);
console.log(totalIncome);




// 4)
const totalExpenses = expenseTransactions.reduce( function(calculate,calculatExpenses){ 
    return calculate + calculatExpenses[1];},0);

console.log(totalExpenses);


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
       Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.

//5
const netTotal = totalIncome - totalExpenses;

console.log(netTotal);


//6

const transactionsAboveOrEqual = transactions.filter(function(transaction) {
    return transaction[1]>=500
});

console.log(transactionsAboveOrEqual);