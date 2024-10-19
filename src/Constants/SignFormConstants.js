import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "underline",
    color: "#a103fc",
    transition: "color 0.3s ease, text-decoration 0.3s ease",
  },
});

const SIGNIN_BOX_STYLES = {
  marginTop: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const SIGNIN_BUTTON_STYLES = {
  mt: 3,
  mb: 2
}

const SIGNIN_COPYRIGHT_STYLES = {
  mt: 8,
  mb: 4
}

export {
  StyledLink,
  SIGNIN_BOX_STYLES,
  SIGNIN_BUTTON_STYLES,
  SIGNIN_COPYRIGHT_STYLES
};
