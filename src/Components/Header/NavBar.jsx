import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../Contexts/HeaderContext";
import { LangContext } from "../../Contexts/LangContext";
import { SearchContext } from "../../Contexts/SearchContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useAuth } from "../../Hooks/use-auth";
import { AccMenu } from "./AccMenu";
import CurrMenu from "./CurrMenu";
import LangMenu from "./LangMenu";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
    IconButtonStyled,
    NAVBAR_BOX_STYLES,
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from "../../Constants/HeaderConstants";
import SwitcherMode from "./SwitcherMode";
import { useSelector } from "react-redux";
import mindMatters from "/Mind_Matter.png";
import { CurrencyContext } from "../../Contexts/CurrencyContext";
import NavBarBottom from "./NavBarBottom";
import { DARK } from "../../Constants/GlobalConstants";

export default function SearchAppBar() {
    const { handleMenuClick, handleBasketClick, handleFavoritesClick } = useContext(HeaderContext);
    const { isAuth } = useAuth();
    const mode = useSelector((state) => state.mode.mode);
    const { searchBooks, handleChange } = useContext(SearchContext);
    const { setCurrMenu } = useContext(CurrencyContext);
    const { t, handleLangMenuClick } = useContext(LangContext);
    const prefix = 'Header';

    const handleCurrMenuClick = useCallback((event) => {
        setCurrMenu(event.currentTarget);
    }, [setCurrMenu]);

    const iconButtons = [
        { icon: <LanguageIcon />, onClick: handleLangMenuClick },
        { icon: <AttachMoneyIcon />, onClick: handleCurrMenuClick },
        { icon: <FavoriteRoundedIcon />, onClick: handleFavoritesClick, authRequired: true },
        { icon: <ShoppingCartRoundedIcon />, onClick: handleBasketClick },
        { icon: <AccountCircleIcon />, onClick: handleMenuClick }
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    background: mode === DARK
                        ? "linear-gradient(to right, #9d0000, #d40000)"
                        : "linear-gradient(to right, #a103fc, #e703fc)",
                    height: "80px",
                }}
            >
                <Toolbar sx={{ mt: 1 }}>
                    <Link to="/">
                        <img src={mindMatters} className="general-page-logo" alt="Logo" />
                    </Link>
                    <Box sx={NAVBAR_BOX_STYLES}>
                        <Search style={{ width: '100%' }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder={t(`${prefix}.search`)}
                                inputProps={{ "aria-label": "search" }}
                                value={searchBooks}
                                className="input-header"
                                onChange={handleChange}
                            />
                        </Search>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <SwitcherMode />
                        {iconButtons.map(({ icon, onClick, authRequired }, index) => (
                            !authRequired || (authRequired && isAuth) ? (
                                <IconButtonStyled
                                    key={index}
                                    size="large"
                                    color="inherit"
                                    onClick={onClick}
                                >
                                    {icon}
                                </IconButtonStyled>
                            ) : null
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <AccMenu />
            <CurrMenu />
            <LangMenu />
            <NavBarBottom />
        </Box>
    );
}
