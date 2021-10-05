import React from "react";
import { Typography } from "@material-ui/core";

function Header({ title, subtitle }) {
  return (
    <section className="header">
      <Typography variant="h6">{title ? title : null}</Typography>
      <Typography variant="body2">{subtitle ? subtitle : null}</Typography>
    </section>
  );
}

export default Header;
