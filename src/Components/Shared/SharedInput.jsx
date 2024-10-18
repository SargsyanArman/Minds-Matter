import React from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";

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
        borderColor: mode === "dark" ? "#c30000" : "#a73afd",
      },
      "&:hover fieldset": {
        borderColor: mode === "dark" ? "#e60000" : "#9c34eb",
      },
      "&.Mui-focused fieldset": {
        borderColor: mode === "dark" ? "#ff0000" : "#8e44ad",
      },
      color: mode === "dark" ? "white" : "black",
      backgroundColor: mode === "dark" ? "#2c2c2c" : "#f5f5f5",
    },
    "& .MuiInputLabel-root": {
      color: mode === "dark" ? "#c30000" : "#a73afd",
    },
    "& .MuiInputLabel-shrink": {
      color: mode === "dark" ? "#e60000" : "#9c34eb",
    },
    "& .MuiInputBase-input": {
      color: mode === "dark" ? "white" : "black",
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
