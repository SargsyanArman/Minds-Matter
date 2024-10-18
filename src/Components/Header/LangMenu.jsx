import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { alpha } from "@mui/material/styles";

import "./menus.css"

const LangMenu = () => {
	const { handleLangMenuClose, langMenu, changeLang } = useContext(LangContext);

	return (
		<Menu
			id="languagesMenu"
			anchorEl={langMenu}
			open={Boolean(langMenu)}
			onClose={handleLangMenuClose}
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
					changeLang("en");
				}}
			>
				<ListItemIcon>
					<div className="imgContainer">
						<img
							src="https://flagcdn.com/w320/gb.png"
							alt="UK flag"
						/>
					</div>
				</ListItemIcon>
				<ListItemText primary="English" />
			</MenuItem>
			<MenuItem
				onClick={() => {
					changeLang("ru");
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
				<ListItemText primary="Русский" />
			</MenuItem>
			<MenuItem
				onClick={() => {
					changeLang("am");
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
				<ListItemText primary="Հայերեն" />
			</MenuItem>
		</Menu>
	);
};

export default LangMenu;
