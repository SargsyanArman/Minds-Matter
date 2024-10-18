import { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { LangContext } from "../../../Contexts/LangContext";
import './Responsive.css'


const PaymentMethods = () => {
  const [openList, setOpenList] = useState({});
  const handleToggle = (id) => {
    setOpenList((prevOpen) => ({
      ...prevOpen,
      [id]: !prevOpen[id],
    }));
  };

  const { t } = useContext(LangContext);
  const prefix = "Payment methods";

  const items = [
    {
      id: 1,
      text: t(`${prefix}.collapse1 title`),
      nestedItems: (
        <span
          style={{
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            margin: "5px 0",
          }}
        >
          <ThemeModes className='ask-h3' tagName="h3">
            {t(`${prefix}.collapse1 text1`)}
          </ThemeModes>
          <ThemeModes className='ask-h3'>
            {t(`${prefix}.collapse1 text2`)}
          </ThemeModes>
          <ThemeModes className='ask-h3' tagName="h3">
            {t(`${prefix}.collapse1 text3`)}
          </ThemeModes>
          <span className="images-card" >
            <img
              src="/visa.png"
              className="image-card"
            />
            <img
              src="/mastercard.png"
              className="image-card"
            />
            <img
              src="/idbankCard.png"
              className="image-card"
            />
            <img
              src="/hsbc.png"
              className="image-card"
            />
          </span>
        </span>
      ),
    },
    {
      id: 2,
      text: t(`${prefix}.collapse2 title`),
      nestedItems: (
        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
          <li style={{ margin: "10px 0" }}>
          <ThemeModes className="ask-p">
            {t(`${prefix}.collapse2 text1`)} </ThemeModes>
          </li>
          <li style={{ margin: "10px 0" }}>
          <ThemeModes className="ask-p">
            {t(`${prefix}.collapse2 text2`)} </ThemeModes>
          </li>
          <li style={{ margin: "10px 0" }}>
          <ThemeModes className="ask-p">
            {t(`${prefix}.collapse2 text3`)} </ThemeModes>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      text: t(`${prefix}.collapse3 title`),
      nestedItems: (
        <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
          <li style={{ margin: "10px 0" }}>
            <ThemeModes className="ask-p"> {t(`${prefix}.collapse3 text1`)}</ThemeModes>
          </li>
          <li style={{ margin: "10px 0" }}>
            <ThemeModes className="ask-p">  {t(`${prefix}.collapse3 text2`)} </ThemeModes>
          </li>
          <li style={{ margin: "10px 0" }}>
            <ThemeModes className="ask-p">  {t(`${prefix}.collapse3 text3`)} </ThemeModes>
          </li>
          <li style={{ margin: "10px 0" }}>
            <ThemeModes className="ask-p">  {t(`${prefix}.collapse3 text4`)} </ThemeModes>
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      text: t(`${prefix}.collapse4 title`),
      nestedItems: (
        <span
          style={{
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            margin: "5px 0",
          }}
        >
          <span>
            <img
              src="/fps.png"
              alt="fps"
              style={{ width: "50px", height: "30px" }}
            />{" "}
          </span>
          <span className="ask-p">{t(`${prefix}.collapse4 text1`)}</span>
          <span className="ask-p">{t(`${prefix}.collapse4 text2`)}</span>
        </span>
      ),
    },
  ];
  return (
    <ThemeModes tagName='simpleDiv' style={{ padding: "24px" }}>
      <ThemeModes className='ask-h3' tagName='h3'>{t(`${prefix}.title`)}</ThemeModes>
      <ThemeModes className='ask-p' tagName='gn-p'>
        {t(`${prefix}.text`)}
      </ThemeModes>

      <List>
        {items.map((item) => (
          <div key={item.id} style={{ borderBottom: "1px solid #ffff" }}>
            <ListItem onClick={() => item.nestedItems && handleToggle(item.id)}>
              <ListItemText
                primary={
                  <h3 className="ask-h3">
                    {item.text}
                  </h3>
                }
              />
              {item.nestedItems ? (
                openList[item.id] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )
              ) : null}
            </ListItem>
            {item.nestedItems && (
              <Collapse in={openList[item.id]} timeout="auto" unmountOnExit>
                {item.nestedItems}
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </ThemeModes>
  );
};

export default PaymentMethods;
