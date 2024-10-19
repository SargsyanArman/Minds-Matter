import { useContext, useState } from "react";
import ToggleButtonComponent from "./ToggleButtonComponent";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { BoldTextNumeric, SimpleText } from "./ReadyMadeTemplates";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { LangContext } from "../../../Contexts/LangContext";
import { Trans } from "react-i18next";
import './Responsive.css';
import { RETURN_SPAN_STYLES, RULES_TRADING_STYLES } from "../../../Constants/AskAQuestionsConstants";
import { LEFT } from "../../../Constants/GlobalConstants";

const RulesTradingPlatform = () => {
  const [alignment, setAlignment] = useState("left");
  const { t } = useContext(LangContext);
  const prefix = "Platform rules";

  const renderTextBlock = (titleKey, periods) => (
    <>
      <ThemeModes tagName="h3">{t(`${prefix}.${titleKey}`)}</ThemeModes>
      {periods.map((period, idx) => (
        <SimpleText key={idx} text={t(`${prefix}.${period}`)} />
      ))}
    </>
  );

  const rules = [
    {
      title: `${prefix}.rule1`,
      text: [
        {
          key: `${prefix}.rule1 text1`,
          description: (
            <strong> Seller </strong>
          ),
          text: `- is an individual entrepreneur, legal entity or self-employed citizen, registered in accordance with the established procedure in Russian or foreign jurisdiction, carrying out activities for the sale of Goods and offering the Consumer to enter into a contract for the sale of Goods by placing Goods on the Marketplace.`,
        },
        {
          key: `${prefix}.rule1 text2`,
          description: (
            <strong> User </strong>
          ),
          text: `- is any legally capable individual who uses the Trading Platform in any way.`,
        },
        {
          key: `${prefix}.rule1 text3`,
          description: (
            <strong> Consumer </strong>
          ),
          text: `- a user who intends to order or purchase, or who orders, purchases or uses Goods on the Marketplace solely for personal, family, household and other needs not related to business activities.`,
        },
        {
          key: `${prefix}.rule1 text4`,
          description: (
            <strong> Goods </strong>
          ),
          text: `- are the subject of a purchase and sale agreement concluded between the Consumer and the Seller; information about the Goods is posted on the Marketplace.`,
        },
        {
          key: `${prefix}.rule1 text5`,
          description: (
            <strong> Product card </strong>
          ),
          text: `- information about the product, containing a visual and text description of the product, its main characteristics, information about the Seller of the Product, its price, as well as other information that is necessary for the Consumer to make a decision about Ordering the Product. The product card contains the essential terms of the purchase and sale agreement for the Goods and is filled out by the Seller of the Goods independently.`,
        },
        {
          key: `${prefix}.rule1 text6`,
          description: (
            <strong> Order </strong>
          ),
          text: `- the implementation by the Consumer of actions aimed at purchasing the Product and delivering it to the address specified by the Consumer by registering the specified Services and Products on the Marketplace.`,
        },
      ],
    },
    {
      title: `${prefix}.rule2`,
      text: [
        { key: `${prefix}.rule2 text1` },
        { key: `${prefix}.rule2 text2` },
        { key: `${prefix}.rule2 text3` },
      ],
    },
    {
      title: `${prefix}.rule3`,
      text: [
        { key: `${prefix}.rule3 text1` },
        { key: `${prefix}.rule3 text2` },
      ],
    },
  ];

  return (
    <ThemeModes tagName="gray-div" style={{ padding: "24px" }}>
      <ToggleButtonComponent
        value={alignment}
        onChange={(e, newAlignment) => newAlignment && setAlignment(newAlignment)}
        leftLabel={t(`${prefix}.page1`)}
        rightLabel={t(`${prefix}.page2`)}
      />
      <div>
        {alignment === LEFT ? (
          renderTextBlock("title1", ["period1", "period2"])
        ) : (
          <div>
            <ThemeModes tagName="h3">
              <Trans i18nKey={`${prefix}.title2`}>
                Rules for using the <strong>Minds Matter</strong> trading platform
              </Trans>
            </ThemeModes>
            {rules.map((rule, idx) => (
              <div key={idx}>
                <BoldTextNumeric text={t(rule.title)} num={`${idx + 1}.`} />
                <span style={RULES_TRADING_STYLES}>
                  {rule.text.map((item, textIdx) => (
                    item.description ? (
                      <p key={textIdx}>
                        <Trans i18nKey={item.key}>
                          {item.description} {item.text}
                        </Trans>
                      </p>
                    ) : (
                      <p style={RETURN_SPAN_STYLES} key={textIdx}>
                        <HorizontalRuleIcon />
                        <span>{t(item.key)}</span>
                      </p>
                    )
                  ))}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeModes>
  );
};

export default RulesTradingPlatform;
