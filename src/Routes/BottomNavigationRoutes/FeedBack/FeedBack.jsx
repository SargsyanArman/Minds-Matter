import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";
import { FEEDBACK_BOX_STYLES, FEEDBACK_NAV_ACTION_STYLES, FEEDBACK_NAV_STYLES } from "../../../Constants/ProfileNavigationConstants";
import { DARK } from "../../../Constants/GlobalConstants";

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

  return (
    <ThemeModes
      tagName="div"
      style={{
        ...FEEDBACK_BOX_STYLES,
        borderTop: mode === DARK ? "1px solid #333" : "1px solid #ccc",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={FEEDBACK_NAV_STYLES}
      >
        {feedBackNavigation.map(({ to, label }, index) => (
          <BottomNavigationAction
            key={to}
            component={Link}
            to={to}
            label={label}
            sx={{
              ...FEEDBACK_NAV_ACTION_STYLES,
              "&.Mui-selected": {
                color: mode === DARK ? "rgb(233, 0, 0);" : "null",
              },
            }}
            value={index}
          />
        ))}
      </BottomNavigation>
      <Outlet />
    </ThemeModes>
  );
};

export default FeedBack;
