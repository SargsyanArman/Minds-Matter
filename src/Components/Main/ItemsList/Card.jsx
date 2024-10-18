import { useContext, useState } from "react";
import HeartIcon from "@mui/icons-material/FavoriteTwoTone";
import ModalCard from "./ModalCard";
import { useAuth } from "../../../Hooks/use-auth";
import { Link, useNavigate } from "react-router-dom";
import ThemeModes from "../../Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";
import { CartContext } from "../../../Contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../../Store/Slices/FavoriteSlices";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import './ItemsList.css';
import { FAVORITE_STYLES, HEART } from "../../../Constants/MenuConstants";

const Card = ({ id, itemURL, imgSrc, price, currency, seller, category, rating, rNum }) => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const { isAuth, id: userId } = useAuth();
	const { t } = useContext(LangContext);
	const { addCartItem } = useContext(CartContext);
	const prefix = "Card";
	const favoriteItems = useSelector((state) => state.favorites);
	const dispatch = useDispatch();
	const isInFavorites = favoriteItems.some((item) => item.id === id);

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleSnackbarClose = () => setSnackbarOpen(false);

	const handleAddToCart = async () => {
		if (isAuth && userId) {
			const orderData = {
				id: id || `card-${Math.random().toString(36).slice(2, 8)}`,
				imgSrc,
				price,
				currency,
				seller,
				category,
				rating,
				rNum,
				quantity: 1,
			};

			try {
				await addCartItem(orderData);
			} catch (error) {
				console.error("Error adding or updating order: ", error);
				setSnackbarOpen(true);
			}
		} else {
			navigate("/orders");
		}
	};

	const handleFavoriteClick = () => {
		if (!isAuth) return;

		const action = isInFavorites ? removeFavorite : addFavorite;
		dispatch(action({ isAuth, id, userId, item: { id, itemURL, imgSrc, price, currency, seller, category, rating, rNum } }));
	};

	return (
		<div className="card">
			<Link
				to={itemURL}
				className="cardLink"
				onClick={(e) => {
					if (e.target.closest(".cartBtn")) {
						e.preventDefault();
						handleAddToCart();
					} else if (e.target.closest(".viewItemBtn")) {
						e.preventDefault();
						handleClickOpen();
					} else if (e.target.closest(".likeBtn")) {
						e.preventDefault();
						handleFavoriteClick();
					}
				}}
			>
				<div className="thumbnail">
					<div
						className="thumbnail-image"
						style={{ backgroundImage: `url(${imgSrc})` }}
					/>
					<button className="likeBtn">
						{isInFavorites ? (
							<FavoriteSharpIcon sx={FAVORITE_STYLES} />
						) : (
							<HeartIcon sx={HEART} />
						)}
					</button>
					<ThemeModes tagName="btnQuickView" className="viewItemBtn">
						{t(`${prefix}.view`)}
					</ThemeModes>
				</div>
				<div className="info">
					<ThemeModes tagName="price-span" className="price">
						{price} <span>{currency}</span>
					</ThemeModes>
					<p className="itemSeller">
						{seller} <span className="categories" title={category}>/ {category}</span>
					</p>
					<span className="rating">
						<i className="fa-solid fa-star"></i> {rating}
					</span>
					<span className="ratingsNumber"> &#8901; {rNum} {t(`${prefix}.votes`)}</span>
				</div>
				<ThemeModes tagName="button" className="cartBtn">
					<i className="fa-solid fa-cart-shopping"></i>
					{t(`${prefix}.add to cart`)}
				</ThemeModes>
				<ModalCard
					handleClose={handleClose}
					open={open}
					imgSrc={imgSrc}
					price={price}
					currency={currency}
					seller={seller}
					category={category}
					rating={rating}
					rNum={rNum}
					itemURL={itemURL}
					quantity={1}
					handleAddToCart={handleAddToCart}
				/>
			</Link>

			<Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
				<Alert onClose={handleSnackbarClose} severity="error" sx={{ width: "100%" }}>
					{t("Error adding item to the cart")}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default Card;
