import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LangContext } from "../../../Contexts/LangContext";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { useSelector } from "react-redux";
import { INFO_P_STYLES, ORDER_BUTTON_STYLES } from "../../../Constants/OrderPageConstants";
import { ERROR_STYLES } from "../../../Constants/GlobalConstants";

const CartData = ({ onOrder, selectedQuantity, selectedPrice }) => {
  const { emailVerified } = useSelector((state) => state.user);
  const { curr } = useContext(CurrencyContext);
  const { t } = useContext(LangContext);
  const [orderAttempted, setOrderAttempted] = useState(false);
  const prefix = "Orders page";

  const handleOrderClick = () => {
    setOrderAttempted(true);
  };

  return (
    <Box>
      <Typography>{t(`${prefix}.products`)}{selectedQuantity}</Typography>
      <Typography variant="h5" sx={{ my: "6px" }}>
        <strong>{t(`${prefix}.total`)}</strong> {selectedPrice.toFixed(2)} {curr.currSymbol}
      </Typography>
      <Link to={emailVerified ? '/payment' : null}>
        <Button
          variant="contained"
          onClick={handleOrderClick}
          sx={ORDER_BUTTON_STYLES}
        >
          {t(`${prefix}.order`)}
        </Button>
      </Link>
      {(orderAttempted && !emailVerified) && (
        <p style={INFO_P_STYLES}>
          Please verify <span style={ERROR_STYLES}>Your Email</span>
        </p>
      )}
    </Box>
  );
};

export default CartData;
