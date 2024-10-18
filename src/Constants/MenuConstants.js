import { Link } from "react-router-dom";
import { db } from "../fireBase";
import { doc, getDoc } from "firebase/firestore";
import { styled, alpha } from "@mui/material/styles";
import { useSelector } from "react-redux";

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

const DIALOG_STYLES = {
  "& .MuiDialog-paper": {
    borderRadius: "20px",
    width: "900px",
    height: "auto",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  }
}

const DIALOG_ICON_BUTTON = {
  position: "absolute",
  right: 16,
  top: 16,
  color: "#333",
}

const DIALOG_CONTENT = {
  padding: 0,
  display: "flex",
  gap: "24px",
  padding: "24px",

}

const DIALOG_IMG = {
  width: "320px",
  height: "420px",
  borderRadius: "10px",
  objectFit: "cover",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}

const DIALOG_DIV = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
}

const DIALOG_SPAN = {
  fontSize: "22px",
  marginBottom: "16px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  maxWidth: "500px",
  width: "100%",
}

const DIALOG_SELLER = {
  fontSize: "16px",
  marginBottom: "24px",
}

const DIALOG_BUY_BUTTON = {
  backgroundColor: "#D70057",
  color: "#fff",
  width: "48%",
  padding: "12px 0",
  borderRadius: "8px",
  fontWeight: 700,
  marginRight: "2%",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#c5004e",
  }
}

const DIALOG_CART_BUTTON = {
  borderColor: "#D70057",
  color: "#D70057",
  width: "48%",
  padding: "12px 0",
  borderRadius: "8px",
  fontWeight: 700,
  fontSize: "16px",
  "&:hover": {
    borderColor: "#c5004e",
    color: "#c5004e",
  }
}

const DIALOG_MORE_BUTTON = {
  borderColor: "#D70057",
  color: "#D70057",
  width: "98%",
  padding: "6px 0",
  borderRadius: "8px",
  fontWeight: 700,
  fontSize: "16px",

  "&:hover": {
    borderColor: "#c5004e",
    color: "#c5004e",
  },
}

const SLIDES = [
  {
    image: "/book1.jpg",
    text: "Books are the ships of thought.",
  },
  {
    image: "/book2.webp",
    text: "The book is a dream, that you hold in your hand.",
  },
  {
    image: "/book3.jpg",
    text: "Books are a pass to personal freedom.",
  },
];

const SLIDER_CENTRED_TEXT_STYLES = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "5px",
  padding: "10px",
}

const SLIDER_BOX_STYLES = {
  width: "96%",
  margin: "auto",
  padding: "20px 0px 60px 0"
}

const SLIDER_BOX_SECOND_STYLES = {
  height: { xs: '45vw', sm2: '175px' },
  minHeight: '100px',
  position: "relative",
  borderRadius: "15px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
}

const SLIDER_CARD_MEDIA_STYLES = {
  height: "100%",
  width: "100%",
  objectFit: "cover"
}

export {
  StyledLink,
  Divider,
  MENU_STYLE,
  FAVORITE_STYLES,
  HEART,
  DIALOG_STYLES,
  DIALOG_ICON_BUTTON,
  DIALOG_CONTENT,
  DIALOG_IMG,
  DIALOG_DIV,
  DIALOG_SPAN,
  DIALOG_SELLER,
  DIALOG_BUY_BUTTON,
  DIALOG_CART_BUTTON,
  DIALOG_MORE_BUTTON,
  SLIDER_CENTRED_TEXT_STYLES,
  SLIDER_BOX_STYLES,
  SLIDER_BOX_SECOND_STYLES,
  SLIDER_CARD_MEDIA_STYLES,
  SLIDES,
  fetchUser
};


