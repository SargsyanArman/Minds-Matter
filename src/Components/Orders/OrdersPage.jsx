import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import OrderedProduct from "./LeftSide/OrderedProduct";
import RightSideMain from "./RightSide/RightSideMain";
import MyCheckbox from "./LeftSide/Checkbox";
import { CartContext } from "../../Contexts/CartContext";
import { useAuth } from "../../Hooks/use-auth";
import UnauthorizedAccess from "../../helperComponents/UnauthorizedAccess";
import { LangContext } from "../../Contexts/LangContext";
import { CurrencyContext } from "../../Contexts/CurrencyContext";
import BoxMui from "../Shared/BoxMui";
import BoxMuiSecond from "../Shared/BoxMuiSecound";
import { useMediaQuery } from "@mui/material";

const OrdersPageContent = () => {
  const { cartItems } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const { curr, exchange } = useContext(CurrencyContext);
  const { t } = useContext(LangContext);
  const prefix = "Orders page";
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isDesktopSm = useMediaQuery('(min-width: 700px)');

  const selectedQuantity = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + (item.quantity || 1), 0);

  const selectedPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => {
      const price = item.discountedPrice || item.price;
      return sum + price * (item.quantity || 1);
    }, 0);

  const exchangedPrice = exchange(selectedPrice, "USD");
  const finalPrice = typeof exchangedPrice === "number" ? exchangedPrice : 0;

  return (
    <BoxMuiSecond
      display="flex"
      flexDirection={isDesktop ? 'row' : 'column'}
      alignItems="center"
      gap={2}
      p={isDesktop ? 2 : 0}
      sx={{
        width: "100%",
        height: isDesktop ? "100vh" : "auto",
        backgroundColor: "backgroundColor",
        justifyContent: "space-between",
        overflowY: 'auto',
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
      }}
    >
      <BoxMui
        my={isDesktop ? 4 : 0}
        display="flex"
        gap={4}
        p={isDesktop ? 4 : 1}
        sx={{
          width: isDesktop ? "70%" : "100%",
          height: isDesktop ? "90%" : "auto",
          backgroundColor: "backgroundColor",
          border: "none",
          boxShadow: 2,
          borderRadius: "10px",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h6">
          {t(`${prefix}.heading`)}
          <Typography
            component="span"
            variant="body2"
            sx={{ verticalAlign: "middle" }}
          >
            {selectedQuantity} {t(`${prefix}.selected`)} ({selectedPrice.toFixed(2)} {curr.currSymbol})
          </Typography>
        </Typography>

        <Box display="flex" sx={{ justifyContent: "space-between", }}>
          {cartItems.length > 0 && (
            <MyCheckbox
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              cartItems={cartItems}
            />
          )}
        </Box>
        <OrderedProduct
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </BoxMui>

      <BoxMui
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={4}
        sx={{
          width: isDesktop ? "28%" : "100%",
          height: isDesktop ? "90%" : "auto",
          backgroundColor: "backgroundColor",
          border: "none",
          boxShadow: 2,
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <RightSideMain
          totalQuantity={selectedQuantity}
          totalPrice={selectedPrice}
        />
      </BoxMui>
    </BoxMuiSecond>
  );
};

const OrdersPage = () => {
  const { isAuth } = useAuth();

  return isAuth ? <OrdersPageContent /> : <UnauthorizedAccess />;
};

export default OrdersPage;
