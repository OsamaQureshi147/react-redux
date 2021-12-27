import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";

export const UsersGrid: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
        <Grid sm={12} md={4} item>
          <Paper>{val}</Paper>
        </Grid>
      ))}
    </Grid>
  );
};
