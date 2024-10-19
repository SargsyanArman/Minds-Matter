import { useContext, useEffect } from "react";
import Card from "./Card";
import "./ItemsList.css";
import { sellers, bookPrices } from "../../../Constants/bookPrices";
import CircularProgress from "../../../HelperComponents/CircularProgress";
import { SearchContext } from "../../../Contexts/SearchContext";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { useAuth } from "../../../Hooks/use-auth";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../fireBase";
import { setFavorites } from "../../../Store/Slices/FavoriteSlices";

const List = () => {
	const { books, loading } = useContext(SearchContext);
	const { curr, exchange } = useContext(CurrencyContext);
	const { isAuth, id } = useAuth();
	const dispatch = useDispatch();

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

	const cardsArr = books.map((book, index) => {
		return (<li key={book.id || `card-${index}`}>
			<Card
				id={book.id || `card-${index}`}
				itemURL={book.volumeInfo.infoLink}
				imgSrc={book.volumeInfo.imageLinks?.thumbnail}
				price={exchange(bookPrices[`book-${index + 1}`], "USD")}
				currency={curr.currSymbol}
				seller={sellers[`seller-${index + 1}`]}
				category={book.volumeInfo.title}
				rating={book.volumeInfo.averageRating || "N/A"}
				rNum={book.volumeInfo.ratingsCount || 0}
				quantity={1}
			/>
		</li>)
	});

	return (
		<ul className="list">{loading ? <CircularProgress /> : cardsArr}</ul>
	);
};

export default List;
