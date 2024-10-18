import { Link } from "react-router-dom";
import { db } from "../fireBase";
import { doc, getDoc } from "firebase/firestore";
import { styled, alpha } from "@mui/material/styles";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

const Divider = styled("div")({
  height: "1px",
  backgroundColor: "#e0e0e0",
  margin: "0 13px",
});



const fetchUser = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
    else "Mention your name";
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

const MENU_STYLE = {
  width: 200,
  overflow: "visible",
  filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2))",
  mt: 1.5,
  padding: '0px',
  "& .MuiMenuItem-root": {
    "&:hover": {
      backgroundColor: alpha("#4caf50", 0.1),
    },
  },
};

const FAVORITE_STYLES = {
  width: "35px",
  height: "35px",
  color: "red"
}

const HEART = {
  width: "35px",
  height: "35px"
}

export {
  StyledLink,
  Divider,
  MENU_STYLE,
  FAVORITE_STYLES,
  HEART,
  fetchUser
};


