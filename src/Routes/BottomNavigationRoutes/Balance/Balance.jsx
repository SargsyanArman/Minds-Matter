import { useContext, useState } from "react";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import "../../../Styles/BottomNavigation.css";
import { FormatBoldOutlined } from "@mui/icons-material";
import SharedInput from "../../../Components/Shared/SharedInput";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { LangContext } from "../../../Contexts/LangContext";
import './Balance.css';
import { BALANCE_SPAN_STYLES, BALANCE_TITLE_STYLES, BALLANCE_BUTTON_STYLES, BALLANCE_ICON_STYLES } from "../../../Constants/ProfileNavigationConstants";

const Balance = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { curr, exchange } = useContext(CurrencyContext);
  const { t } = useContext(LangContext);
  const prefix = "Balance";

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <ThemeModes tagName="simpleDiv" className='balance-main'>
      <ThemeModes className='balance-card'>
        <ThemeModes tagName="gray-div" className="pr-item balance-total">
          <ThemeModes style={BALANCE_TITLE_STYLES}>
            <ThemeModes tagName="h3">
              <FormatBoldOutlined style={BALLANCE_ICON_STYLES} />
            </ThemeModes>

            <ThemeModes tagName="span" style={BALANCE_SPAN_STYLES}>
              {exchange(0, 'USD')} {curr.currSymbol}
            </ThemeModes>
          </ThemeModes>

          <ThemeModes tagName="button_mode" className='button-topUp' onClick={() => navigate('/payment')}>
            {t(`${prefix}.wallet`)}
          </ThemeModes>
        </ThemeModes>

        <ThemeModes tagName="gray-div" className="pr-item certificate">
          <ThemeModes style={BALANCE_TITLE_STYLES}>
            <ThemeModes tagName="h3">{t(`${prefix}.gift title`)}</ThemeModes>
          </ThemeModes>

          <SharedInput
            onChange={handleChange}
            value={value}
            placeholder={t(`${prefix}.gift placeholder`)}
          />

          {!!value && (
            <Button
              disabled
              sx={BALLANCE_BUTTON_STYLES}
            >
              {t(`${prefix}.gift button`)}
            </Button>
          )}
        </ThemeModes>
      </ThemeModes>

      <ThemeModes className='operations'>
        <ThemeModes tagName="h3">{t(`${prefix}.operations title`)}</ThemeModes>
        <br />
        <ThemeModes tagName="gn-p">
          {t(`${prefix}.operations text`)}
        </ThemeModes>
      </ThemeModes>
    </ThemeModes>
  );
};

export default Balance;
