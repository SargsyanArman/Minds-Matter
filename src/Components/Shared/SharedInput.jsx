import React from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { DARK } from "../../Constants/GlobalConstants";

const SharedInput = ({
  label,
  placeholder,
  style: propsStyle = {},
  ...rest
}) => {
  const mode = useSelector((state) => state.mode.mode);

  const inputStyles = {
    width: { xs: '100%', md2: '230px' },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: mode === DARK ? "#c30000" : "#a73afd",
      },
      "&:hover fieldset": {
        borderColor: mode === DARK ? "#e60000" : "#9c34eb",
      },
      "&.Mui-focused fieldset": {
        borderColor: mode === DARK ? "#ff0000" : "#8e44ad",
      },
      color: mode === DARK ? "white" : "black",
      backgroundColor: mode === "dark" ? "#2c2c2c" : "#f5f5f5",
    },
    "& .MuiInputLabel-root": {
      color: mode === DARK ? "#c30000" : "#a73afd",
    },
    "& .MuiInputLabel-shrink": {
      color: mode === DARK ? "#e60000" : "#9c34eb",
    },
    "& .MuiInputBase-input": {
      color: mode === DARK ? "white" : "black",
    },
    ...propsStyle,
  };

  return (
    <TextField
      variant="outlined"
      size="small"
      label={label}
      placeholder={placeholder}
      sx={inputStyles}
      {...rest}
    />
  );
};

export default SharedInput;
