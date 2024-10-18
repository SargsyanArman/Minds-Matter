import { useContext, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
} from "@mui/material";
import { LangContext } from "../../../Contexts/LangContext";

const AgreementForm = () => {
  const [checked, setChecked] = useState({
    agreement1: false,
    agreement2: false,
  });
  const { t } = useContext(LangContext);
  const prefix = "Orders page";

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.agreement1}
              onChange={handleChange}
              name="agreement1"
              sx={{
                "& .MuiSvgIcon-root": {
                  borderRadius: "4px",
                  color: "rgba(0, 0, 0, 0.54)",
                },
                "&.Mui-checked": {
                  "& .MuiSvgIcon-root": {
                    backgroundColor: "transparent",
                  },
                },
              }}
            />
          }
          label={
            <Typography variant="body4">
              {t(`${prefix}.rules`)}
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.agreement2}
              onChange={handleChange}
              name="agreement2"
              sx={{
                "& .MuiSvgIcon-root": {
                  borderRadius: "4px",
                  color: "rgba(0, 0, 0, 0.54)",
                },
                "&.Mui-checked": {
                  "& .MuiSvgIcon-root": {
                    backgroundColor: "transparent",
                  },
                },
              }}
            />
          }
          label={
            <Typography variant="body4">
              {t(`${prefix}.payment terms`)}
            </Typography>
          }
        />
      </FormGroup>
    </Box>
  );
};

export default AgreementForm;
