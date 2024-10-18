import { useState, useEffect, useContext } from "react";
import { Box, Typography, CardMedia, Checkbox, Tooltip, useMediaQuery } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import QuantitySelector from "./QuantitySelector";
import { CartContext } from "../../../Contexts/CartContext";
import { LangContext } from "../../../Contexts/LangContext";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import ThemeModes from "../../Shared/ThemeModes";
import "./ResponsiveLeftSide.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, setFavorites } from "../../../Store/Slices/FavoriteSlices";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useAuth } from "../../../Hooks/use-auth";
import { db } from "../../../fireBase";
import { doc, getDoc } from "firebase/firestore";
import { CHECKBOX_STYLES, MAX_WIDTH, ORDER_BOX_STYLES, ORDER_BOX_STYLES_FOURTH, ORDER_BOX_STYLES_SECOND, ORDER_BOX_STYLES_THIRD, ORDER_BUTTON_FAVORITE, ORDER_DELETE_STYLES, ORDER_FAV_BORDER_COLOR, ORDER_SPAN_STYLES, ORDER_STYLES, ORDER_TEXT_LINE, TEXT_RESPONSIVE_STYLES, TEXT_STYLES } from "../../../Constants/OrderPageConstants";
import { FAVORITE_STYLES } from "../../../Constants/MenuConstants";

export default function OrderedProduct({ selectedItems, setSelectedItems }) {
	const isDesktopSm = useMediaQuery("(min-width: 700px)");
	const isDesktopXs2 = useMediaQuery("(min-width: 400px)");
	const { cartItems, updateCartItemQuantity, removeCartItem } =
		useContext(CartContext);
	console.log(cartItems);
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites);

	const { isAuth, id: userId } = useAuth();
	useEffect(() => {
		if (isAuth && userId) {
			const userRef = doc(db, "users", userId);
			getDoc(userRef).then((userDoc) => {
				if (userDoc.exists()) {
					const userData = userDoc.data();
					dispatch(setFavorites(userData.favorites || []));
				}
			});
		}
	}, [isAuth, userId, dispatch]);

	const [userOrders, setUserOrders] = useState([]);
	const { curr, exchange } = useContext(CurrencyContext);
	const { t } = useContext(LangContext);
	const prefix = "Orders page";

	useEffect(() => {
		setUserOrders(cartItems);
		setSelectedItems((prevSelected) =>
			prevSelected.filter((id) =>
				cartItems.some((item) => item.id === id),
			),
		);
	}, [cartItems, setSelectedItems]);

	const handleIncrement = (itemId) => {
		const index = userOrders.findIndex((item) => item.id === itemId);
		if (index !== -1) {
			const quantity = userOrders[index].quantity || 1;
			updateCartItemQuantity(itemId, quantity + 1);
		}
	};

	const handleDecrement = (itemId) => {
		const index = userOrders.findIndex((item) => item.id === itemId);
		if (index !== -1) {
			const quantity = userOrders[index].quantity || 1;
			updateCartItemQuantity(itemId, Math.max(quantity - 1, 1));
		}
	};

	const handleDelete = (itemId) => {
		removeCartItem(itemId);
	};

	const handleCheckboxChange = (itemId) => {
		setSelectedItems((prevSelected) =>
			prevSelected.includes(itemId)
				? prevSelected.filter((id) => id !== itemId)
				: [...prevSelected, itemId],
		);
	};

	const safeParseFloat = (value) => {
		const parsed = parseFloat(value);
		return isNaN(parsed) ? 0 : parsed;
	};
	return (
		<Box sx={ORDER_STYLES}>
			{userOrders.map((item) => {
				const id = item.id;
				const isInFavorites = favorites.some((i) => i.id === id);

				const imgSrc = item.imgSrc;
				const currency = item.currency;
				const seller = item.seller;
				const category = item.category;
				const rating = item.rating;
				const rNum = item.rNum;

				const quantity = item.quantity || 1;
				const price = safeParseFloat(item.price);
				const handleFavoriteClick = () => {
					if (isInFavorites) {
						dispatch(removeFavorite({ isAuth, id, userId }));
					} else {
						dispatch(
							addFavorite({
								isAuth,
								userId,
								item: {
									id,
									imgSrc,
									price,
									currency,
									seller,
									category,
									rating,
									rNum,
								},
							}),
						);
					}
				};
				const discountedPrice = item.discountedPrice
					? safeParseFloat(item.discountedPrice)
					: null;

				return (
					<Box key={item.id} sx={{
						flexDirection: isDesktopSm ? "row" : "column", ...ORDER_BOX_STYLES
					}}>
						<Checkbox checked={selectedItems.includes(item.id)} onChange={() => handleCheckboxChange(item.id)} sx={CHECKBOX_STYLES} />
						<Box sx={ORDER_BOX_STYLES_SECOND}>
							<CardMedia
								component="img"
								sx={{ width: isDesktopXs2 ? 100 : 60, height: isDesktopXs2 ? 100 : 60, borderRadius: 1, }}
								image={item.imgSrc}
								alt="Item Image"
							/>

							<Box style={MAX_WIDTH}>
								<span>
									<Typography variant="body1"> {item.seller} </Typography>
									<Tooltip title={item.category} arrow>
										<Typography variant="body2" color="textSecondary" noWrap style={TEXT_STYLES} > {item.category} </Typography>
									</Tooltip>

									<Typography variant="body2"
										color="textSecondary"
										sx={TEXT_RESPONSIVE_STYLES}
									>
										{t(`${prefix}.return`)}
										<span style={ORDER_SPAN_STYLES}>
											{exchange(5, "USD")}{" "}
											{curr.currSymbol}
										</span>
									</Typography>
								</span>
							</Box>
						</Box>
						<Box sx={ORDER_BOX_STYLES_THIRD} >
							<QuantitySelector quantity={quantity} onIncrement={() => handleIncrement(item.id)} onDecrement={() => handleDecrement(item.id)} />
							<Box sx={ORDER_BOX_STYLES_FOURTH} >
								<Typography className="flex-col"> <ThemeModes className="purpleP" tagName="purpleP" > {t(`${prefix}.special`)} </ThemeModes>
									{discountedPrice !== null ? (
										<>
											<ThemeModes className="purpleP-money" tagName="purpleP" >
												{curr.currSymbol}{" "}
												{
													+(
														exchange(
															discountedPrice,
															"USD",
														) * quantity
													).toFixed(2)
												}
												{"    "}
											</ThemeModes>
											<ThemeModes className="purpleP-money" tagName="purpleP" style={ORDER_TEXT_LINE}>
												{curr.currSymbol}{" "}
												{
													+(
														exchange(price, "USD") *
														quantity
													).toFixed(2)
												}
											</ThemeModes>
										</>
									) : (
										<ThemeModes className="purpleP-money" tagName="purpleP">
											{curr.currSymbol}{" "}
											{
												+(
													exchange(price, "USD") *
													quantity
												).toFixed(2)
											}
										</ThemeModes>
									)}
								</Typography>
								<button
									onClick={handleFavoriteClick}
									style={ORDER_BUTTON_FAVORITE}
								>
									{isInFavorites ? (<FavoriteSharpIcon sx={FAVORITE_STYLES} />
									) : (<FavoriteBorderIcon fontSize="large" style={ORDER_FAV_BORDER_COLOR} />
									)}
								</button>
								<DeleteOutlineIcon fontSize="large" sx={ORDER_DELETE_STYLES} onClick={() => handleDelete(item.id)} />
							</Box>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
}
