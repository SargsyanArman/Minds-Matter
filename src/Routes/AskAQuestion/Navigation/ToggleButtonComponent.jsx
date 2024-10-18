import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import './Responsive.css'

const ToggleButtonComponent = ({ value, onChange, leftLabel, rightLabel }) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
      sx={{
        flexWrap: { xs: 'wrap', sm: 'nowrap', },
        width: { xs: '150px', sm: '300px' },
        marginBottom: { xs: '20px', sm: '0px' }

      }}
    >
      <ToggleButton
        value="left"
        aria-label="left aligned"
        sx={{
          height: 40,
          width: 300,
          borderRadius: "6px",
          marginTop: "6px",
          marginBottom: "20px",
        }}
      >
        {leftLabel}
      </ToggleButton>
      <ToggleButton
        value="right"
        aria-label="right aligned"
        sx={{ height: 40, width: 300, borderRadius: "6px", marginTop: "6px" }}
      >
        {rightLabel}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
export default ToggleButtonComponent;
