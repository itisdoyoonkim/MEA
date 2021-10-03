export const calculateTotalExpense = (monthlyExpenses) => {
  let totalExpense = 0;

  for (let i = 0; i < monthlyExpenses.length; i++) {
    totalExpense += monthlyExpenses[i].amount;
  }

  return totalExpense;
};
