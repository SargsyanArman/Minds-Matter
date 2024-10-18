import { useContext } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { BoldTextNumeric, SimpleText } from "./ReadyMadeTemplates";
import { Box } from "@mui/material";
import { LangContext } from "../../../Contexts/LangContext";
import './Responsive.css'
const MakeOrder = () => {
  const { t } = useContext(LangContext);
  const prefix = "Make an order";

  return (
    <ThemeModes tagName='simpleDiv' className='make-order'>
      <ThemeModes tagName="h3">{t(`${prefix}.title`)}</ThemeModes>
      <BoldTextNumeric text={t(`${prefix}.step1`)} num="1." />
      <Box
        sx={{
          width: "100%",
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <img
          src="/book3.jpg"
          alt="books"
          style={{
            width: "90%",
            height: "100%",
            borderRadius: "14px",
          }}
        />
      </Box>
      <BoldTextNumeric text={t(`${prefix}.step2`)} num="2." />
      <BoldTextNumeric text={t(`${prefix}.step3`)} num="3." />
      <SimpleText text={t(`${prefix}.step3 detail`)} />
      <BoldTextNumeric text={t(`${prefix}.step4`)} num="4." />
      <SimpleText text={t(`${prefix}.step4 detail`)} />
      <BoldTextNumeric text={t(`${prefix}.step5`)} num="5." />
      <SimpleText text={t(`${prefix}.step5 detail`)} />
      <BoldTextNumeric text={t(`${prefix}.step6`)} num="6." />
      <SimpleText text={t(`${prefix}.step6 detail`)} />
      <BoldTextNumeric text={t(`${prefix}.step7`)} num="7." />
      <SimpleText text={t(`${prefix}.step7 detail`)} />
    </ThemeModes>
  );
};
export default MakeOrder;
