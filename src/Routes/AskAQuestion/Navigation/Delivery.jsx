import { Box, Button, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useContext, useRef } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import ToggleButtons from "../../../Components/Orders/RightSide/ToggleButtons";
import { LangContext } from "../../../Contexts/LangContext";
import BoxMui from "../../../Components/Shared/BoxMui";
import './Responsive.css';
import './delivery.css';

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

  return (
    <ThemeModes tagName='simpleDiv' id="delivery">
      <ThemeModes tagName="h3" style={{ marginBottom: "22px" }}>
        {t(`${prefix}.title`)}
      </ThemeModes>
      <Box className="box">
        <Box className="box-content">
          <Typography variant="h4" sx={{ mb: 6, color: "white", fontSize: { xs: '16px', sm: '18px', md2: '20px' } }}>
            {t(`${prefix}.box title`)}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: "column", lg: 'row' } }}>
            {["feature1", "feature2", "feature3"].map((feature, index) => (
              <span className="feature" key={feature}>
                {index === 0 && <LocalShippingIcon sx={{ fontSize: 40 }} />}
                {index === 1 && <AutorenewIcon sx={{ fontSize: 40 }} />}
                {index === 2 && <CancelScheduleSendIcon sx={{ fontSize: 40 }} />}
                <Typography variant="h5" sx={{ mb: 2, color: "white", fontSize: { xs: '14px', sm: '16px', md2: '18px' } }}>
                  {t(`${prefix}.${feature}`)}
                </Typography>
              </span>
            ))}
          </Box>
          <Button className="details" onClick={scrollToBox}>
            <Typography variant="h6" sx={{ fontSize: { xs: '11px', sm: '16px', md2: '18px' } }}>{t(`${prefix}.details`)}</Typography>
          </Button>
        </Box>
        <Box className="image-container" sx={{ display: { xs: 'none', sm2: 'block' } }}>
          <img src="/deliveryBox1.png" alt="Carton Boxes" />
        </Box>
      </Box>
      <ThemeModes tagName="h3" sx={{ mb: 2 }}>
        {t(`${prefix}.lots of`)}
      </ThemeModes>
      <ThemeModes tagName="p" sx={{ mb: 5 }}>
        {t(`${prefix}.pick-up points`)}
      </ThemeModes>
      <ThemeModes tagName="h3" sx={{ mb: 2 }}>
        {t(`${prefix}.info`)}
      </ThemeModes>
      <BoxMui
        ref={targetBoxRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: 600,
          borderRadius: 8,
          background: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", height: 'auto' }}>
          <Box sx={{ display: "flex", flexWrap: 'wrap', gap: { xs: '61px', md2: '18px' }, width: { xs: '100%', md2: '80%' }, height: 'auto', justifyContent: { xs: 'center', sm: 'space-between' } }}>

            {renderAddresses()}
          </Box>
          <Box sx={{ width: 500, height: 500, display: { xs: 'none', md2: 'flex' }, width: '100%', alignItems: "center", justifyContent: "flex-end", }}>
            <img
              src="/cardboard-box.webp"
              alt="Carton Boxes"
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 14 }}
            />
          </Box>
        </Box>
      </BoxMui>
    </ThemeModes >
  );
};

export default Delivery;
