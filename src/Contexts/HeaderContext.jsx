import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [sign, setSign] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setSign(event.currentTarget);
  };

  const handleMenuClose = () => {
    setSign(null);
  };

  const responsiveMenuClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const responsiveMenuClose = () => {
    setOpenMenu(null);
  };

  const handleBasketClick = () => {
    navigate("/orders");
  };

  const handleFavoritesClick = () => {
    navigate("/profile/favorites");
  };

  return (
    <HeaderContext.Provider
      value={{
        sign,
        openMenu,
        handleMenuClick,
        handleMenuClose,
        responsiveMenuClick,
        responsiveMenuClose,
        handleBasketClick,
        handleFavoritesClick,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
