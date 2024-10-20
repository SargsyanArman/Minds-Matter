import { useState, useContext } from "react";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import { LangContext } from "../../../../Contexts/LangContext";

import "./PuchaseNav.css";
import { FD_COMMENT_STYLES, SORT_STYLES } from "../../../../Constants/ProfileNavigationConstants";
import { DARK } from "../../../../Constants/GlobalConstants";

const Purchases = () => {
  const [sort, setSort] = useState("По дате добавления ↓");
  const mode = useSelector((state) => state.mode.mode);
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const SELECT_STYLES = {
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
    <ThemeModes tagName="simpleDiv" className='purch-main'>
      <Select
        className="title_deliver"
        value={sort}
        onChange={(ev) => setSort(ev.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{ ...SORT_STYLES, ...SELECT_STYLES }}
      >
        <MenuItem value={"По дате добавления ↓"}>{t(`${prefix}.purchases option1`)}</MenuItem>
        <MenuItem value={"По дате добавления ↑"}>{t(`${prefix}.purchases option2`)}</MenuItem>
        <MenuItem value={"По возрастанию цены"}>{t(`${prefix}.purchases option3`)}</MenuItem>
        <MenuItem value={"По убыванию цены"}>{t(`${prefix}.purchases option4`)}</MenuItem>
      </Select>

      <ThemeModes tagName="h3" style={FD_COMMENT_STYLES}>
        {t(`${prefix}.purchases title`)}
      </ThemeModes>
      <ThemeModes tagName="gn-p" style={{ paddingBottom: "20px", whiteSpace: "pre-wrap" }}>
        {t(`${prefix}.purchases text`)}
        <ThemeModes tagName="simpleButton">{t(`${prefix}.purchases button`)}</ThemeModes>
      </ThemeModes>
    </ThemeModes>
  );
};

export default Purchases;
