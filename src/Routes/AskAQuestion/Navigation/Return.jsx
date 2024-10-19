import { useContext } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { Comment, List, SimpleText } from "./ReadyMadeTemplates";
import { LangContext } from "../../../Contexts/LangContext";
import './responsive.css';
import { RETURN_B_STYLES, RETURN_SECTION_STYLES, RETURN_SPAN_STYLES } from "../../../Constants/AskAQuestionsConstants";

const Return = () => {
  const { t } = useContext(LangContext);
  const prefix = "Return";

  const sections = [
    {
      title: t(`${prefix}.title1`),
      subtitle: t(`${prefix}.subtitle1`),
      text: t(`${prefix}.text1`),
      lists: [
        t(`${prefix}.text2`),
        t(`${prefix}.text2_2`),
      ],
      subtitle3: t(`${prefix}.subtitle3`),
      text3: t(`${prefix}.text3`),
      subtitle4: t(`${prefix}.subtitle4`),
      options: [
        {
          number: 1,
          title: t(`${prefix}.option1`),
          text: t(`${prefix}.option1 text1`),
        },
        {
          number: 2,
          title: t(`${prefix}.option2`),
          texts: [
            t(`${prefix}.option2 text1`),
            t(`${prefix}.option2 text1_2`),
          ],
        },
      ],
    },
    {
      title: t(`${prefix}.title2`),
      subtitle5: t(`${prefix}.subtitle5`),
      text5: t(`${prefix}.text5`),
      subtitle6: t(`${prefix}.subtitle6`),
      text6: t(`${prefix}.text6`),
      text6_2: t(`${prefix}.text6_2`),
      subtitle7: t(`${prefix}.subtitle7`),
      steps: [
        t(`${prefix}.step1`),
        t(`${prefix}.step2`),
        t(`${prefix}.step3`),
      ],
    },
  ];

  return (
    <ThemeModes tagName='simpleDiv' style={{ padding: "24px" }}>
      {sections.map((section, index) => (
        <div key={index}>
          {section.title && <ThemeModes tagName="h3">{section.title}</ThemeModes>}
          {section.subtitle && <Comment text={section.subtitle} />}
          {section.text && <SimpleText text={section.text} />}
          {section.lists && section.lists.map((listItem, i) => (
            <List key={i} text={listItem} />
          ))}

          {section.subtitle3 && <Comment text={section.subtitle3} />}
          {section.text3 && <SimpleText text={section.text3} />}
          {section.subtitle4 && <Comment text={section.subtitle4} />}

          {section.options && section.options.map(option => (
            <div key={option.number} style={RETURN_SECTION_STYLES}>
              <span style={RETURN_SPAN_STYLES}>
                <b style={RETURN_B_STYLES}>{option.number}.</b>
                <Comment text={option.title} />
              </span>
              {option.text && <SimpleText text={option.text} />}
              {option.texts && option.texts.map((textItem, j) => (
                <SimpleText key={j} text={textItem} />
              ))}
            </div>
          ))}

          {section.subtitle7 && <Comment text={section.subtitle7} />}
          {section.steps && section.steps.map((step, i) => (
            <List key={i} text={step} />
          ))}
        </div>
      ))}
    </ThemeModes>
  );
};

export default Return;
