import React from "react";
import { Card, CardContent } from "@material-ui/core";

const CustomCard = ({ borderColor, borderThickness, children }) => {
  return (
    <Card
      style={{
        // borderBottom: `${borderColor} solid ${borderThickness}`,
        borderTop: `${borderColor} solid ${borderThickness}`,
        height: "100%",
      }}
      className="card"
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CustomCard;
