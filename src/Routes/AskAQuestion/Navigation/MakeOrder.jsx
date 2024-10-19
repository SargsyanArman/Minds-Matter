import { useContext } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { BoldTextNumeric, SimpleText } from "./ReadyMadeTemplates";
import { Box } from "@mui/material";
import { LangContext } from "../../../Contexts/LangContext";
import './Responsive.css';
import { MAKE_ORDER_BOX_STYLES, MAKE_ORDER_IMAGE_STYLES, MAKE_ORDER_STEPS } from "../../../Constants/AskAQuestionsConstants";

const MakeOrder = () => {
  const { t } = useContext(LangContext);
  const prefix = "Make an order";

  return (
    <ThemeModes tagName='simpleDiv' className='make-order'>
      <ThemeModes tagName="h3">{t(`${prefix}.title`)}</ThemeModes>
      <BoldTextNumeric text={t(`${prefix}.step1`)} num="1." />
      <Box sx={MAKE_ORDER_BOX_STYLES}>
        <img src="/book3.jpg" alt="books" style={MAKE_ORDER_IMAGE_STYLES} />
      </Box>

      {MAKE_ORDER_STEPS.map((step) => (
        <div key={step}>
          <BoldTextNumeric text={t(`${prefix}.step${step}`)} num={`${step}.`} />
          <SimpleText text={t(`${prefix}.step${step} detail`)} />
        </div>
      ))}
    </ThemeModes>
  );
};

export default MakeOrder;
