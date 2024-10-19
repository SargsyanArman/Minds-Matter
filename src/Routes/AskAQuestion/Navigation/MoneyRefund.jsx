import { useContext, useState } from "react";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";
import './Responsive.css';
import { MONEY_REFUND_BOX_STYLES, MONEY_REFUND_LI_STYLES, MONEY_REFUND_TEXT_STYLES, MONEY_REFUND_TITLE_STYLES, MONEY_REFUND_UL_STYLES } from "../../../Constants/AskAQuestionsConstants";

const MoneyRefund = () => {
  const [openList, setOpenList] = useState({});
  const handleToggle = (id) => {
    setOpenList((prevOpen) => ({
      ...prevOpen,
      [id]: !prevOpen[id],
    }));
  };

  const { t } = useContext(LangContext);
  const prefix = "Refund";

  const ITEMS = [
    {
      id: 1,
      titleKey: "collapse1 title",
      textKeys: ["collapse1 text1", "collapse1 text2"],
    },
    {
      id: 2,
      titleKey: "collapse2 title",
      textKeys: ["collapse2 text1", "collapse2 text2"],
    },
    {
      id: 3,
      titleKey: "collapse3 title",
      textKeys: ["collapse3 text"],
      isSpan: true,
    },
  ];

  return (
    <ThemeModes tagName='simpleDiv' style={MONEY_REFUND_BOX_STYLES}>
      <ThemeModes tagName="h3" className='ask-h4'>
        {t(`${prefix}.title`)}
      </ThemeModes>
      <ThemeModes tagName="p" style={MONEY_REFUND_TEXT_STYLES}>
        {t(`${prefix}.text`)}
      </ThemeModes>

      <List>
        {ITEMS.map((item) => (
          <div key={item.id}>
            <ListItem button onClick={() => item.textKeys && handleToggle(item.id)}>
              <ListItemText
                primary={
                  <ThemeModes tagName="h3" style={MONEY_REFUND_TITLE_STYLES}>
                    {t(`${prefix}.${item.titleKey}`)}
                  </ThemeModes>
                }
              />
              {item.textKeys ? (openList[item.id] ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItem>

            {item.textKeys && (
              <Collapse in={openList[item.id]} className="ask-p" timeout="auto" unmountOnExit>
                {!item.isSpan ? (
                  <ul className='refund-ul' style={MONEY_REFUND_UL_STYLES}>
                    {item.textKeys.map((key, index) => (
                      <li key={index} style={MONEY_REFUND_LI_STYLES}>
                        {t(`${prefix}.${key}`)}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="ask-span">
                    {t(`${prefix}.${item.textKeys[0]}`)}
                  </span>
                )}
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </ThemeModes>
  );
};

export default MoneyRefund;
