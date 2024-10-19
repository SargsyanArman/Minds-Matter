import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState, useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { useSelector } from "react-redux";
import { LangContext } from "../../../../Contexts/LangContext";
import { PURCHASES_BOX_STYLE, PURCHASES_NAV_ACTION_STYLES, PURCHASES_NAV_STYLES } from "../../../../Constants/ProfileNavigationConstants";
import { DARK } from "../../../../Constants/GlobalConstants";

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

  return (
    <ThemeModes
      tagName="div"
      style={{
        ...PURCHASES_BOX_STYLE,
        borderTop: mode === DARK ? "1px solid #333" : "1px solid #ccc",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={PURCHASES_NAV_STYLES}
      >
        {purchaseNavigation.map(({ to, label }, index) => (
          <BottomNavigationAction
            key={to}
            component={Link}
            to={to}
            label={label}
            sx={{
              ...PURCHASES_NAV_ACTION_STYLES,
              "&.Mui-selected": {
                color: mode === DARK ? "rgb(233, 0, 0);" : "null",
              },
            }}
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
