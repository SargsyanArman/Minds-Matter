import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Grid, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LangContext } from "../../Contexts/LangContext";
import { auth } from '../../fireBase';
import { sendPasswordResetEmail } from 'firebase/auth';

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "underline",
    color: "#a103fc",
    transition: "color 0.3s ease, text-decoration 0.3s ease",
  },
});

const defaultTheme = createTheme();

export default function ForgotPassword() {
  const mode = useSelector((state) => state.mode.mode);
  const { t } = useContext(LangContext);
  const prefix = "Forgot password page";

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, emailVal);
      setMessage("Password reset email has been sent!!! Please check your email.");
      setError("");
    } catch (err) {
      setError("Error sending password reset email. Please try again.");
      setMessage("");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          backgroundColor: mode === "dark" ? "#aaaaaa" : "white",
          paddingBottom: "120px",
        }}
      >
        <Container component="main" maxWidth="xs" sx={{ padding: "1px" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t(`${prefix}.title`)}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t(`${prefix}.email`)}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t(`${prefix}.submit`)}
              </Button>
              {message && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  {message}
                </Alert>
              )}
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
              <Grid container>
                <Grid item xs>
                  <StyledLink to="/signin" variant="body2">
                    {t(`${prefix}.signin`)}
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
        </Container>
      </div>
    </ThemeProvider>
  );
}
