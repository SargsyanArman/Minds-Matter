import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../../Contexts/LangContext";

import "./puchaseNav.css";
import { FD_BOX_STYLES, FD_COMMENT_STYLES } from "../../../../Constants/ProfileNavigationConstants";

const Deliveries = () => {
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const navigate = useNavigate();

  return (
    <ThemeModes tagName="simpleDiv" style={FD_BOX_STYLES}>
      <ThemeModes tagName="h3">{t(`${prefix}.deliveries title`)}</ThemeModes>
      <ThemeModes tagName="gn-p" style={FD_COMMENT_STYLES}>
        {t(`${prefix}.deliveries text`)}
      </ThemeModes>
      <ThemeModes tagName="button_mode" onClick={() => navigate('/orders')}>{t(`${prefix}.deliveries button`)}</ThemeModes>
    </ThemeModes>
  );
};

export default Deliveries;
