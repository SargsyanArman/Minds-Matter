import ThemeModes from '../../../Components/Shared/ThemeModes';
import { Tooltip } from '@mui/material';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { useContext } from "react";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { LangContext } from "../../../Contexts/LangContext";

import './Discountinfo.css'; // Импортируем CSS файл

const DiscountInfo = () => {
    const { curr, exchange } = useContext(CurrencyContext);
    const { t } = useContext(LangContext);
    const prefix = "Profile";

    return (
        <>
            <div className="discount-info-container">
                <ThemeModes tagName='gray-div' className="gray-div">
                    <ThemeModes tagName='purpleP' className='details-p-span'>{t(`${prefix}.discount amount`)}30%</ThemeModes>
                    <ThemeModes className="info-text details-p-span" tagName='gn-p' >
                        {t(`${prefix}.discount text`)}
                        <Tooltip title={t(`${prefix}.discount title`)} placement='top'>
                            <HelpOutlineRoundedIcon className="info-icon" />
                        </Tooltip>
                    </ThemeModes>
                </ThemeModes>

                <ThemeModes tagName='gray-div' className="gray-div">
                    <ThemeModes className='details-p-span' tagName='p-red'>{exchange(0, 'USD')} {curr.currSymbol}</ThemeModes>
                    <ThemeModes className="info-text details-p-span" tagName='gn-p'>
                        {t(`${prefix}.ransom text`)}
                        <Tooltip title={t(`${prefix}.ransom title`)} placement='top'>
                            <HelpOutlineRoundedIcon className="info-icon" />
                        </Tooltip>
                    </ThemeModes>
                </ThemeModes>

                <ThemeModes tagName='gray-div' className="gray-div">
                    <ThemeModes className='details-p-span' tagName='p-red'>0%</ThemeModes>
                    <ThemeModes className="info-text details-p-span" tagName='gn-p'>
                        {t(`${prefix}.redemption text`)}
                        <Tooltip title={t(`${prefix}.redemption title`)} placement='top'>
                            <HelpOutlineRoundedIcon className="info-icon" />
                        </Tooltip>
                    </ThemeModes>
                </ThemeModes>
            </div>

            <ThemeModes className="summary-text details-p-span" tagName='gn-p'>
                {t(`${prefix}.percentages text`)}
            </ThemeModes>
        </>
    );
};

export default DiscountInfo;
