import ThemeModes from '../../../Components/Shared/ThemeModes';
import { useContext } from 'react';
import { LangContext } from '../../../Contexts/LangContext';
import { CurrencyContext } from '../../../Contexts/CurrencyContext';

import '../../../index.css';
import './bugBounty.css';
import { Trans } from 'react-i18next';

const BugBounty = () => {
    const { curr, exchange } = useContext(CurrencyContext);
    let s = curr.currSymbol;
    const { t } = useContext(LangContext);
    const prefix = 'Bug bounty';

    const showReward = (r) => {
        let rString = (r + '');
        let sliced = 1;
        if (rString.slice(-2) === '00') {
            rString = rString.slice(0, -3);
            sliced = 0;
        }
        for (let i = rString.length - 3 - 3 * sliced; i >= 0; i -= 3) {
            rString = rString.slice(0, i) + ' ' + rString.slice(i);
        }

        return rString;
    };

    const tableHead = {
        col1: t(`${prefix}.th1`),
        col2: t(`${prefix}.th2`),
        col3: t(`${prefix}.th3`),
        col4: t(`${prefix}.th4`),
    }

    const tableBody = [
        {
            col1: t(`${prefix}.row1`),
            col2: `${showReward(exchange(200000, 'RUB'))} ${s} - ${showReward(exchange(500000, 'RUB'))} ${s}`,
            col3: `${showReward(exchange(60000, 'RUB'))} ${s} - ${showReward(exchange(250000, 'RUB'))} ${s}`,
            col4: `${showReward(exchange(40000, 'RUB'))} ${s} - ${showReward(exchange(125000, 'RUB'))} ${s}`
        },
        {
            col1: t(`${prefix}.row2`),
            col2: `${showReward(exchange(50000, 'RUB'))} ${s} - ${showReward(exchange(200000, 'RUB'))} ${s}`,
            col3: `${showReward(exchange(30000, 'RUB'))} ${s} - ${showReward(exchange(150000, 'RUB'))} ${s}`,
            col4: `${showReward(exchange(20000, 'RUB'))} ${s} - ${showReward(exchange(85000, 'RUB'))} ${s}`
        },
        {
            col1: t(`${prefix}.row3`),
            col2: `${showReward(exchange(30000, 'RUB'))} ${s} - ${showReward(exchange(50000, 'RUB'))} ${s}`,
            col3: `${showReward(exchange(25000, 'RUB'))} ${s} - ${showReward(exchange(45000, 'RUB'))} ${s}`,
            col4: `${showReward(exchange(20000, 'RUB'))} ${s} - ${showReward(exchange(35000, 'RUB'))} ${s}`
        },
        {
            col1: t(`${prefix}.row4`),
            col2: `${showReward(exchange(16000, 'RUB'))} ${s} - ${showReward(exchange(20000, 'RUB'))} ${s}`,
            col3: `${showReward(exchange(12000, 'RUB'))} ${s} - ${showReward(exchange(15000, 'RUB'))} ${s}`,
            col4: `${showReward(exchange(7500, 'RUB'))} ${s} - ${showReward(exchange(12000, 'RUB'))} ${s}`
        },
    ];

    const testingRules = [
        {rule: t(`${prefix}.testingRule1`)},
        {rule: t(`${prefix}.testingRule2`)},
        {rule: t(`${prefix}.testingRule3`)},
        {rule: t(`${prefix}.testingRule4`)},
        {rule: t(`${prefix}.testingRule5`)}
    ];

    const exceptions = [
        {exception: t(`${prefix}.exception1`)},
        {exception: t(`${prefix}.exception2`)},
        {exception: t(`${prefix}.exception3`)},
        {exception: t(`${prefix}.exception4`)},
        {exception: t(`${prefix}.exception5`)},
        {exception: t(`${prefix}.exception6`)},
        {exception: t(`${prefix}.exception7`)}
    ];

    const webExceptions = [
        {webException: t(`${prefix}.webException1`)},
        {webException: t(`${prefix}.webException2`)},
        {webException: t(`${prefix}.webException3`)},
        {webException: t(`${prefix}.webException4`)},
        {webException: t(`${prefix}.webException5`)},
        {webException: t(`${prefix}.webException6`)},
        {webException: t(`${prefix}.webException7`)},
        {webException: t(`${prefix}.webException8`)},
        {webException: t(`${prefix}.webException9`)},
        {webException: t(`${prefix}.webException10`)},
        {webException: t(`${prefix}.webException11`)},
        {webException: t(`${prefix}.webException12`)},
        {webException: t(`${prefix}.webException13`)},
        {webException: t(`${prefix}.webException14`)},
        {webException: t(`${prefix}.webException15`)},
        {webException: t(`${prefix}.webException16`)}
    ];

    const duplicates = [
        {duplicate: t(`${prefix}.duplicate1`)},
        {duplicate: t(`${prefix}.duplicate2`)},
        {duplicate: t(`${prefix}.duplicate3`)},
        {duplicate: t(`${prefix}.duplicate4`)},
        {duplicate: t(`${prefix}.duplicate5`)}
    ];

    return (
        <ThemeModes tagName='simpleDiv' className='header-div flex-col'>
            <ThemeModes tagName='gray-div' className='bug-bounty-item bug-bounty-item-1'>
                <ThemeModes className='bb-h3' tagName='h1'>{t(`${prefix}.title`)}</ThemeModes>
                <ThemeModes tagName='p'>{t(`${prefix}.text`)}</ThemeModes>
                <ThemeModes tagName='h3' className='sub-h3'>{t(`${prefix}.subheader1`)}</ThemeModes>
                <ThemeModes tagName='p'>{t(`${prefix}.subheader1 text1`)}</ThemeModes>
                <ThemeModes tagName='p'>
                    <Trans i18nKey={`${prefix}.subheader1 text2`} >
                        The following <strong>cannot</strong> participate in the program: 
                    </Trans>
                </ThemeModes>
                <ul className='rules'>
                    <li>{t(`${prefix}.rule1`)}</li>
                    <li>{t(`${prefix}.rule2`)}</li>
                </ul>
                <ThemeModes tagName='p'>
                    <Trans i18nKey={`${prefix}.subheader1 text3`} >
                        Participants are required to maintain confidentiality regarding information about vulnerabilities found. 
                        <strong>Disclosure</strong> of this information is permitted only <strong>with prior approval</strong> from Minds Matter.
                    </Trans>
                </ThemeModes>
            </ThemeModes>

            <ThemeModes tagName='gray-div' className='bug-bounty-item bug-bounty-item-2'>
                <ThemeModes className='bb-h3' tagName='h1'>{t(`${prefix}.section1`)}</ThemeModes>
                <p>{t(`${prefix}.section1 text1`)}</p>
                <p>{t(`${prefix}.section1 text2`)}</p>
                <table className='table'>
                    <thead>
                        <tr>
                            {Object.values(tableHead).map((item, index) => (
                                <th key={item + index}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody.map((item, index) => (
                            <tr key={item + index}>
                                {Object.values(item).map((tdItem, tdIndex) => (
                                    <td key={tdItem + tdIndex}>{tdItem}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ThemeModes>

            <ThemeModes tagName='gray-div' className='bug-bounty-item bug-bounty-item-3'>
                <ThemeModes className='bb-h3' tagName='h1'>{t(`${prefix}.section2`)}</ThemeModes>
                <ul className='rules'>
                    {testingRules.map((item, index) => (
                        <li key={index} >{item["rule"]}</li>
                    ))}
                </ul>
            </ThemeModes>

            <ThemeModes tagName='gray-div' className='bug-bounty-item bug-bounty-item-4'>
                <ThemeModes className='bb-h3' tagName='h1'>{t(`${prefix}.section3`)}</ThemeModes>
                <ThemeModes tagName='gn-p'>{t(`${prefix}.section3 text1`)}</ThemeModes>
                <ThemeModes tagName='h3' className='sub-h3'>{t(`${prefix}.subheader2`)}</ThemeModes>
                <ul className='rules'>
                    {exceptions.map((item, index) => (
                        <li key={index}>{item['exception']}</li>
                    ))}
                </ul>
                <ThemeModes tagName='h3' className='sub-h3 subHeaders'>{t(`${prefix}.subheader3`)}</ThemeModes>
                <ul className='rules'>
                    {webExceptions.map((item, index) => (
                        <li key={index}>{item['webException']}</li>
                    ))}
                </ul>
            </ThemeModes>

            <ThemeModes tagName='gray-div' className='bug-bounty-item bug-bounty-item-5'>
                <ThemeModes className='bb-h3' tagName='h1'>{t(`${prefix}.section4`)}</ThemeModes>
                <ul className='rules'>
                    {duplicates.map((item, index) => (
                        <li key={index}>{item['duplicate']}</li>
                    ))}
                </ul>
            </ThemeModes>
        </ThemeModes>
    )
}

export default BugBounty