import React from "react";
import { Grid } from "@material-ui/core";

const GridCard: React.FC = ({ children }) => {
  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
};

export default GridCard;
