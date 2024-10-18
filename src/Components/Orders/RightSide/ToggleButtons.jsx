import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


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
        sx={{
          height: 40, borderRadius: "6px", marginTop: "6px",
        }}
        classes={{ selected: { backgroundColor: 'red !important' } }}
      // style={{ backgroundColor: 'red' }}

      >
        {rightLabel}
      </ToggleButton>
      <ToggleButton
        value="right"
        aria-label="right aligned"
        sx={{ height: 40, borderRadius: "6px", marginTop: "6px" }}
      >
        {leftLabel}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
