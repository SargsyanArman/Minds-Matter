import { useContext, useState } from "react";
import TextWithIcon from "./TextWithIcon";
import { Box, Typography, useMediaQuery } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import PushPinIcon from "@mui/icons-material/PushPin";
import { CONTAINER_BG } from "../../../Constants/OrderPageConstants";
import { LangContext } from "../../../Contexts/LangContext";
import ToggleButtons from "./ToggleButtons";

import SalesWithUs from "./SalesWithUs";
import CartData from "./CartDataOrderButton";
import AgreementForm from "./AgreementForm";

const RightSideMain = ({ totalQuantity, totalPrice }) => {
  const [showSalesWithUs, setShowSalesWithUs] = useState(true);
  const handleHideSalesWithUs = () => setShowSalesWithUs(false);
  const { t } = useContext(LangContext);
  const prefix = "Orders page";


  const isLargeScreen = useMediaQuery('(min-width:960px)');

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: '15px',
        width: "100%",
      }}
    >

      <Box >
        <TextWithIcon
          text={
            <Typography variant="body3" fontWeight="bold">
              {t(`${prefix}.location`)}
            </Typography>
          }
          IconComponent={PushPinIcon}
        />
        <Typography
          variant="body3"
          color={CONTAINER_BG}
          sx={{ marginBottom: "14px" }}
        >
          H. Paronyan 3, Yerevan
        </Typography>
      </Box>


      <Box
      >
        <TextWithIcon
          text={
            <Typography variant="body3" fontWeight="bold">
              {t(`${prefix}.payment`)}
            </Typography>
          }
          IconComponent={CreateIcon}
        />
        <ToggleButtons
          rightLabel={t(`${prefix}.immediately`)}
          leftLabel={t(`${prefix}.upon receipt`)}
        />
      </Box>


      {isLargeScreen && showSalesWithUs && (

        <SalesWithUs onHide={handleHideSalesWithUs} />

      )}


      <Box

      >
        <CartData selectedQuantity={totalQuantity} selectedPrice={totalPrice} />
      </Box>


      <Box

      >
        <AgreementForm />
      </Box>
    </Box>
  );
};
export default RightSideMain;
