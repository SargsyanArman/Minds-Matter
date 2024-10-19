import { useContext } from "react";
import ThemeModes from "../../../../Components/Shared/ThemeModes";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../../../Contexts/LangContext";
import { FD_BOX_STYLES, FD_COMMENT_STYLES } from "../../../../Constants/ProfileNavigationConstants";

const Comments = () => {
  const { t } = useContext(LangContext);
  const prefix = "Feedback";

  const navigate = useNavigate();

  return (
    <ThemeModes tagName="simpleDiv" style={FD_BOX_STYLES}>
      <ThemeModes tagName="h3">{t(`${prefix}.comments title`)}</ThemeModes>
      <ThemeModes tagName="gn-p" style={FD_COMMENT_STYLES}>
        {t(`${prefix}.comments text`)}
      </ThemeModes>
      <ThemeModes tagName="button_mode" onClick={() => navigate('/')}>{t(`${prefix}.comments button`)}</ThemeModes>
    </ThemeModes>
  );
};

export default Comments;
