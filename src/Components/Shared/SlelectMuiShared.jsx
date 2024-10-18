import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { DARK } from "../../Constants/GlobalConstants";

const SelectMuiShared = ({ sort, setSort, children, ...rest }) => {
  const mode = useSelector((state) => state.mode.mode);

  const selectStyles = {
    backgroundColor: mode === DARK ? "#333" : "#fff",
    color: mode === DARK ? "#fff" : "#000",
    borderColor: mode === DARK ? "#555" : "#ccc",
    "& .MuiSelect-icon": {
      color: mode === DARK ? "#fff" : "#000",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: mode === DARK ? "#555" : "#ccc",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: mode === DARK ? "#fff" : "#000",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: mode === DARK ? "#fff" : "#000",
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
