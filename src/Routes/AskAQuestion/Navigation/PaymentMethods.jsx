import { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { LangContext } from "../../../Contexts/LangContext";
import './Responsive.css';
import { IMAGE, PAYMENT_METHOD_COLLAPSE_STYLES, PAYMENT_METHOD_IMAGE_STYLES, TEXT } from "../../../Constants/AskAQuestionsConstants";

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
      titleKey: "collapse1 title",
      nestedItems: [
        { type: 'text', key: "collapse1 text1", isHeader: true },
        { type: 'text', key: "collapse1 text2", isHeader: false },
        { type: 'text', key: "collapse1 text3", isHeader: true },
        { type: 'image', src: "/visa.png", alt: "Visa" },
        { type: 'image', src: "/mastercard.png", alt: "Mastercard" },
        { type: 'image', src: "/idbankCard.png", alt: "ID Bank" },
        { type: 'image', src: "/hsbc.png", alt: "HSBC" },
      ]
    },
    {
      id: 2,
      titleKey: "collapse2 title",
      nestedItems: [
        { type: 'text', key: "collapse2 text1", isHeader: false },
        { type: 'text', key: "collapse2 text2", isHeader: false },
        { type: 'text', key: "collapse2 text3", isHeader: false },
      ]
    },
    {
      id: 3,
      titleKey: "collapse3 title",
      nestedItems: [
        { type: 'text', key: "collapse3 text1", isHeader: false },
        { type: 'text', key: "collapse3 text2", isHeader: false },
        { type: 'text', key: "collapse3 text3", isHeader: false },
        { type: 'text', key: "collapse3 text4", isHeader: false },
      ]
    },
    {
      id: 4,
      titleKey: "collapse4 title",
      nestedItems: [
        { type: 'image', src: "/fps.png", alt: "FPS", style: PAYMENT_METHOD_IMAGE_STYLES },
        { type: 'text', key: "collapse4 text1", isHeader: false },
        { type: 'text', key: "collapse4 text2", isHeader: false },
      ]
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
            <ListItem onClick={() => handleToggle(item.id)}>
              <ListItemText
                primary={<ThemeModes tagName='h3' className="ask-h3">{t(`${prefix}.${item.titleKey}`)}</ThemeModes>}
              />
              {openList[item.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>

            <Collapse in={openList[item.id]} timeout="auto" unmountOnExit>
              <div style={PAYMENT_METHOD_COLLAPSE_STYLES}>
                {item.nestedItems.map((nestedItem, index) => {
                  if (nestedItem.type === TEXT) {
                    return (
                      <ThemeModes className={nestedItem.isHeader ? 'ask-h3' : 'ask-p'} key={index}> {t(`${prefix}.${nestedItem.key}`)} </ThemeModes>
                    );
                  }
                  if (nestedItem.type === IMAGE) {
                    return (
                      <img key={index} src={nestedItem.src} alt={nestedItem.alt} style={nestedItem.style} className="image-card" />
                    );
                  }
                  return null;
                })}
              </div>
            </Collapse>
          </div>
        ))}
      </List>
    </ThemeModes>
  );
};

export default PaymentMethods;
