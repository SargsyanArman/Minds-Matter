import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";

const FeedBack = () => {
  const { t } = useContext(LangContext);
  const prefix = "Feedback";

  const feedBackNavigation = [
    {
      to: "/profile/feedback/comments",
      label: t(`${prefix}.menu link1`),
    },
    {
      to: "/profile/feedback/questions",
      label: t(`${prefix}.menu link2`),
    },
  ];

  const { pathname } = useLocation();
  const initialValue = feedBackNavigation.findIndex(({ to }) =>
    pathname.startsWith(to),
  );

  const [value, setValue] = useState(initialValue === -1 ? 0 : initialValue);
  const mode = useSelector((state) => state.mode.mode);

  const bottomNavigationActionStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flex: 1,
    "&.Mui-selected": {
      color: mode === "dark" ? "rgb(233, 0, 0);" : "null",
    },
    "& .MuiBottomNavigationAction-label": {
      fontSize: "15px",
    },
    "& .MuiBottomNavigationAction-icon": {
      fontSize: "24px",
    },
  };

  const bottomNavigationStyles = {
    justifyContent: { xs: "space-around", md2: "space-between" },
    width: { xs: '100%', md2: "20%" },
    backgroundColor: "#d5d2d2",
  };

  return (
    <ThemeModes
      tagName="div"
      style={{
        width: "100%",
        backgroundColor: "#d5d2d2",
        borderTop: mode === "dark" ? "1px solid #333" : "1px solid #ccc",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={bottomNavigationStyles}
      >
        {feedBackNavigation.map(({ to, label }, index) => (
          <BottomNavigationAction
            key={to}
            component={Link}
            to={to}
            label={label}
            sx={bottomNavigationActionStyles}
            value={index}
          />
        ))}
      </BottomNavigation>
      <Outlet />
    </ThemeModes>
  );
};

export default FeedBack;
