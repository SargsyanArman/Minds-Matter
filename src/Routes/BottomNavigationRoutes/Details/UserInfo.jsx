import { Avatar, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import ThemeModes from '../../../Components/Shared/ThemeModes';
import TextMuiShared from '../../../Components/Shared/TextMuiShared';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';
import { getAuth, sendEmailVerification } from 'firebase/auth'; // Добавлен импорт
import { useContext } from "react";
import { LangContext } from "../../../Contexts/LangContext";

import './Detail.css';

const UserInfo = ({ userData }) => {
    const { t } = useContext(LangContext);
    const prefix = "Profile";

    const sizeAvatar = {
        height: "80px",
        width: "80px",
    };

    const userDatas = useSelector((state) => state.user);
    const { email, emailVerified } = useSelector((state) => state.user);
    const [verificationSent, setVerificationSent] = useState(false);

    const handleSendVerificationEmail = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user && !emailVerified) {
            try {
                await sendEmailVerification(user, {
                    handleCodeInApp: true,
                    url: `https://${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}/verify-email`,
                });
                alert('Verification email sent');
                setVerificationSent(true);
            } catch (error) {
                console.error('Error sending email verification:', error);
                alert(t(`${prefix}.alert`));
            }
        }
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ ...sizeAvatar, marginRight: "20px" }}>
                    <ThemeModes tagName="h3">
                        {userData && userData.firstName ? userData.firstName[0] : "U"}
                    </ThemeModes>
                </Avatar>
                {userData && userData.firstName && userData.lastName ? (
                    <ThemeModes tagName='h3'>{`${userData.firstName} ${userData.lastName}`}</ThemeModes>
                ) : (
                    <TextMuiShared>{t(`${prefix}.loading`)}</TextMuiShared>
                )}
            </div>
            <ul className='user-ul-info'>
                <li className='details-info-account'>
                    <ThemeModes tagName='gn-p' className='details-p-span'>{t(`${prefix}.tel`)}</ThemeModes>
                    <ThemeModes tagName="span" className='details-p-span'>
                        {userData?.phoneNumber || "N/A"}
                    </ThemeModes>
                </li>
                <li className='details-info-account'>
                    <ThemeModes tagName='gn-p' className='user-info details-p-span'>{t(`${prefix}.mail`)}</ThemeModes>
                    <ThemeModes tagName="span" className='details-p-span'>
                        {userData?.email || "N/A"}

                        {emailVerified ? (
                            <Tooltip title={t(`${prefix}.verified`)}>
                                <CheckCircleIcon className='icon-info' sx={{ marginLeft: '12px', color: 'green', marginBottom: '-6px' }} />
                            </Tooltip>
                        ) : (
                            <Tooltip title={verificationSent ? t(`${prefix}.verification sent`) : t(`${prefix}.verification not sent`)}>
                                <IconButton onClick={handleSendVerificationEmail}>
                                    <DangerousIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </Tooltip>
                        )}
                    </ThemeModes>
                </li>
                <li className='details-info-account'>
                    <ThemeModes tagName='gn-p' className='details-p-span'>{t(`${prefix}.gender`)}</ThemeModes>
                    <ThemeModes tagName="span" className='details-p-span'>
                        {userData?.gender?.[0]?.toUpperCase() + userData?.gender?.slice(1) || "N/A"}
                    </ThemeModes>
                </li>
            </ul>
        </>
    );
};

export default UserInfo;
