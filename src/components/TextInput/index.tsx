import React from "react";
import Grid from "@material-ui/core/Grid";

import { Container, Input } from "./elements";

interface Props {
  label: string;
  value: any;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextInput = ({ label, value, type, name, onChange }: Props) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Container>
        <Grid container>
          <Grid item sm={3}>
            <label>{label}</label>
          </Grid>
          <Grid item sm={9}>
            <Input
              data-testid="input"
              type={type}
              value={value}
              name={name}
              onChange={onChange}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
