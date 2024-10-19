import { useContext } from "react";
import ContactCards from "./ContactCards";

import "./Contact.css";
import { LangContext } from "../../../Contexts/LangContext";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { t } = useContext(LangContext);
  const prefix = "Contacts";
  const navigate = useNavigate()
  return (
    <ThemeModes tagName='simpleDiv' className="contact">
      <h2>{t(`${prefix}.title`)}</h2>
      <div className="contact-cards">
        <ThemeModes tagName='gradient-div-2' className="write-us">
          <h2>{t(`${prefix}.card1 title`)}</h2>
          <p>
            {t(`${prefix}.card1 text`)}<br></br>
            <span className="write-us-span">{t(`${prefix}.card1 text span`)}</span>
          </p>
          <span className="icon"></span>
          <button onClick={() => navigate('/faq/ask-a-question')}>{t(`${prefix}.card1 button`)}</button>
        </ThemeModes>
        <ContactCards
          headerText={t(`${prefix}.card2 title`)}
          bodyText={t(`${prefix}.card2 text`)}
          text={t(`${prefix}.card2 link`)}
        />
        <ContactCards
          headerText={t(`${prefix}.card3 title`)}
          bodyText={
            <>
              {t(`${prefix}.card3 text`)}{t(`${prefix}.card3 text2`)}
              <span className="write-us-span">{t(`${prefix}.card3 span`)}</span>
            </>
          }
        />
        <ContactCards
          headerText={t(`${prefix}.card4 title`)}
          bodyText={t(`${prefix}.card4 text`)}
          text={t(`${prefix}.card2 link`)}
        />
        <ContactCards
          headerText={t(`${prefix}.card5 title`)}
          bodyText={t(`${prefix}.card5 text`)}
          text={t(`${prefix}.card2 link`)}
        />
        <ContactCards
          headerText={t(`${prefix}.card6 title`)}
          bodyText={t(`${prefix}.card6 text`)}
          text={t(`${prefix}.card2 link`)}
        />
        <ContactCards
          headerText={t(`${prefix}.card7 title`)}
          bodyText={t('142181, Moscow region, Podolsk, village of Koledino, territory Industrial Park Koledino, 6, building 1')}
          text={t(`${prefix}.card2 link`)}
        />
      </div>
    </ThemeModes>
  );
}

export default Contact;
