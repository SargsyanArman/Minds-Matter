import { CurrencyContext } from "../../Contexts/CurrencyContext";
import { useContext, useCallback } from "react";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { alpha } from "@mui/material/styles";

import "./menus.css"

const LangMenu = () => {
    const { setCurrMenu, currMenu, changeCurr } = useContext(CurrencyContext);

    const handleCurrMenuClose = useCallback(() => {
        setCurrMenu(null);
    }, [setCurrMenu]);

    return (
        <Menu
            id="currenciesMenu"
            anchorEl={currMenu}
            open={Boolean(currMenu)}
            onClose={handleCurrMenuClose}
            PaperProps={{
                sx: {
                    width: 150,
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2))",
                    mt: 1.5,
                    "& .MuiMenuItem-root": {
                        "&:hover": {
                            backgroundColor: alpha("#4caf50", 0.1),
                        },
                    },
                },
            }}
        >
            <MenuItem
                onClick={() => {
                    changeCurr("USD");
                }}
            >
                <ListItemIcon>
                    <div className="imgContainer">
                        <img
                            src="https://flagcdn.com/w320/us.png"
                            alt="US flag"
                        />
                    </div>
                </ListItemIcon>
                <ListItemText primary="USD ($)" />
            </MenuItem>
            <MenuItem
                onClick={() => {
                    changeCurr("EUR");
                }}
            >
                <ListItemIcon>
                    <div className="imgContainer">
                        <img
                            src="https://flagcdn.com/w320/eu.png"
                            alt="EU flag"
                        />
                    </div>
                </ListItemIcon>
                <ListItemText primary="EUR (€)" />
            </MenuItem>
            <MenuItem
                onClick={() => {
                    changeCurr("RUB");
                }}
            >
                <ListItemIcon>
                    <div className="imgContainer">
                        <img
                            src="https://flagcdn.com/w320/ru.png"
                            alt="Russian flag"
                        />
                    </div>
                </ListItemIcon>
                <ListItemText primary="RUR (₽)" />
            </MenuItem>
            <MenuItem
                onClick={() => {
                    changeCurr("AMD");
                }}
            >
                <ListItemIcon>
                    <div className="imgContainer">
                        <img
                            src="https://flagcdn.com/w320/am.png"
                            alt="Armenian flag"
                        />
                    </div>
                </ListItemIcon>
                <ListItemText primary="AMD (֏)" />
            </MenuItem>
        </Menu>
    );
};

export default LangMenu;
