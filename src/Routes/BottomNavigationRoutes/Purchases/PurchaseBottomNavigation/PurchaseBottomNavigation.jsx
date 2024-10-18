import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState, useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { useSelector } from "react-redux";
import { LangContext } from "../../../../Contexts/LangContext";

const PurchaseBottomNavigation = () => {
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const purchaseNavigation = [
    {
      to: "/profile/purchases/Deliveries",
      label: t(`${prefix}.deliveries label`),
    },
    {
      to: "/profile/purchases/Purchases",
      label: t(`${prefix}.purchases label`),
    },
    {
      to: "/profile/purchases/Checks",
      label: t(`${prefix}.checks label`),
    },
    {
      to: "/profile/purchases/Returns",
      label: t(`${prefix}.returns label`),
    },
  ];

  const { pathname } = useLocation();
  const initialValue = purchaseNavigation.findIndex(({ to }) =>
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
    justifyContent: "space-between",
    width: { xs: '100%', md2: "40%" },
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
        {purchaseNavigation.map(({ to, label }, index) => (
          <BottomNavigationAction
            key={to}
            component={Link}
            to={to}
            label={label}
            sx={bottomNavigationActionStyles}
            value={index}
            className='nav-purchases'
          />
        ))}
      </BottomNavigation>
      <Outlet />
    </ThemeModes>
  );
};

export default PurchaseBottomNavigation;
