import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState, useContext } from "react";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { useSelector } from "react-redux";
import { LangContext } from "../../../../Contexts/LangContext";
import { FD_BOX_STYLES } from "../../../../Constants/ProfileNavigationConstants";
import { DARK } from "../../../../Constants/GlobalConstants";

const Returns = () => {
  const [alignment, setAlignment] = useState("left");
  const mode = useSelector((state) => state.mode.mode);
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const toggleButtonStyles = {
    height: 40,
    borderRadius: "6px",
    marginTop: "6px",
    backgroundColor: mode === DARK ? "#333" : "#fff",
    color: mode === DARK ? "#fff" : "#000",
    borderColor: mode === DARK ? "#555" : "#ccc",
    "&:hover": {
      backgroundColor: mode === DARK ? "#444" : "#f0f0f0",
    },
    "&.Mui-selected": {
      backgroundColor: mode === DARK ? "#555" : "#ddd",
      color: mode === DARK ? "#fff" : "#000",
    },
  };

  const buttons = ["not fit", "defective"];
  const leftOptions = ["option1", "option2"];
  const rightOptions = ["step1", "step2", "step3"];

  return (
    <ThemeModes tagName="simpleDiv" style={FD_BOX_STYLES}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={(event, newAlignment) => setAlignment(newAlignment)}
        aria-label="text alignment"
      >
        {buttons.map((btn, index) => (
          <ToggleButton key={index} value={btn} sx={toggleButtonStyles}>
            {t(`${prefix}.${btn}`)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <ThemeModes style={{ padding: "32px 0" }}>
        <ThemeModes tagName="h3" style={{ marginBottom: "8px" }}>
          {t(`${prefix}.return title`)}
        </ThemeModes>
        <ThemeModes tagName="p">
          {t(`${prefix}.return text`)}
        </ThemeModes>
        <ul style={{ marginLeft: "40px", lineHeight: "30px" }}>
          {(alignment === "left" ? leftOptions : rightOptions).map((option, idx) => (
            <li key={idx}>{t(`${prefix}.${option}`)}</li>
          ))}
        </ul>
      </ThemeModes>
    </ThemeModes>
  );
};

export default Returns;
