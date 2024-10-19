import ThemeModes from '../../../Components/Shared/ThemeModes';
import serviceImg from '/service_item.png';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LangContext } from '../../../Contexts/LangContext';

import './PressService.css';
import '../../../index.css';

const PressService = () => {
    const navigate = useNavigate();

    const { t } = useContext(LangContext);
    const prefix = "Press service";

    return (
        <ThemeModes tagName='simpleDiv' className='header-div'>
            <ThemeModes tagName='h3' style={{ marginBottom: '28px' }}>{t(`${prefix}.title`)}</ThemeModes>
            <ThemeModes className='flex'>
                <ThemeModes tagName='gradient-div' className='service-item' style={{ position: 'relative' }}>
                    <ThemeModes>
                        <ThemeModes tagName='h3'>{t(`${prefix}.left title`)}</ThemeModes>
                        <ThemeModes tagName='p' style={{ marginTop: '14px' }}>{t(`${prefix}.left text`)}</ThemeModes>
                    </ThemeModes>
                    <ThemeModes style={{ marginTop: 'auto' }}>
                        <ThemeModes className='service-button' tagName='button_mode' onClick={() => navigate('/services/about-us')}>{t(`${prefix}.left button`)}</ThemeModes>
                    </ThemeModes>
                    <img src={serviceImg} className='press-srv-image' alt="Press Service" />
                </ThemeModes>

                <ThemeModes tagName='gray-div' className='service-item'>
                    <ThemeModes tagName='h3'>{t(`${prefix}.right title`)}</ThemeModes>
                    <div className='flex-col'>
                        <ThemeModes tagName='gn-p'>{t(`${prefix}.right text`)}</ThemeModes>
                        <ThemeModes tagName='gn-p'>{t(`${prefix}.right email`)}</ThemeModes>
                    </div>
                </ThemeModes>
            </ThemeModes>
        </ThemeModes>
    )
}

export default PressService