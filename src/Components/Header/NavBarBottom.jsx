import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HeaderContext } from "../../Contexts/HeaderContext";
import { useAuth } from "../../Hooks/use-auth";
import { useSelector } from "react-redux";
import { NAV_BAR_STYLES } from '../../Constants/NavBarBottomConstants'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FormatBoldOutlined } from "@mui/icons-material";
import ModalLogin from './ModalLogin'

export default function NavBarBottom() {
    const { handleBasketClick } = useContext(HeaderContext);
    const { isAuth } = useAuth();
    const mode = useSelector((state) => state.mode.mode);

    return (
        <AppBar
            position="fixed"
            sx={NAV_BAR_STYLES(mode)}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton component={Link} to="/" color="inherit">
                    <HomeIcon />
                </IconButton>

                <IconButton component={Link} to="/profile/balance" color="inherit">
                    <FormatBoldOutlined />
                </IconButton>
                <IconButton color="inherit" onClick={handleBasketClick}>
                    <ShoppingCartRoundedIcon />
                </IconButton>
                <IconButton component={Link} to="/profile/favorites" color="inherit">
                    <FavoriteIcon />
                </IconButton>
                {isAuth ? (
                    <IconButton component={Link} to="/profile/general" color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                )
                    : (
                        <ModalLogin />
                    )
                }
            </Toolbar>
        </AppBar>
    );
}
