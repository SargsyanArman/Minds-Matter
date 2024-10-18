import { useContext } from "react";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../../../Contexts/LangContext";

const Questions = () => {
  const { t } = useContext(LangContext);
  const prefix = "Feedback";

  const navigate = useNavigate();

  return (
    <ThemeModes tagName="simpleDiv" style={{ padding: "32px 0 32px 32px" }}>
      <ThemeModes tagName="h3">{t(`${prefix}.questions title`)}</ThemeModes>
      <ThemeModes tagName="gn-p" style={{ margin: "22px 0" }}>
        {t(`${prefix}.questions text`)}
      </ThemeModes>
      <ThemeModes tagName="buttonModeDeliveris" onClick={() => navigate('/')}>{t(`${prefix}.questions button`)}</ThemeModes>
    </ThemeModes>
  );
};

export default Questions;
