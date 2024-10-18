import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";

const SelectMuiShared = ({ sort, setSort, children, ...rest }) => {
  const mode = useSelector((state) => state.mode.mode);

  const selectStyles = {
    backgroundColor: mode === "dark" ? "#333" : "#fff",
    color: mode === "dark" ? "#fff" : "#000",
    borderColor: mode === "dark" ? "#555" : "#ccc",
    "& .MuiSelect-icon": {
      color: mode === "dark" ? "#fff" : "#000",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: mode === "dark" ? "#555" : "#ccc",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: mode === "dark" ? "#fff" : "#000",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: mode === "dark" ? "#fff" : "#000",
    },
  };

  return (
    <Select
      value={sort}
      onChange={(ev) => setSort(ev.target.value)}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      sx={selectStyles}
    >
      {children}
    </Select>
  );
};

export default SelectMuiShared;
