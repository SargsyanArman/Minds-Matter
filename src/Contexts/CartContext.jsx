import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useAuth } from "../Hooks/use-auth";
import { db } from "../fireBase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const { isAuth, id } = useAuth();

  const fetchCartItems = useCallback(async () => {
    if (isAuth && id) {
      const userRef = doc(db, "users", id);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setCartItems(userData.orders || []);
      }
    }
  }, [isAuth, id]);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const updateCartItemQuantity = useCallback(async (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      (item.id === itemId) ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCartItems);
    if (isAuth && id) {
      await updateDoc(doc(db, "users", id), { orders: updatedCartItems });
    }
  }, [cartItems, id, isAuth]);

  const addCartItem = useCallback(async (newItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id);

      if (itemExists) {
        const updatedCartItems = prevItems.map((item) =>
          (item.id === newItem.id)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );

        if (isAuth && id) {
          try {
            updateDoc(doc(db, "users", id), { orders: updatedCartItems });
          } catch (error) {
            console.error("Error updating item quantity in Firebase:", error);
          }
        }

        return updatedCartItems;
      } else {
        const newCartItems = [...prevItems, { ...newItem, quantity: 1 }];

        if (isAuth && id) {
          try {
            updateDoc(doc(db, "users", id), { orders: newCartItems });
          } catch (error) {
            console.error("Error adding item to Firebase:", error);
          }
        }

        return newCartItems;
      }
    });
  }, [id, isAuth]);

  const removeCartItem = useCallback(async (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    if (isAuth && id) {
      await updateDoc(doc(db, "users", id), { orders: updatedCartItems });
    }
  }, [cartItems, id, isAuth]);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (parseInt(item.quantity, 10) || 1),
    0,
  );
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + (parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 1),
    0,
  );

  const memoizedCartValues = useMemo(() => {
    return {
      cartItems,
      updateCartItemQuantity,
      addCartItem,
      removeCartItem,
      totalQuantity,
      totalPrice
    }

  }, [cartItems, totalQuantity, totalPrice, updateCartItemQuantity, addCartItem, removeCartItem])

  return (
    <CartContext.Provider value={memoizedCartValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider

