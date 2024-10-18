import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import TextMuiShared from "../Components/Shared/TextMuiShared";
import ThemeModes from "../Components/Shared/ThemeModes";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LangContext } from "../Contexts/LangContext";
import { PAPER_STYLES, UNAUTHORIZED_BUTTON_STYLES, UNAUTHORIZED_STYLES } from "../Constants/HelperComponents";
import { DARK } from "../Constants/GlobalConstants";

const UnauthorizedAccess = () => {
  const mode = useSelector((state) => state.mode.mode);
  const { t } = useContext(LangContext);
  const prefix = "Unauthorized access page";

  return (
    <Box sx={{ backgroundColor: mode === DARK ? "#7a7a7a" : "white", ...UNAUTHORIZED_STYLES }}>
      <Paper
        elevation={3}
        sx={{ backgroundColor: mode === DARK ? "black" : "white", ...PAPER_STYLES }}
      >
        <ThemeModes tagName="div">
          <Stack spacing={2}>
            <Alert severity="error">
              <Typography variant="h5" fontWeight="bold">
                {t(`${prefix}.title`)}
              </Typography>
            </Alert>
            <TextMuiShared variant="body1" color="textSecondary">
              {t(`${prefix}.text`)}
            </TextMuiShared>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="primary"
              size="large"
              sx={UNAUTHORIZED_BUTTON_STYLES}
            >
              {t(`${prefix}.signup`)}
            </Button>
            <TextMuiShared variant="body2" color="textSecondary">
              {t(`${prefix}.signin text`)}<Link to="/signin">{t(`${prefix}.signin`)}</Link>
            </TextMuiShared>
          </Stack>
        </ThemeModes>
      </Paper>
    </Box>
  );
};

export default UnauthorizedAccess;
