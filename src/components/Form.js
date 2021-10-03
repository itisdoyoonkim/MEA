import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { BudgetContext } from "../context/Context";
import { categories } from "../constants/categories";
import Header from "../components/Header";

const Form = () => {
  const { addExpense } = useContext(BudgetContext);

  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    color: "",
  });

  const createNewExpense = () => {
    if (formData.category === "") {
      console.log("Category cannot be empty.");
      return;
    }

    const expense = {
      ...formData,
      id: uuidv4(),
      amount: Number(formData.amount),
      color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`,
    };

    addExpense(expense);

    setFormData({
      category: "",
      amount: "",
      color: "",
    });
  };

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <Header title="M.E.A." subtitle="Monthly Expense Analyzer" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleFormDataChange}
              autoFocus
            >
              {categories.map((category) => {
                return (
                  <MenuItem key={uuidv4()} value={category}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              type="number"
              name="amount"
              label="Amount"
              fullWidth
              value={formData.amount}
              onChange={handleFormDataChange}
            />
          </FormControl>
        </Grid>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createNewExpense}
        >
          Add
        </Button>
      </Grid>
    </section>
  );
};

export default Form;
