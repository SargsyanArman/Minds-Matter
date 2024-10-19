import { Box, Button, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useContext, useRef } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";
import BoxMui from "../../../Components/Shared/BoxMui";
import './responsive.css';
import './delivery.css';
import { DELIVERY_BOX_STYLES, DELIVERY_BOX_STYLES_FIFTH, DELIVERY_BOX_STYLES_FORTH, DELIVERY_BOX_STYLES_SECOND, DELIVERY_BOX_STYLES_THIRD, DELIVERY_CARTON_STYLES, DELIVERY_IMAGE_STYLES, DELIVERY_TITLE_STYLES, DETAILS_BUTTON_STYLES, FEAUTRE_STYLES, FONT_SIZE_FORTY } from "../../../Constants/AskAQuestionsConstants";

const Address = ({ address, text }) => (
  <Box sx={{ display: "flex", flexDirection: "column", mt: 3, mb: 1, gap: 1 }}>
    <ThemeModes tagName="h4">{address}</ThemeModes>
    <ThemeModes tagName="p">{text}</ThemeModes>
  </Box>
);

const Delivery = () => {
  const targetBoxRef = useRef(null);
  const { t } = useContext(LangContext);
  const prefix = "Delivery";
  const deliveryOfficeText = t(`${prefix}.delivery office`);

  const scrollToBox = () => {
    targetBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderAddresses = () => Array.from({ length: 10 }, (_, i) => (
    <Address
      key={i + 1}
      address={t(`${prefix}.address${i + 1}`)}
      text={deliveryOfficeText}
    />
  ));

  const sectionContent = [
    { tag: "h3", text: `${prefix}.lots of`, sx: { mb: 2 } },
    { tag: "p", text: `${prefix}.pick-up points`, sx: { mb: 5 } },
    { tag: "h3", text: `${prefix}.info`, sx: { mb: 2 } }
  ];

  return (
    <ThemeModes tagName='simpleDiv' id="delivery">
      <ThemeModes tagName="h3" style={{ marginBottom: "22px" }}>
        {t(`${prefix}.title`)}
      </ThemeModes>
      <Box className="box">
        <Box className="box-content">
          <Typography variant="h4" sx={DELIVERY_TITLE_STYLES}>
            {t(`${prefix}.box title`)}
          </Typography>
          <Box sx={DELIVERY_BOX_STYLES}>
            {["feature1", "feature2", "feature3"].map((feature, index) => (
              <span className="feature" key={feature}>
                {index === 0 && <LocalShippingIcon sx={FONT_SIZE_FORTY} />}
                {index === 1 && <AutorenewIcon sx={FONT_SIZE_FORTY} />}
                {index === 2 && <CancelScheduleSendIcon sx={FONT_SIZE_FORTY} />}
                <Typography variant="h5" sx={FEAUTRE_STYLES}> {t(`${prefix}.${feature}`)} </Typography>
              </span>
            ))}
          </Box>
          <Button className="details" onClick={scrollToBox}>
            <Typography variant="h6" sx={DETAILS_BUTTON_STYLES}>{t(`${prefix}.details`)}</Typography>
          </Button>
        </Box>
        <Box className="image-container" sx={DELIVERY_CARTON_STYLES}>
          <img src="/deliveryBox1.png" alt="Carton Boxes" />
        </Box>
      </Box>

      {sectionContent.map((item, index) => (
        <ThemeModes key={index} tagName={item.tag} sx={item.sx}> {t(item.text)} </ThemeModes>
      ))}

      <BoxMui ref={targetBoxRef} sx={DELIVERY_BOX_STYLES_SECOND} >
        <Box sx={DELIVERY_BOX_STYLES_THIRD}>
          <Box sx={DELIVERY_BOX_STYLES_FORTH}>
            {renderAddresses()}
          </Box>
          <Box sx={DELIVERY_BOX_STYLES_FIFTH}>
            <img src="/cardboard-box.webp" alt="Carton Boxes" style={DELIVERY_IMAGE_STYLES} />
          </Box>
        </Box>
      </BoxMui>
    </ThemeModes>
  );
};

export default Delivery;
