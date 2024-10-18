import { useContext } from 'react';
import { LangContext } from '../../../Contexts/LangContext';
import ThemeModes from '../../../Components/Shared/ThemeModes';

import './Requisites.css';

const Requisites = () => {
    const { t } = useContext(LangContext);
    const prefix = "Requisites";

    const requisitesInfo = [
        {
            NameOfTheOrganization: t(`${prefix}.desc1`),
            Limit: t(`${prefix}.value1`)
        },
        {
            address: t(`${prefix}.desc2`),
            addressValue: t(`${prefix}.value2`)
        },
        {
            TIN: t(`${prefix}.desc3`),
            TINValue: t(`${prefix}.value3`)
        },
        {
            KPP: t(`${prefix}.desc4`),
            KPPValue: t(`${prefix}.value4`)
        },
        {
            CurrentAccount: t(`${prefix}.desc5`),
            CurrentAccountValue: t(`${prefix}.value5`)
        },
        {
            OGRN: t(`${prefix}.desc6`),
            OGRNValue: t(`${prefix}.value6`)
        },
        {
            Bank: t(`${prefix}.desc7`),
            BankValue: t(`${prefix}.value7`)
        },
        {
            BankBIC: t(`${prefix}.desc8`),
            BankBICValue: t(`${prefix}.value8`)
        },
        {
            BankTIN: t(`${prefix}.desc9`),
            BankTINValue: t(`${prefix}.value9`)
        },
        {
            BankCorrespondentAccount: t(`${prefix}.desc10`),
            BankCorrespondentAccountValue: t(`${prefix}.value10`)
        },
        {
            BankAddress: t(`${prefix}.desc11`),
            BankAddressValue: t(`${prefix}.value11`)
        }
    ];

    return (
        <ThemeModes tagName='simpleDiv' className='req-main'>
            <ThemeModes className='info-req' tagName='gray-div'>
                <ThemeModes tagName='h3'>{t(`${prefix}.title`)}</ThemeModes>
                <ThemeModes tagName="div" style={{ marginTop: '20px' }}>
                    <table>
                        <tbody>
                            {requisitesInfo.map((item, index) => (
                                <tr key={index}>
                                    <td><ThemeModes tagName='gn-p'>{Object.values(item)[0]}</ThemeModes></td>
                                    <td><ThemeModes tagName='p'>{Object.values(item)[1]}</ThemeModes></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </ThemeModes>
            </ThemeModes>

            <ThemeModes tagName='gn-p'>{t(`${prefix}.text1`)}</ThemeModes>
            <ThemeModes tagName='gn-p'>{t(`${prefix}.text2`)}</ThemeModes>

        </ThemeModes>
    )
}

export default Requisites