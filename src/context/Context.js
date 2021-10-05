import React, { useReducer, createContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_EXPENSES":
      const monthlyExpenses = JSON.parse(
        localStorage.getItem("monthlyExpenses")
      );

      return { ...state, monthlyExpenses };
    case "GET_MONTHLY_INCOME":
      const monthlyIncome = Math.abs(
        Number(JSON.parse(localStorage.getItem("monthlyIncome")))
      );

      return { ...state, monthlyIncome };
    case "ADD_EXPENSE":
      localStorage.setItem(
        "monthlyExpenses",
        JSON.stringify([...state.monthlyExpenses, action.payload])
      );

      return {
        ...state,
        monthlyExpenses: [...state.monthlyExpenses, action.payload],
      };
    case "DELETE_EXPENSE":
      const newMonthlyExpenses = state.monthlyExpenses.filter((expense) => {
        return expense.id !== action.payload;
      });

      localStorage.setItem(
        "monthlyExpenses",
        JSON.stringify(newMonthlyExpenses)
      );

      return { ...state, monthlyExpenses: newMonthlyExpenses };
    case "UPDATE_MONTHLY_INCOME":
      localStorage.setItem(
        "monthlyIncome",
        JSON.stringify(Number(action.payload))
      );

      return { ...state, monthlyIncome: Math.abs(Number(action.payload)) };
    default:
      return state;
  }
};

const initState = {
  monthlyIncome: 0,
  monthlyExpenses: [],
};

export const BudgetContext = createContext(initState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getMonthlyIncome = () => {
    dispatch({ type: "GET_MONTHLY_INCOME" });
  };

  const getAllExpenses = () => {
    dispatch({
      type: "GET_ALL_EXPENSES",
    });
  };

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
        getMonthlyIncome,
        getAllExpenses,
        addExpense,
        deleteExpense,
        updateMonthlyIncome,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
