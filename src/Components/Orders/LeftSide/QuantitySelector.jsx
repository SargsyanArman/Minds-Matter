import { Box, useMediaQuery } from "@mui/material";
import ThemeModes from "../../Shared/ThemeModes";
import { useSelector } from "react-redux";
import { COUNTER_BUTTON_STYLES, QUANTITY_STYLES } from "../../../Constants/OrderPageConstants";
import { DARK } from "../../../Constants/GlobalConstants"

export default function QuantitySelector({
  quantity,
  onIncrement,
  onDecrement,
}) {
  const mode = useSelector((state) => state.mode.mode);
  const isDesktopSm2 = useMediaQuery('(min-width: 400px)');


  const handleInputChange = (event) => {
    const value = Number(event.target.value);
    if (!isNaN(value) && value >= 1) {
      const change = value - quantity;
      if (change > 0) {
        onIncrement(change);
      } else if (change < 0) {
        onDecrement(-change);
      }
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", position: { xs: 'absolute', sm: 'unset' }, bottom: isDesktopSm2 ? '110px' : '63px', left: '110px' }}>
      <button
        onClick={() => onDecrement(1)}
        style={COUNTER_BUTTON_STYLES}
        disabled={quantity <= 1}
      >
        <ThemeModes tagName='p'>-</ThemeModes>
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        style={{
          ...QUANTITY_STYLES,
          color: mode === DARK ? 'white' : 'black'
        }}
      />
      <button
        onClick={() => onIncrement(1)}
        style={COUNTER_BUTTON_STYLES}
      >
        <ThemeModes tagName='p'>+</ThemeModes>
      </button>
    </Box>
  );
}
