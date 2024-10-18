import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { TOGGLE_BUTTONS_STYLES, TOGGLE_CLASSES_STYLES } from "../../../Constants/OrderPageConstants";


export default function ToggleButtons({ rightLabel, leftLabel }) {
  const [alignment, setAlignment] = useState("left");

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={(event, newAlignment) => setAlignment(newAlignment)}
      aria-label="text alignment"
    >
      <ToggleButton
        value="left"
        aria-label="left aligned"
        sx={TOGGLE_BUTTONS_STYLES}
        classes={TOGGLE_CLASSES_STYLES}
      >
        {rightLabel}
      </ToggleButton>
      <ToggleButton
        value="right"
        aria-label="right aligned"
        sx={TOGGLE_BUTTONS_STYLES}
      >
        {leftLabel}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
