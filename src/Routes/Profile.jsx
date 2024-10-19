import { useContext } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  HomeOutlined,
  FavoriteBorderOutlined,
  ShoppingBagOutlined,
  ChatOutlined,
  FormatBoldOutlined,
  PersonOutlineOutlined,
  FeedbackOutlined,
} from "@mui/icons-material";
import { Link, Outlet, useLocation } from "react-router-dom";
import ThemeModes from "../Components/Shared/ThemeModes";
import FeedBackNavButton from "./BottomNavigationRoutes/FeedBack/FeedBackNavButton";
import { useAuth } from "../Hooks/use-auth";
import UnauthorizedAccess from "../helperComponents/UnauthorizedAccess";
import { LangContext } from "../Contexts/LangContext";
import { PROFILE_ACTION_STYLES, PROFILE_NAV_ACTION_STYLES } from "../Constants/ProfileNavigationConstants";

function Profile() {
  const { t } = useContext(LangContext);
  const prefix = "Profile navbar";

  const profileNavigation = [
    {
      to: "/profile/general",
      label: t(`${prefix}.general`),
      icon: <HomeOutlined />,
    },
    {
      to: "/profile/favorites",
      label: t(`${prefix}.favorites`),
      icon: <FavoriteBorderOutlined />,
    },
    {
      to: "/profile/purchases/Deliveries",
      label: t(`${prefix}.orders`),
      icon: <ShoppingBagOutlined />,
    },
    {
      to: "/profile/communications",
      label: t(`${prefix}.communications`),
      icon: <ChatOutlined />,
    },
    {
      to: "/profile/feedback/comments",
      label: <FeedBackNavButton />,
      icon: <FeedbackOutlined />,
    },
    {
      to: "/profile/balance",
      label: t(`${prefix}.balance`),
      icon: <FormatBoldOutlined />,
    },
    {
      to: "/profile/details",
      label: t(`${prefix}.profile`),
      icon: <PersonOutlineOutlined />,
    },
  ];

  const { isAuth } = useAuth()
  const { pathname } = useLocation();
  const value = profileNavigation.findIndex(({ to }) => pathname === to);

  return (isAuth ? (
    <ThemeModes tagName="div" style={{ backgroundColor: "#e0e0e0" }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={PROFILE_ACTION_STYLES}
      >
        {profileNavigation.map(({ to, label, icon }) => (
          <BottomNavigationAction
            key={to}
            component={Link}
            to={to}
            label={label}
            icon={icon}
            sx={PROFILE_NAV_ACTION_STYLES}
          />
        ))}
      </BottomNavigation>
      <Outlet />
    </ThemeModes>)
    : <UnauthorizedAccess />
  );
}

export default Profile;
