import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import "./Menu.css";
import { LANG_MENU_STYLES } from "../../Constants/HeaderConstants";

const LangMenu = () => {
	const { handleLangMenuClose, langMenu, changeLang } = useContext(LangContext);

	const languages = [
		{ code: "en", name: "English", flagUrl: "https://flagcdn.com/w320/gb.png", alt: "UK flag" },
		{ code: "ru", name: "Русский", flagUrl: "https://flagcdn.com/w320/ru.png", alt: "Russian flag" },
		{ code: "am", name: "Հայերեն", flagUrl: "https://flagcdn.com/w320/am.png", alt: "Armenian flag" },
	];

	return (
		<Menu
			id="languagesMenu"
			anchorEl={langMenu}
			open={Boolean(langMenu)}
			onClose={handleLangMenuClose}
			PaperProps={LANG_MENU_STYLES}
		>
			{languages.map((lang) => (
				<MenuItem key={lang.code} onClick={() => changeLang(lang.code)}>
					<ListItemIcon>
						<div className="imgContainer">
							<img src={lang.flagUrl} alt={lang.alt} />
						</div>
					</ListItemIcon>
					<ListItemText primary={lang.name} />
				</MenuItem>
			))}
		</Menu>
	);
};

export default LangMenu;
