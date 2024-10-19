import "../../../Components/Main/ItemsList/ItemsList.css";
import { useEffect, useContext } from "react";
import Card from "../../../Components/Main/ItemsList/Card";
import { useAuth } from "../../../Hooks/use-auth";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../fireBase";
import { setFavorites } from "../../../Store/Slices/FavoriteSlices";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { Breadcrumbs } from "@mui/material";
import { LangContext } from "../../../Contexts/LangContext"
import { FAVORITES_BOX_STYLE, FAVORITES_BREADCRUMBS_STYLE } from "../../../Constants/ProfileNavigationConstants";

function Favorites() {
	const { isAuth, id } = useAuth();
	const dispatch = useDispatch();
	const { t } = useContext(LangContext);
	const prefix = "favorites"

	useEffect(() => {
		if (isAuth && id) {
			const userRef = doc(db, "users", id);
			getDoc(userRef).then((userDoc) => {
				if (userDoc.exists()) {
					const userData = userDoc.data();
					dispatch(setFavorites(userData.favorites || []));
				}
			});
		}
	}, [isAuth, id, dispatch]);
	const FAVORITE_ITEMS = useSelector((state) => state.favorites);

	return (
		<ThemeModes tagName='simpleDiv' style={FAVORITES_BOX_STYLE}>
			<Breadcrumbs aria-label="breadcrumb" sx={FAVORITES_BREADCRUMBS_STYLE}>
				<ThemeModes tagName='h1'>
					{t(`${prefix}.favorites`)}
				</ThemeModes>
			</Breadcrumbs>

			<ul className="favorties-list">
				{FAVORITE_ITEMS.map((item, index) => (
					<li key={index}>
						<Card
							id={item.id}
							itemURL={item.itemURL}
							imgSrc={item.imgSrc}
							price={item.price}
							currency={item.currency}
							seller={item.seller}
							category={item.category}
							rating={item.rating}
							rNum={item.rNum}
						/>
					</li>
				))}
			</ul>
		</ThemeModes>
	)
}

export default Favorites;
