import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const InputMuiShared = (props, { children, ...rest }) => {
  const mode = useSelector((state) => state.mode.mode);

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      {...rest}
      style={{ backgroundColor: mode === "dark" ? "white" : null }}
      {...props}
    >
      {children}
    </TextField>
  );
};

export default InputMuiShared;
