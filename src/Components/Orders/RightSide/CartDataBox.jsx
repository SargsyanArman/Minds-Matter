import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { LangContext } from "../../../Contexts/LangContext";
import { CartContext } from "../../../Contexts/CartContext";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";

const CartDataBox = () => {
  const { totalQuantity, totalPrice } = useContext(CartContext);
  const { curr } = useContext(CurrencyContext);

  const { t } = useContext(LangContext);
  const prefix = "Orders page";

  return (
    <Box>
      <Typography>{t(`${prefix}.products`)}{totalQuantity}</Typography>
      <Typography variant="h5" sx={{ my: "6px" }}>
        <strong>{t(`${prefix}.total`)}</strong> {totalPrice}{curr.currSymbol}
      </Typography>
    </Box>
  );
};

export default CartDataBox;
