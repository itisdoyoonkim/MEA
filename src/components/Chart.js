import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { BudgetContext } from "../context/Context";

const Chart = () => {
  const { state } = useContext(BudgetContext);

  const data = {
    labels: state.monthlyExpenses.map((expense) => {
      return expense.category;
    }),
    options: { maintainAspectRatio: true, responsive: true },
    datasets: [
      {
        label: "Expense Distribution",
        borderWidth: 2,
        data: state.monthlyExpenses.map((expense) => {
          return expense.amount;
        }),
        backgroundColor: state.monthlyExpenses.map((expense) => {
          return expense.color;
        }),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <section>
      <Pie data={data} />
    </section>
  );
};

export default Chart;
