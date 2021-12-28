import React from "react";

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
    <div style={{ marginTop: "10px" }}>
      <label>{label}</label>
      <Container>
        {/* <div className={classes.container}> */}
        <Input
          data-testid="input"
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        {/* </div> */}
      </Container>
    </div>
  );
};
