import React from "react";
import { Grid } from "@material-ui/core";
import CustomCard from "./components/CustomCard";
import Form from "./components/Form";
import List from "./components/List";
import Totals from "./components/Totals";
import Chart from "./components/Chart";
import { colors } from "./constants/colors";

const App = () => {
  return (
    <main>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        justifyContent="center"
        style={{ width: "100%" }}
      >
        <Grid item lg={5} md={5} sm={10} xs={10}>
          <CustomCard
            borderColor={colors.borderColor}
            borderThickness={colors.borderThickness}
          >
            <Form />
          </CustomCard>
        </Grid>

        <Grid item lg={5} md={5} xs={10} sm={10}>
          <CustomCard
            borderColor={colors.borderColor}
            borderThickness={colors.borderThickness}
          >
            <Totals />
          </CustomCard>
        </Grid>

        <Grid item lg={7} md={5} sm={10} xs={10}>
          <CustomCard
            borderColor={colors.borderColor}
            borderThickness={colors.borderThickness}
          >
            <List />
          </CustomCard>
        </Grid>

        <Grid item lg={3} md={5} sm={10} xs={10}>
          <CustomCard
            title="Chart"
            borderColor={colors.borderColor}
            borderThickness={colors.borderThickness}
          >
            <Chart />
          </CustomCard>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;
