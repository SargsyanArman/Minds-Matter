import { useContext } from "react";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../../../Contexts/LangContext";
import { FD_BOX_STYLES, FD_COMMENT_STYLES } from "../../../../Constants/ProfileNavigationConstants";

const Questions = () => {
  const { t } = useContext(LangContext);
  const prefix = "Feedback";

  const navigate = useNavigate();

  return (
    <ThemeModes tagName="simpleDiv" style={FD_BOX_STYLES}>
      <ThemeModes tagName="h3">{t(`${prefix}.questions title`)}</ThemeModes>
      <ThemeModes tagName="gn-p" style={FD_COMMENT_STYLES}>
        {t(`${prefix}.questions text`)}
      </ThemeModes>
      <ThemeModes tagName="button_mode" onClick={() => navigate('/')}>{t(`${prefix}.questions button`)}</ThemeModes>
    </ThemeModes>
  );
};

export default Questions;
