import React, { useState, useContext } from "react";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  Typography,
} from "@material-ui/core";
import { BudgetContext } from "../context/Context";

const MonthlyIncomeForm = () => {
  const { monthlyExpenses, updateMonthlyIncome } = useContext(BudgetContext);

  const [formData, setFormData] = useState({
    monthlyIncome: "",
  });

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveNewInfo = () => {
    updateMonthlyIncome(formData);
    setFormData({
      monthlyIncome: "",
    });
  };

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              type="number"
              name="monthlyIncome"
              label="Monthly Income*"
              fullWidth
              value={formData.monthlyIncome}
              onChange={handleFormDataChange}
            />
          </FormControl>
        </Grid>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          fullWidth
          onClick={saveNewInfo}
        >
          Update
        </Button>
      </Grid>
    </section>
  );
};

export default MonthlyIncomeForm;
