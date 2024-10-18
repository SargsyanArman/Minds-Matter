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

function Favorites() {
	const { isAuth, id } = useAuth();
	const dispatch = useDispatch();
	const  {t} = useContext(LangContext);
	const prefix ="favorites"

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
	const favoriteItems = useSelector((state) => state.favorites);

	return (
		<ThemeModes tagName='simpleDiv' style={{ padding: '30px 0' }}>
			<Breadcrumbs aria-label="breadcrumb" sx={{ margin: "15px 30px" }}>
				<ThemeModes tagName='h1'>
					{t(`${prefix}.favorites`)}
				</ThemeModes>
			</Breadcrumbs>

			<ul className="favorties-list">
				{favoriteItems.map((item, index) => (
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
