import React, { useContext } from "react";
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
  const { state } = useContext(BudgetContext);

  const totalExpense = calculateTotalExpense(state.monthlyExpenses);

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
                secondary={`$ ${state.monthlyIncome}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Total monthly expense"
                secondary={`$ ${totalExpense}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Monthly saving"
                secondary={`$ ${state.monthlyIncome - totalExpense}`}
              />
            </ListItem>
          </MUIList>
        </Grid>
      </Grid>
    </section>
  );
};

export default Totals;
