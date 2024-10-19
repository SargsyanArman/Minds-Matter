import { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import { StyledSelect } from "../../Constants/HeaderConstants";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../../Store/Slices/modeSlices";
import { LangContext } from "../../Contexts/LangContext";
import { ListItemText } from "@mui/material";
import { DARK } from "../../Constants/GlobalConstants";

export default function SwitcherMode() {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const { t } = useContext(LangContext);
  const prefix = "Header";

  const modes = [
    { value: "light", icon: <Brightness7 sx={{ mr: 1, color: "black" }} />, label: t(`${prefix}.light mode`) },
    { value: "dark", icon: <Brightness4 sx={{ mr: 1, color: "black" }} />, label: t(`${prefix}.dark mode`) },
  ];

  const Icon = mode === DARK ? Brightness4 : Brightness7;

  return (
    <StyledSelect
      value={mode}
      onChange={(event) => dispatch(setMode(event.target.value))}
      IconComponent={(props) => <Icon {...props} sx={{ color: "white" }} />}
      renderValue={() => null}
    >
      {modes.map(({ value, icon, label }) => (
        <MenuItem key={value} value={value}>
          {icon}
          <ListItemText>{label}</ListItemText>
        </MenuItem>
      ))}
    </StyledSelect>
  );
}
