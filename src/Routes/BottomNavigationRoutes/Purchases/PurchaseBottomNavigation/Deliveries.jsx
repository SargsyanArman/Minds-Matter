import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../../Contexts/LangContext";

import "./puchaseNav.css";

const Deliveries = () => {
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const navigate = useNavigate();

  return (
    <ThemeModes tagName="simpleDiv" style={{ padding: "32px 0 32px 32px" }}>
      <ThemeModes tagName="h3">{t(`${prefix}.deliveries title`)}</ThemeModes>
      <ThemeModes tagName="gn-p" style={{ margin: "22px 0" }}>
        {t(`${prefix}.deliveries text`)}
      </ThemeModes>
      <ThemeModes tagName="button_mode" onClick={() => navigate('/orders')}>{t(`${prefix}.deliveries button`)}</ThemeModes>
    </ThemeModes>
  );
};

export default Deliveries;
