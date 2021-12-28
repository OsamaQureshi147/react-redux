import React from "react";

import { CustomButton } from "./elements";

interface Props {
  title?: string | null;
  children?: React.ReactNode | null;
  onClick: () => void;
  disabled?: boolean;
  styles?: React.CSSProperties;
}
export const Button = ({
  title = null,
  children = null,
  onClick,
  disabled = false,
  styles,
}: Props) => {
  return (
    <CustomButton
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={styles}
    >
      {title ? title : null}
      {children ? children : null}
    </CustomButton>
  );
};
