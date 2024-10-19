import { useContext } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { BoldTextNumeric } from "./ReadyMadeTemplates";
import { LangContext } from "../../../Contexts/LangContext";
import { Trans } from "react-i18next";
import './Responsive.css';
import { RULES_SELLING_STYLES } from "../../../Constants/AskAQuestionsConstants";

const RulesForSelling = () => {
  const { t } = useContext(LangContext);
  const prefix = "Selling rules";

  const RULES = [
    { text: t(`${prefix}.rule1`), num: "1." },
    { text: t(`${prefix}.rule2`), num: "2." },
    {
      text: (
        <Trans i18nKey={`${prefix}.rule3`}>
          The order is placed via the website <strong>Minds Matter</strong>.
        </Trans>
      ),
      num: "3.",
    },
    { text: t(`${prefix}.rule4`), num: "4." },
    { text: t(`${prefix}.rule5`), num: "5." },
    { text: t(`${prefix}.rule6`), num: "6." },
  ];

  return (
    <ThemeModes
      tagName='simpleDiv'
      style={RULES_SELLING_STYLES}
    >
      <ThemeModes tagName="h3">{t(`${prefix}.title`)}</ThemeModes>
      {RULES.map((rule, index) => (
        <BoldTextNumeric key={index} text={rule.text} num={rule.num} />
      ))}
    </ThemeModes>
  );
};

export default RulesForSelling;
