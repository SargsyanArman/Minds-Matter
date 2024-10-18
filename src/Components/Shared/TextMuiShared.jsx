import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DARK } from "../../Constants/GlobalConstants";

const TextMuiShared = ({ children, ...rest }) => {
  const mode = useSelector((state) => state.mode.mode);
  const style = {
    fontSize: "20px",
    lineHeight: "28px",
    transition: "color .3s ease 0s",
    fontWeight: 700,
    marginBottom: "8px",
  };
  return (
    <Typography
      {...rest}
      style={{ color: mode === DARK ? "red" : "black", ...style }}
    >
      {children}
    </Typography>
  );
};

export default TextMuiShared;
