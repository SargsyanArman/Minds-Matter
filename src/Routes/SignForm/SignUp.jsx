import { useContext, useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { db } from "../../fireBase";
import {
  validatePhoneNumber,
  handlePhoneChange,
  handleGenderChange,
  handleDateOfBirthChange,
  handleSubmit,
  handleRegister,
} from "../../Constants/SignUpFormConstants";
import Copyright from "../../HelperComponents/Copyright";
import InputMuiShared from "../../Components/Shared/InputMuiShared";
import ThemeModes from "../../Components/Shared/ThemeModes";
import { LangContext } from "../../Contexts/LangContext";
import { FIRST_NAME, SIGNIN_BUTTON_STYLES } from "../../Constants/SignFormConstants";
import { DARK } from "../../Constants/GlobalConstants";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
    color: #a103fc;
    transition: color 0.3s ease, text-decoration 0.3s ease;
  }
`;

const defaultTheme = createTheme();

export default function AccMenu() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("AM");
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const mode = useSelector((state) => state.mode.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const { t } = useContext(LangContext);
  const prefix = "Sign up page";

  const formBackground = { backgroundColor: mode === DARK ? "#aaaaaa" : "white" };
  const radioStyle = { color: mode === DARK ? "white" : null };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ ...formBackground, paddingBottom: "60px" }}>
        <Container component="main" maxWidth="xs" sx={{ padding: "1px" }}>
          <CssBaseline />
          <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">{t(`${prefix}.title`)}</Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(
                handleRegister.bind(null, auth, db, dispatch, navigate, t),
                validatePhoneNumber,
                setError,
                phoneNumber,
                countryCode,
                t
              )}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {["firstName", "lastName"].map((name, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <InputMuiShared
                      required
                      fullWidth
                      id={name}
                      label={t(`${prefix}.${name === FIRST_NAME ? "fname" : "lname"}`)}
                      name={name}
                      autoComplete={name === FIRST_NAME ? "given-name" : "family-name"}
                    />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth required>
                    <ThemeModes tagName="h3">{t(`${prefix}.gender`)}</ThemeModes>
                    <RadioGroup row value={gender} onChange={handleGenderChange(setGender)}>
                      {["male", "female", "other"].map((value) => (
                        <FormControlLabel
                          key={value}
                          value={value}
                          control={<Radio sx={radioStyle} />}
                          label={t(`${prefix}.${value}`)}
                          sx={radioStyle}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <InputMuiShared
                    required
                    fullWidth
                    id="dateOfBirth"
                    label={t(`${prefix}.bdate`)}
                    name="dateOfBirth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={dateOfBirth}
                    onChange={handleDateOfBirthChange(setDateOfBirth)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiTelInput
                    value={phoneNumber}
                    onChange={handlePhoneChange(setPhoneNumber, setCountryCode)}
                    defaultCountry={countryCode}
                    error={!!error}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputMuiShared
                    required
                    fullWidth
                    id="email"
                    label={t(`${prefix}.email`)}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputMuiShared
                    required
                    fullWidth
                    name="password"
                    label={t(`${prefix}.password`)}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              <Button type="submit" fullWidth variant="contained" sx={SIGNIN_BUTTON_STYLES}>
                {t(`${prefix}.submit`)}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <StyledLink to="/signin">{t(`${prefix}.signin`)}</StyledLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: "100px" }} />
        </Container>
      </div>
    </ThemeProvider>
  );
}
