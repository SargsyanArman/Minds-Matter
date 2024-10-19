import ThemeModes from "../../../Components/Shared/ThemeModes";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../../../Contexts/LangContext";
import './Communication.css';
import { COMM_BOX_STYLES, COMM_SUB_TITLE_STYLES } from "../../../Constants/ProfileNavigationConstants";

const Communications = () => {
  const { t } = useContext(LangContext);
  const prefix = "Communications";

  return (
    <ThemeModes tagName="simpleDiv" style={COMM_BOX_STYLES}>
      <ThemeModes tagName="h3">{t(`${prefix}.title`)}</ThemeModes>
      <ThemeModes tagName="h5" style={COMM_SUB_TITLE_STYLES}>
        {t(`${prefix}.subtitle`)}
      </ThemeModes>
      <ThemeModes tagName="gn-p">
        {t(`${prefix}.text1`)}
      </ThemeModes>
      <ThemeModes className='communications-info'>
        <ThemeModes tagName="h5">mm@mindsmater.am</ThemeModes>
        <Link to="/faq/ask-a-question">
          <ThemeModes tagName="simpleButton">
            {t(`${prefix}.faqLink`)}
          </ThemeModes>
        </Link>
      </ThemeModes>
    </ThemeModes>
  );
};

export default Communications;
