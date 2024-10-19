import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../HelperComponents/Copyright";
import { SIGNIN_BOX_STYLES, SIGNIN_COPYRIGHT_STYLES, StyledLink } from "../../Constants/SignFormConstants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../Store/Slices/UserSlices";
import TextMuiShared from "../../Components/Shared/TextMuiShared";
import InputMuiShared from "../../Components/Shared/InputMuiShared";
import { LangContext } from "../../Contexts/LangContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { DARK } from "../../Constants/GlobalConstants";

const defaultTheme = createTheme();

export default function SignIn() {
  const mode = useSelector((state) => state.mode.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = React.useContext(LangContext);
  const prefix = "Sign in page";

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "error",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    handleLogin(email, password, dispatch, navigate);
  };

  const handleLogin = async (email, password, dispatch, navigate) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          emailVerified: user.emailVerified,
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);

      setSnackbar({
        open: true,
        message: t(`${prefix}.invalid user`),
        severity: "error",
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ backgroundColor: mode === DARK ? "#aaaaaa" : "white" }}>
        <Container component="main" maxWidth="xs" sx={{ padding: "1px" }}>
          <CssBaseline />
          <Box
            sx={SIGNIN_BOX_STYLES}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <TextMuiShared component="h1" variant="h5">
              {t(`${prefix}.title`)}
            </TextMuiShared>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <InputMuiShared
                id="email"
                label={t(`${prefix}.email`)}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <InputMuiShared
                name="password"
                label={t(`${prefix}.password`)}
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={SIGNIN_BOX_STYLES}
              >
                {t(`${prefix}.submit`)}
              </Button>
              <Grid container>
                <Grid item xs>
                  <StyledLink to="/forgotpassword" variant="body2">
                    {t(`${prefix}.forgot password`)}
                  </StyledLink>
                </Grid>
                <Grid item>
                  <StyledLink to="/signup" variant="body2">
                    {t(`${prefix}.no account`)}
                  </StyledLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={SIGNIN_COPYRIGHT_STYLES} />

          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Container>
      </div>
    </ThemeProvider>
  );
}
