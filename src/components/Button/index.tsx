import React from "react";

import { CustomButton } from "./elements";

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  styles?: React.CSSProperties;
}
export const Button = ({ title, onClick, disabled = false, styles }: Props) => {
  return (
    <CustomButton
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={styles}
    >
      {title}
    </CustomButton>
  );
};
