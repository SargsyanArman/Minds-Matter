import "../../../Styles/BottomNavigation.css";
import ThemeModes from "../../../Components/Shared/ThemeModes";
import { Avatar, Box } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { fetchUser } from "../../../Constants/MenuConstants";
import TextMuiShared from "../../../Components/Shared/TextMuiShared";
import { useAuth } from "../../../Hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../Store/Slices/UserSlices";
import { useNavigate } from "react-router-dom";
import Visa from "/visa.png";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import {LangContext} from "../../../Contexts/LangContext";


function General() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const { isAuth, id } = useAuth();
  const  {t}= useContext(LangContext);
  const prefix="general";

  useEffect(() => {
    if (isAuth && id) {
      fetchUser(id).then((data) => setUserData(data));
    }
  }, [isAuth, id]);

  const sizeAvatar = {
    height: "80px",
    width: "80px",
  };

  const pr_item_top = {
    display: "flex",
    alignItems: "center",
  };

  const pr_item_bottom = {
    display: "flex",
    justifyContent: "space-between",
  };

  const pr_second_item_bottom = {
    display: "flex",
    margin: "12px 0",
  };

  const roundBox = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "4px solid #F8F0FF",
    marginRight: "20px",
  };

  const maxTotal = {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 700,
    marginTop: "12px",
  };

  const userDataPaymentMethods = () => {
    if (userData && userData.paymentMethod.length > 0) {
      return "Visa ⋅⋅ " + userData.paymentMethod[0].cardNumber.slice(15);
    }

    return "Пожаулста Добавте карту ";
  };

  const bankCard = userDataPaymentMethods();

  const myRef = useRef(null)

  return (
    <ThemeModes tagName="simpleDiv" className="pr-general">
      <ThemeModes onClick={() => navigate('/profile/details')} tagName="gray-div" className="gn-user pr-item">
        <div style={pr_item_top}>
          <Avatar sx={{ ...sizeAvatar, marginRight: "20px" }}>
            <ThemeModes tagName="h3">
              {userData && userData.firstName ? userData.firstName[0] : "U"}
            </ThemeModes>
          </Avatar>
          {userData && userData.firstName && userData.lastName ? (
            <TextMuiShared>{`${userData.firstName} ${userData.lastName}`}</TextMuiShared>
          ) : (
            <TextMuiShared> {t(`${prefix}.loading`)} </TextMuiShared>
          )}
        </div>
        <div style={pr_item_bottom}>
          <ThemeModes className='flex-center' style={pr_item_bottom}>
            <ThemeModes tagName="gn-span" className='general-span' >{t(`${prefix}.telephone`)}</ThemeModes>
            <ThemeModes tagName="span" className='general-span'>
              {userData ? userData.phoneNumber : "N/A"}
            </ThemeModes>
          </ThemeModes>
          <ThemeModes
            onClick={() => {
              dispatch(removeUser());
              navigate("/");
            }}
            tagName="simpleButton"
          >
            {t(`${prefix}.logout`)}
          </ThemeModes>
        </div>
      </ThemeModes>

      <ThemeModes tagName="gradient-div" onClick={() => navigate('/profile/purchases/Deliveries')} className="gn-orders pr-item">
        <div style={pr_item_top} className="logo-delivery">
          <Box sx={roundBox}>
            <StarBorderPurple500Icon
              sx={{
                width: "80px",
                height: "60px",
                paddingTop: "18px",
                marginLeft: "2px",
                color: "purple",
              }}
            />
          </Box>
          <TextMuiShared className='general-p'> {t(`${prefix}.deliveris`)} </TextMuiShared>
        </div>
        <p className="p-delivery">
          <ThemeModes tagName="gn-span" className='general-span'> {t(`${prefix}.closest`)} </ThemeModes>
          <ThemeModes tagName="span" className='general-span'> {t(`${prefix}.orders`)} </ThemeModes>
        </p>
        <p className="p-delivery">
          <ThemeModes tagName="gn-span" className='general-span'> {t(`${prefix}.delivery`)} </ThemeModes>
          <ThemeModes tagName="span" className='general-span'> {t(`${prefix}.code`)} </ThemeModes>
        </p>
      </ThemeModes>

      <ThemeModes tagName="gray-div" onClick={() => navigate('/profile/details')} className="gn-limit pr-item">
        <div style={pr_item_top}>
          <Box sx={roundBox}>
            <ThemeModes
              tagName="span"
              className='flex-center general-span'
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "36%",
              }}
            >
              <ThemeModes
                tagName="span"
                className='general-span  gn-p-2'
                style={{ marginRight: "5px" }}
              >
                {t(`${prefix}.to`)}
              </ThemeModes>
              <ThemeModes tagName="span" className='general-span  gn-p-2' style={{ fontSize: "17px" }}>
                {" "}
                30%
              </ThemeModes>
            </ThemeModes>
          </Box>
          <TextMuiShared className='general-p'> {t(`${prefix}.discount`)} </TextMuiShared>
        </div>

        <div className="extra-info" style={{ margin: "12px 0" }}>
          <ThemeModes tagName="gn-span" className='general-span'> {t(`${prefix}.limit`)} </ThemeModes>
          <ThemeModes tagName="p" className='general-p' style={maxTotal}>
            567 $
          </ThemeModes>
        </div>
      </ThemeModes>

      <ThemeModes
        ref={myRef}
        tagName="gray-div"
        className="gn-payment-methods pr-item pr-item--small"
        onClick={() => navigate('/profile/details', { state: { from: 'payment_methods' } })}
      >
        <TextMuiShared className='extra-info general-p'> {t(`${prefix}.payment`)} </TextMuiShared>
        <ThemeModes tagName="p" className='general-p' style={pr_item_bottom}>
          <ThemeModes tagName="gn-span" className='general-span  gn-p-2'>{bankCard}</ThemeModes>
          <ThemeModes tagName="span" className='general-span  gn-p-2'>
            {userData && userData.paymentMethod.length > 0 ? (
              <img src={Visa} style={{ width: "29px", height: "24px" }} />
            ) : (
              ""
            )}
          </ThemeModes>
        </ThemeModes>
      </ThemeModes>
      <ThemeModes onClick={() => navigate('/profile/balance')} tagName="gray-div" className="gn-balance pr-item pr-item--small">
        <TextMuiShared className='general-p'> {t(`${prefix}.balance`)} </TextMuiShared>
        <ThemeModes
          tagName="span"
          className='general-span'
          style={{ display: "flex", alignItems: "center" }}
        >
          <AccountBalanceWalletIcon style={{ marginRight: "10px" }} />
          <ThemeModes tagName="gn-span" className='general-span'>0 $</ThemeModes>
        </ThemeModes>
      </ThemeModes>

      <ThemeModes tagName="gray-div" className="gn-custom pr-item pr-item--small in-parts">
        <TextMuiShared className='general-p'> {t(`${prefix}.inparts`)} </TextMuiShared>
        <ThemeModes
          tagName="span"
          className='extra-info general-span'
        >
          <ProductionQuantityLimitsIcon style={{ marginRight: "10px" }} />
          <ThemeModes tagName="gn-span" className='general-span'> {t(`${prefix}.limit2`)} 3000 $</ThemeModes>
        </ThemeModes>
      </ThemeModes>

      <ThemeModes onClick={() => navigate('/profile/purchases/Checks')} tagName="gray-div" className="gn-check pr-item pr-item--small">
        <TextMuiShared className='general-p'> {t(`${prefix}.checks`)} </TextMuiShared>
        <ThemeModes className='extra-info general-span' tagName="gn-span"> {t(`${prefix}.view`)} </ThemeModes>
      </ThemeModes>

      <ThemeModes onClick={() => navigate('/profile/purchases/Purchases')} tagName="gray-div" className="gn-archive pr-item pr-last--line">
        <TextMuiShared className='general-p'> {t(`${prefix}.purchase`)} </TextMuiShared>
        <ThemeModes className='extra-info general-span' tagName="gn-span"> {t(`${prefix}.view`)} </ThemeModes>
      </ThemeModes>

      <ThemeModes onClick={() => navigate('/orders')} tagName="gray-div" className="gn-basket pr-item pr-last--line">
        <TextMuiShared className='general-p'> {t(`${prefix}.basket`)} </TextMuiShared>
        <ThemeModes tagName="gn-span" className='extra-info general-span'>
        {t(`${prefix}.bookbasket`)} {userData && userData.orders.length} 
        </ThemeModes>
      </ThemeModes>

      <ThemeModes onClick={() => navigate('/profile/favorites')} tagName="gray-div" className="gn-favorites pr-item pr-last--line">
        <TextMuiShared className='general-p'> {t(`${prefix}.fav`)} </TextMuiShared>
        <ThemeModes tagName="gn-span" className='extra-info general-span'>
          {userData && userData.favorites.length} {t(`${prefix}.instock`)}
        </ThemeModes>
      </ThemeModes>
    </ThemeModes>
  )
}

export default General;
