import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState, useContext } from "react";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { useSelector } from "react-redux";
import { LangContext } from "../../../../Contexts/LangContext";

const Returns = () => {
  const [alignment, setAlignment] = useState("left");
  const mode = useSelector((state) => state.mode.mode);
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const toggleButtonStyles = {
    height: 40,
    borderRadius: "6px",
    marginTop: "6px",
    backgroundColor: mode === "dark" ? "#333" : "#fff",
    color: mode === "dark" ? "#fff" : "#000",
    borderColor: mode === "dark" ? "#555" : "#ccc",
    "&:hover": {
      backgroundColor: mode === "dark" ? "#444" : "#f0f0f0",
    },
    "&.Mui-selected": {
      backgroundColor: mode === "dark" ? "#555" : "#ddd",
      color: mode === "dark" ? "#fff" : "#000",
    },
  };

  return (
    <ThemeModes tagName="simpleDiv" style={{ padding: "32px 0 32px 32px" }}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={(event, newAlignment) => setAlignment(newAlignment)}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
          sx={toggleButtonStyles}
        >
          {t(`${prefix}.not fit`)}
        </ToggleButton>
        <ToggleButton
          value="right"
          aria-label="right aligned"
          sx={toggleButtonStyles}
        >
          {t(`${prefix}.defective`)}
        </ToggleButton>
      </ToggleButtonGroup>

      <ThemeModes style={{ padding: "32px 0" }}>
        <ThemeModes tagName="h3" style={{ marginBottom: "8px" }}>
          {t(`${prefix}.return title`)}
        </ThemeModes>
        <ThemeModes tagName="p">
          {t(`${prefix}.return text`)}
        </ThemeModes>
        {alignment === "left" ? (
          <ul style={{ marginLeft: "40px", lineHeight: "30px" }}>
            <li>{t(`${prefix}.option1`)}</li>
            <li>{t(`${prefix}.option2`)}</li>
          </ul>
        ) : (
          <ul style={{ marginLeft: "40px", lineHeight: "30px" }}>
            <li>{t(`${prefix}.step1`)}</li>
            <li>{t(`${prefix}.step2`)}</li>
            <li>{t(`${prefix}.step3`)}</li>
          </ul>
        )}
      </ThemeModes>
    </ThemeModes>
  );
};

export default Returns;
