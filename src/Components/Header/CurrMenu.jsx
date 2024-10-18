import { CurrencyContext } from "../../Contexts/CurrencyContext";
import { useContext, useCallback } from "react";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import "./menus.css";
import { CURR_MENU_STYLES } from "../../Constants/HeaderConstants";

const CurrMenu = () => {
    const { setCurrMenu, currMenu, changeCurr } = useContext(CurrencyContext);

    const handleCurrMenuClose = useCallback(() => {
        setCurrMenu(null);
    }, [setCurrMenu]);

    const currencies = [
        { code: "USD", name: "USD ($)", flagUrl: "https://flagcdn.com/w320/us.png", alt: "US flag" },
        { code: "EUR", name: "EUR (€)", flagUrl: "https://flagcdn.com/w320/eu.png", alt: "EU flag" },
        { code: "RUB", name: "RUR (₽)", flagUrl: "https://flagcdn.com/w320/ru.png", alt: "Russian flag" },
        { code: "AMD", name: "AMD (֏)", flagUrl: "https://flagcdn.com/w320/am.png", alt: "Armenian flag" }
    ];

    return (
        <Menu
            id="currenciesMenu"
            anchorEl={currMenu}
            open={Boolean(currMenu)}
            onClose={handleCurrMenuClose}
            PaperProps={{
                sx: CURR_MENU_STYLES
            }}
        >
            {currencies.map((currency) => (
                <MenuItem key={currency.code} onClick={() => changeCurr(currency.code)}>
                    <ListItemIcon>
                        <div className="imgContainer">
                            <img src={currency.flagUrl} alt={currency.alt} />
                        </div>
                    </ListItemIcon>
                    <ListItemText primary={currency.name} />
                </MenuItem>
            ))}
        </Menu>
    );
};

export default CurrMenu;
