import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../fireBase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const favoriteSlice = createSlice({
	name: "favorites",
	initialState: [],
	reducers: {
		setFavorites: (state, action) => {
			return action.payload;
		},
		addFavorite: (state, action) => {
			state.push(action.payload.item);
			if (action.payload.isAuth && action.payload.userId) {
				updateDoc(doc(db, "users", action.payload.userId), {
					favorites: arrayUnion(action.payload.item),
				});
			}
		},
		removeFavorite: (state, action) => {
			const newState = state.filter((it) => it.id !== action.payload.id);
			if (action.payload.isAuth && action.payload.userId) {
				updateDoc(doc(db, "users", action.payload.userId), {
					favorites: newState,
				});
			}
			return newState;
		},
	},
});

export const { setFavorites, addFavorite, removeFavorite } =
	favoriteSlice.actions;

export default favoriteSlice.reducer;
