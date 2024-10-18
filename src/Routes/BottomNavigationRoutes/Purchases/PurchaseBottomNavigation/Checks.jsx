import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../../Contexts/LangContext";

const Checks = () => {
  const { t } = useContext(LangContext);
  const prefix = "Purchases";

  const navigate = useNavigate();

  return (
    <ThemeModes tagName="simpleDiv" style={{ padding: "32px 0 32px 32px" }}>
      <ThemeModes tagName="h3" style={{ margin: "20px 0" }}>
        {t(`${prefix}.checks title`)}
      </ThemeModes>
      <ThemeModes tagName="gn-p" style={{ paddingBottom: "20px" }}>
        {t(`${prefix}.checks text`)}
      </ThemeModes>
      <ThemeModes tagName="buttonModeDeliveris" onClick={() => navigate('/')}>{t(`${prefix}.checks button`)}</ThemeModes>
    </ThemeModes>
  );
};

export default Checks;
