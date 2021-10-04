import React, { useContext, useEffect } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { BudgetContext } from "../context/Context";
import MonthlyIncomeForm from "./MonthlyIncomeForm";
import { calculateTotalExpense } from "../utils";

const Totals = () => {
  const { state, getMonthlyIncome } = useContext(BudgetContext);

  useEffect(() => {
    getMonthlyIncome();
    return () => {
      // cleanup
    };
  }, []);

  const totalExpense = calculateTotalExpense(state.monthlyExpenses);
  const totalSaving = state.monthlyIncome - totalExpense;

  let textColor;
  if (totalExpense > state.monthlyIncome) {
    textColor = "red";
  } else {
    textColor = "black";
  }

  return (
    <section>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        justifyContent="center"
        style={{ width: "100%" }}
      >
        <Grid item lg={5} md={5} xs={10} sm={10}>
          <MonthlyIncomeForm />
        </Grid>

        <Grid item lg={5} md={5} sm={10} xs={10}>
          <MUIList dense={true}>
            <ListItem>
              <ListItemText
                primary="Monthly Income"
                secondary={
                  <span style={{ color: "black" }}>
                    $ {state.monthlyIncome.toLocaleString()}
                  </span>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Total Monthly Expense"
                secondary={
                  <span style={{ color: textColor }}>
                    $ {totalExpense.toLocaleString()}
                  </span>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Monthly Saving"
                secondary={
                  <span style={{ color: "black" }}>
                    $ {totalSaving.toLocaleString()}
                  </span>
                }
              />
            </ListItem>
          </MUIList>
        </Grid>
      </Grid>
    </section>
  );
};

export default Totals;
