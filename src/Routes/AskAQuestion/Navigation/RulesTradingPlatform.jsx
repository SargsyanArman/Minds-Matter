import { useContext, useState } from "react";
import ToggleButtonComponent from "./ToggleButtonComponent";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { BoldTextNumeric, SimpleText } from "./ReadyMadeTemplates";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { LangContext } from "../../../Contexts/LangContext";
import { Trans } from "react-i18next";
import './Responsive.css'

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

  return (
    <ThemeModes tagName="gray-div" style={{ padding: "24px" }}>
      <ToggleButtonComponent
        value={alignment}
        onChange={(e, newAlignment) => newAlignment && setAlignment(newAlignment)}
        leftLabel={t(`${prefix}.page1`)}
        rightLabel={t(`${prefix}.page2`)}
      />
      <div>
        {alignment === "left" ? (
          renderTextBlock("title1", ["period1", "period2"])
        ) : (
          <div>
            <ThemeModes tagName="h3">
              <Trans i18nKey={`${prefix}.title2`}>
                Rules for using the <strong>Minds Matter</strong> trading platform
              </Trans>
            </ThemeModes>
            <BoldTextNumeric text={t(`${prefix}.rule1`)} num="1." />
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flexWrap: "nowrap",
                marginLeft: "20px",
              }}
            >
              <ThemeModes tagName='p'>
                <Trans i18nKey={`${prefix}.rule1 text1`}>
                  <strong> Seller </strong>- is an individual entrepreneur, legal entity or self-employed
                  citizen, registered in accordance with the established
                  procedure in Russian or foreign jurisdiction, carrying out
                  activities for the sale of Goods and offering the Consumer to
                  enter into a contract for the sale of Goods by placing Goods
                  on the Marketplace.
                </Trans>
              </ThemeModes>
              <p>
                <Trans i18nKey={`${prefix}.rule1 text2`}>
                  <strong> User </strong>- is any legally capable individual who uses the Trading
                  Platform in any way.
                </Trans>
              </p>
              <p>
                <Trans i18nKey={`${prefix}.rule1 text3`}>
                  <strong> Consumer </strong>- a user who intends to order or purchase, or who orders,
                  purchases or uses Goods on the Marketplace solely for
                  personal, family, household and other needs not related to
                  business activities.
                </Trans>
              </p>
              <p>
                <Trans i18nKey={`${prefix}.rule1 text4`}>
                  <strong> Goods </strong>- are the subject of a purchase and sale agreement concluded
                  between the Consumer and the Seller; information about the
                  Goods is posted on the Marketplace.
                </Trans>
              </p>
              <p>
                <Trans i18nKey={`${prefix}.rule1 text5`}>
                  <strong> Product card </strong>- information about the product, containing a visual and text
                  description of the product, its main characteristics,
                  information about the Seller of the Product, its price, as
                  well as other information that is necessary for the Consumer
                  to make a decision about Ordering the Product. The product
                  card contains the essential terms of the purchase and sale
                  agreement for the Goods and is filled out by the Seller of the
                  Goods independently.
                </Trans>
              </p>
              <p>
                <Trans i18nKey={`${prefix}.rule1 text6`}>
                  <strong> Order </strong>- the implementation by the Consumer of actions aimed at
                  purchasing the Product and delivering it to the address
                  specified by the Consumer by registering the specified
                  Services and Products on the Marketplace.
                </Trans>
              </p>
            </span>
            <BoldTextNumeric text={t(`${prefix}.rule2`)} num="2." />
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flexWrap: "nowrap",
                marginLeft: "20px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HorizontalRuleIcon />
                <span>{t(`${prefix}.rule2 text1`)}</span>
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HorizontalRuleIcon />
                <span>{t(`${prefix}.rule2 text2`)}</span>
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HorizontalRuleIcon />
                <span>{t(`${prefix}.rule2 text3`)}</span>
              </p>
            </span>
            <BoldTextNumeric text={t(`${prefix}.rule3`)} num="3." />
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flexWrap: "nowrap",
                marginLeft: "20px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HorizontalRuleIcon />
                <span>{t(`${prefix}.rule3 text1`)}</span>
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HorizontalRuleIcon />
                <span>{t(`${prefix}.rule3 text2`)}</span>
              </p>
            </span>
          </div>
        )}
      </div>
    </ThemeModes>
  );
};

export default RulesTradingPlatform;
