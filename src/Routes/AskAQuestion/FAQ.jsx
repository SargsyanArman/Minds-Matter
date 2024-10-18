import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ThemeModes from "../../Components/Shared/ThemeModes";
import { LangContext } from "../../Contexts/LangContext";

const bottomNavigationActionStyles = {
  display: "flex",
  flexDirection: "row",
  color: "black",
  gap: "10px",
  flex: 1,
  fontSize: { xs: '14px', sm: '24px' },
  height: 'auto',
  margin: '10px 0'
};

const FAQ = () => {
  const { t } = useContext(LangContext);
  const prefix = "FAQ navbar";

  const FAQ_NAVIGATION = [
    {
      to: "/faq/how-make-order",
      label: t(`${prefix}.order`),
    },
    {
      to: "/faq/payment-methods",
      label: t(`${prefix}.payment methods`),
    },
    {
      to: "/faq/delivery",
      label: t(`${prefix}.delivery`),
    },
    {
      to: "/faq/return",
      label: t(`${prefix}.return`),
    },
    {
      to: "/faq/money-refund",
      label: t(`${prefix}.refund`),
    },
    {
      to: "/faq/rules-for-selling",
      label: t(`${prefix}.selling rules`),
    },
    {
      to: "/faq/rules-for-using-trading-platform",
      label: t(`${prefix}.platform rules`),
    },
    {
      to: "/faq/ask-a-question",
      label: t(`${prefix}.question`),
    },
  ];


  const { pathname } = useLocation();
  const initialValue = FAQ_NAVIGATION.findIndex(({ to }) => pathname === to);
  const [value, setValue] = useState(initialValue === -1 ? 0 : initialValue);

  return (
    <ThemeModes tagName="div" style={{ backgroundColor: "#e0e0e0" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          justifyContent: "space-between", flexWrap: {
            xs: 'wrap', md2: 'nowrap', height: 'auto'
          },
        }}
      >
        {FAQ_NAVIGATION.map(({ to, label }) => (
          <BottomNavigationAction
            key={to}
            component={Link}
            to={to}
            label={label}
            sx={bottomNavigationActionStyles}
          />
        ))}
      </BottomNavigation>
      <Outlet />
    </ThemeModes>
  );
};

export default FAQ;
