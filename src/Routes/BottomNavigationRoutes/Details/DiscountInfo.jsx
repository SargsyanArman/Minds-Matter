import ThemeModes from '../../../Components/Shared/ThemeModes';
import { Tooltip } from '@mui/material';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { useContext } from "react";
import { CurrencyContext } from "../../../Contexts/CurrencyContext";
import { LangContext } from "../../../Contexts/LangContext";
import './Discountinfo.css';

const DiscountInfo = () => {
    const { curr, exchange } = useContext(CurrencyContext);
    const { t } = useContext(LangContext);
    const prefix = "Profile";

    const discounts = [
        {
            amount: "30%",
            text: `${prefix}.discount text`,
            title: `${prefix}.discount title`,
        },
        {
            amount: exchange(0, 'USD') + ' ' + curr.currSymbol,
            text: `${prefix}.ransom text`,
            title: `${prefix}.ransom title`,
        },
        {
            amount: "0%",
            text: `${prefix}.redemption text`,
            title: `${prefix}.redemption title`,
        },
    ];

    return (
        <>
            <div className="discount-info-container">
                {discounts.map((discount, index) => (
                    <ThemeModes tagName='gray-div' className="gray-div" key={index}>
                        <ThemeModes className='details-p-span' tagName='p-red'>{discount.amount}</ThemeModes>
                        <ThemeModes className="info-text details-p-span" tagName='gn-p'>
                            {t(discount.text)}
                            <Tooltip title={t(discount.title)} placement='top'>
                                <HelpOutlineRoundedIcon className="info-icon" />
                            </Tooltip>
                        </ThemeModes>
                    </ThemeModes>
                ))}
            </div>

            <ThemeModes className="summary-text details-p-span" tagName='gn-p'>
                {t(`${prefix}.percentages text`)}
            </ThemeModes>
        </>
    );
};

export default DiscountInfo;
