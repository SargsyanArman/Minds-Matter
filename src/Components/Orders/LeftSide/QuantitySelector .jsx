import { Box, useMediaQuery } from "@mui/material";
import ThemeModes from "../../Shared/ThemeModes";
import { useSelector } from "react-redux";


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
        style={{
          width: "24px",
          height: "24px",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: 'transparent',
          cursor: 'pointer'

        }}
        disabled={quantity <= 1}
      >
        <ThemeModes tagName='p'>-</ThemeModes>
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        style={{
          marginX: "8px",
          width: "60px",
          fontSize: "14px",
          textAlign: "center",
          border: "none",
          outline: "none",
          borderRadius: "4px",
          padding: "2px",
          WebkitAppearance: "none",
          backgroundColor: 'transparent',
          MozAppearance: "textfield",
          color: mode === 'dark' ? 'white' : 'black'
        }}
      />
      <button
        onClick={() => onIncrement(1)}
        style={{
          width: "24px",
          height: "24px",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
      >
        <ThemeModes tagName='p'>+</ThemeModes>
      </button>
    </Box>
  );
}
