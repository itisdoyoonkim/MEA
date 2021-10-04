import React, { useContext, useEffect } from "react";
import { BudgetContext } from "../context/Context";
import {
  List as MUIList,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const List = () => {
  const { state, getAllExpenses, deleteExpense } = useContext(BudgetContext);

  useEffect(() => {
    getAllExpenses();

    return () => {
      // cleanup
    };
  }, []);

  if (
    state.monthlyExpenses.length === 0 ||
    localStorage.getItem("monthlyExpenses" === null)
  ) {
    return <Typography variant="body2">Nothing to show yet.</Typography>;
  }

  return (
    <section>
      <MUIList dense={true}>
        {state.monthlyExpenses.map((expense) => (
          <Slide
            key={expense.id}
            direction="down"
            in
            mountOnEnter
            unmountOnExit
          >
            <ListItem>
              <ListItemText
                primary={expense.category}
                secondary={`$ ${expense.amount}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <Delete onClick={() => deleteExpense(expense.id)} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </section>
  );
};

export default List;
