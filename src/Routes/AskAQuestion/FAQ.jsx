import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ThemeModes from "../../Components/Shared/ThemeModes";
import { LangContext } from "../../Contexts/LangContext";
import { BOTTOM_NAVIGATION_ACTION_STYLES, BOTTOM_NAVIGATION_STYLES } from "../../Constants/AskAQuestionsConstants";

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
        sx={BOTTOM_NAVIGATION_STYLES}
      >
        {FAQ_NAVIGATION.map(({ to, label }) => (
          <BottomNavigationAction
            key={to}
            component={Link}
            to={to}
            label={label}
            sx={BOTTOM_NAVIGATION_ACTION_STYLES}
          />
        ))}
      </BottomNavigation>
      <Outlet />
    </ThemeModes>
  );
};

export default FAQ;
