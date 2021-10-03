import React, { useReducer, createContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        monthlyExpenses: [...state.monthlyExpenses, action.payload],
      };
    case "DELETE_EXPENSE":
      const newMonthlyExpenses = state.monthlyExpenses.filter((expense) => {
        return expense.id !== action.payload;
      });
      return { ...state, monthlyExpenses: newMonthlyExpenses };
    case "UPDATE_MONTHLY_INCOME":
      return { ...state, monthlyIncome: action.payload };
    default:
      return state;
  }
};

const initState = {
  monthlyIncome: 0,
  monthlyExpenses: [
    {
      id: 1,
      category: "Rent",
      amount: 1600,
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    },
    {
      id: 2,
      category: "Internet",
      amount: 100,
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    },
    {
      id: 3,
      category: "Groceries",
      amount: 500,
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    },
    {
      id: 4,
      category: "Pet Insurance",
      amount: 30,
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    },
    {
      id: 5,
      category: "Donation",
      amount: 50,
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    },
    {
      id: 6,
      category: "Dine out",
      amount: 200,
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    },
  ],
};

export const BudgetContext = createContext(initState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addExpense = (expense) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const deleteExpense = (expense_id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: expense_id,
    });
  };

  const updateMonthlyIncome = (data) => {
    dispatch({
      type: "UPDATE_MONTHLY_INCOME",
      payload: data.monthlyIncome,
    });
  };

  return (
    <BudgetContext.Provider
      value={{
        state,
        addExpense,
        deleteExpense,
        updateMonthlyIncome,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
