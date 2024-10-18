import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { Home, ShoppingCartRounded, Favorite, AccountCircle, FormatBoldOutlined } from "@mui/icons-material";
import { HeaderContext } from "../../Contexts/HeaderContext";
import { useAuth } from "../../Hooks/use-auth";
import { useSelector } from "react-redux";
import { NAV_BAR_STYLES } from '../../Constants/NavBarBottomConstants';
import ModalLogin from './ModalLogin';

export default function NavBarBottom() {
    const { handleBasketClick } = useContext(HeaderContext);
    const { isAuth } = useAuth();
    const mode = useSelector((state) => state.mode.mode);

    const buttons = [
        { to: "/", icon: <Home />, onClick: null },
        { to: "/profile/balance", icon: <FormatBoldOutlined />, onClick: null },
        { to: null, icon: <ShoppingCartRounded />, onClick: handleBasketClick },
        { to: "/profile/favorites", icon: <Favorite />, onClick: null }
    ];

    return (
        <AppBar position="fixed" sx={NAV_BAR_STYLES(mode)}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {buttons.map(({ to, icon, onClick }, index) => (
                    <IconButton
                        key={index}
                        component={to ? Link : "button"}
                        to={to}
                        color="inherit"
                        onClick={onClick}
                    >
                        {icon}
                    </IconButton>
                ))}

                {isAuth ? (
                    <IconButton component={Link} to="/profile/general" color="inherit">
                        <AccountCircle />
                    </IconButton>
                ) : (
                    <ModalLogin />
                )}
            </Toolbar>
        </AppBar>
    );
}
