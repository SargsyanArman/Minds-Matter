import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../../Contexts/LangContext";
import { FD_BOX_STYLES, FD_COMMENT_STYLES } from "../../../../Constants/ProfileNavigationConstants";

const Checks = () => {
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const navigate = useNavigate();

  return (
    <ThemeModes tagName="simpleDiv" style={FD_BOX_STYLES}>
      <ThemeModes tagName="h3" style={FD_COMMENT_STYLES}>
        {t(`${prefix}.checks title`)}
      </ThemeModes>
      <ThemeModes tagName="gn-p" style={{ paddingBottom: "20px" }}>
        {t(`${prefix}.checks text`)}
      </ThemeModes>
      <ThemeModes tagName="button_mode" onClick={() => navigate('/')}>{t(`${prefix}.checks button`)}</ThemeModes>
    </ThemeModes>
  );
};

export default Checks;
