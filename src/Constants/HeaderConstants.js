import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Select } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  flex: 1,
  minWidth: "500px",

  [theme.breakpoints.down("sm")]: {
    minWidth: "200px",
    width: '100%'
  },

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));


const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  fontSize: "1.5rem",
  [theme.breakpoints.down("md2")]: {
    fontSize: "1.2rem",
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));


const CURR_MENU_STYLES = {
  width: 150,
  overflow: "visible",
  filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2))",
  mt: 1.5,
  "& .MuiMenuItem-root": {
    "&:hover": {
      backgroundColor: alpha("#4caf50", 0.1),
    },
  },
}

const LANG_MENU_STYLES = {
  sx: {
    width: 150,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2))",
    mt: 1.5,
    "& .MuiMenuItem-root": {
      "&:hover": {
        backgroundColor: alpha("#4caf50", 0.1),
      },
    },
  },
}

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  color: "inherit",
  border: "none",
  padding: 0,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
}));

const MODAL_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0%',
  width: '100%',
  bgcolor: 'background.paper',
  padding: '32px',
  gap: '15px',
};

const AVATAR_STYLES = {
  height: "100px",
  width: "100px",
};

const BUTTON_STYLES = {
  width: '100%',
  padding: '12px',
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
};


export {
  TypographyStyled,
  IconButtonStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledSelect,
  CURR_MENU_STYLES,
  LANG_MENU_STYLES,
  MODAL_STYLES,
  AVATAR_STYLES,
  BUTTON_STYLES
};
