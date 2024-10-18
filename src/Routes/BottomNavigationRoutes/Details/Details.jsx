import { useEffect, useState, useCallback, useRef, useContext } from 'react';
import ThemeModes from '../../../Components/Shared/ThemeModes';
import { useAuth } from '../../../Hooks/use-auth';
import { fetchUser } from '../../../Constants/MenuConstants';
import '../../../Styles/BottomNavigation.css';
import DiscountInfo from './DiscountInfo';
import UserInfo from './UserInfo';
import ModalAddCard from './ModalAddCard';
import Visa from '/visa.png'
import { useLocation } from 'react-router-dom';
import './Detail.css'
import LangMenu from '../../../Components/Header/LangMenu';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../fireBase';
import CloseIcon from '@mui/icons-material/Close';
import { LangContext } from '../../../Contexts/LangContext';

const Details = () => {
    const { t } = useContext(LangContext);
    const prefix = "Profile";

    const location = useLocation();
    console.log(location);

    const ref = useRef(null)
    useEffect(() => {
        if (location.state?.from === 'payment_methods' && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }, [location.state?.from])
    const [userData, setUserData] = useState(null);
    const { isAuth, id } = useAuth();

    const updateUserData = useCallback(() => {
        if (isAuth && id) {
            fetchUser(id)
                .then((data) => setUserData(data))
                .catch((error) => console.error('Ошибка при получении данных пользователя:', error));
        }
    }, [isAuth, id]);

    useEffect(() => {
        updateUserData();
    }, [updateUserData]);
    const handleDelete = async (cardNumber) => {
        try {
            const userDocRef = doc(db, "users", id);
            const paymentMethods = (await getDoc(userDocRef)).data()
                .paymentMethod;
            const updatedPaymentMethods = paymentMethods.filter(
                (p) => p.cardNumber !== cardNumber,
            );
            await updateDoc(userDocRef, {
                paymentMethod: updatedPaymentMethods,
            });
            updateUserData();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <ThemeModes className='details-general-div'>
            <ThemeModes
                tagName="divSimple"
                className="pr-item user-info-details"
            >
                <UserInfo userData={userData} />
            </ThemeModes>

            <ThemeModes
                tagName="divSimple"
                className="pr-item dicount-info-detail"
            >
                <DiscountInfo />
            </ThemeModes>

            <ThemeModes
                tagName="simpleDiv"
                className="pr-item"
                ref={ref}
                style={{
                    margin: 0,
                    width: "100%",
                    minHeight: "224px",
                    cursor: "default",
                    marginBottom: "50px",
                }}
            >
                <ThemeModes tagName='h3'>{t(`${prefix}.payment`)}</ThemeModes>
                <div className='detail-card'>
                    <ThemeModes
                        tagName='simpleDiv'
                        className='detail-each-card add-card'
                    >
                        <ModalAddCard onCardAdded={updateUserData} />
                    </ThemeModes>
                    {userData?.paymentMethod && userData.paymentMethod.map((card, index) => (
                        <ThemeModes
                            key={index}
                            tagName='gray-div'
                            className='detail-each-card'
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <p>Visa ⋅⋅ {card.cardNumber.slice(14)} </p>
                                <img src={Visa} alt="visa image" style={{ width: '30px' }} />
                            </div>
                            <button onClick={() => handleDelete(card.cardNumber)} className="delete-button">
                                <CloseIcon sx={{ fontSize: '12px' }} />
                            </button>
                        </ThemeModes>
                    ))}
                </div>
                <LangMenu />
            </ThemeModes>
        </ThemeModes>
    );
}

export default Details;
