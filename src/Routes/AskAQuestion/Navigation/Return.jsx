import { useContext } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";

import { Comment, List, SimpleText } from "./ReadyMadeTemplates";
import { LangContext } from "../../../Contexts/LangContext";
import './Responsive.css'


const Return = () => {
  const { t } = useContext(LangContext);
  const prefix = "Return";

  return (
    <ThemeModes tagName='simpleDiv' style={{ padding: "24px" }}>
      <ThemeModes tagName="h3">{t(`${prefix}.title1`)}</ThemeModes>
      <Comment text={t(`${prefix}.subtitle1`)} />
      <SimpleText text={t(`${prefix}.text1`)} />
      <Comment text={t(`${prefix}.subtitle2`)} />
      <List text={t(`${prefix}.text2`)} />
      <List text={t(`${prefix}.text2_2`)} />
      <Comment text={t(`${prefix}.subtitle3`)} />
      <SimpleText text={t(`${prefix}.text3`)} />
      <Comment text={t(`${prefix}.subtitle4`)} />

      <span style={{ display: "flex", alignItems: "center" }}>
        <b style={{ fontSize: "24px", marginRight: "6px" }}> 1.</b>
        <Comment text={t(`${prefix}.option1`)} />
      </span>
      <SimpleText text={t(`${prefix}.option1 text1`)} />
      <span style={{ display: "flex", alignItems: "center" }}>
        <b style={{ fontSize: "24px", marginRight: "6px" }}> 2.</b>
        <Comment text={t(`${prefix}.option2`)} />
      </span>
      <SimpleText text={t(`${prefix}.option2 text1`)} />
      <SimpleText text={t(`${prefix}.option2 text1_2`)} />
      <ThemeModes tagName="h3">
        {t(`${prefix}.title2`)}
      </ThemeModes>
      <Comment text={t(`${prefix}.subtitle5`)} />
      <SimpleText text={t(`${prefix}.text5`)} />
      <Comment text={t(`${prefix}.subtitle6`)} />
      <SimpleText text={t(`${prefix}.text6`)} />
      <SimpleText text={t(`${prefix}.text6_2`)} />
      <Comment text={t(`${prefix}.subtitle7`)} />
      <List text={t(`${prefix}.step1`)} />
      <List text={t(`${prefix}.step2`)} />
      <List text={t(`${prefix}.step3`)} />
    </ThemeModes>
  );
};

export default Return;
