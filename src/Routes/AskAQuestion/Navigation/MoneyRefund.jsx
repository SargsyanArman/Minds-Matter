import { useContext, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";
import './Responsive.css'


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

  const items = [
    {
      id: 1,
      title: t(`${prefix}.collapse1 title`),
      nestedItems: (
        <ul className='refund-ul' style={{ paddingLeft: "20px", listStyleType: "none" }}>
          <li style={{ margin: "5px 0" }}>
            {t(`${prefix}.collapse1 text1`)}
          </li>
          <li style={{ margin: "5px 0" }}>
            {t(`${prefix}.collapse1 text2`)}
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: t(`${prefix}.collapse2 title`),
      nestedItems: (
        <ul style={{ paddingLeft: "20px", listStyleType: "none" }}>
          <li style={{ margin: "5px 0" }}>
            {t(`${prefix}.collapse2 text1`)}
          </li>
          <li style={{ margin: "5px 0" }}>
            {t(`${prefix}.collapse2 text2`)}
          </li>
        </ul>
      ),
    },

    {
      id: 3,
      title: t(`${prefix}.collapse3 title`),
      nestedItems: (
        <span className="ask-span" >
          {t(`${prefix}.collapse3 text`)}
        </span>
      ),
    },
  ];
  return (
    <ThemeModes
      tagName='simpleDiv'
      style={{
        padding: "30px",

        display: "flex",
        flexDirection: "column",
        gap: " 10px",
      }}
    >
      <ThemeModes
        tagName="h3"
        className='ask-h4'
      >
        {t(`${prefix}.title`)}
      </ThemeModes>

      <ThemeModes
        tagName="p"
        style={{
          borderBottom: "1px solid white",
          padding: "10px 0",
          paddingLeft: "20px",
          paddingBottom: "20px",

          fontWeight: "normal",
          fontSize: "20px",
        }}
      >
        {t(`${prefix}.text`)}
      </ThemeModes>
      <List>
        {items.map((item) => (
          <div key={item.id}>
            <ListItem
              button
              onClick={() => item.nestedItems && handleToggle(item.id)}
            >
              <ListItemText
                primary={
                  <ThemeModes
                    tagName="h3"
                    style={{ fontSize: "20px", paddingLeft: "0px" }}
                  >
                    {item.title}
                  </ThemeModes>
                }
              />
              {item.nestedItems ? (
                openList[item.id] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {item.nestedItems && (
              <Collapse in={openList[item.id]} className="ask-p" timeout="auto" unmountOnExit>
                {item.nestedItems}
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </ThemeModes>
  );
};
export default MoneyRefund;
