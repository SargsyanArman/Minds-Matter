import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, ListItemIcon, ListItemText, Typography, Tooltip } from '@mui/material';
import {
  Person as PersonIcon,
  PersonAdd as PersonAddIcon,
  Favorite as FavoriteIcon,
  LocalShipping as LocalShippingIcon,
  AccountBalance as AccountBalanceIcon,
  ExitToApp as ExitToAppIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';
import { HeaderContext } from '../../Contexts/HeaderContext';
import { useAuth } from '../../Hooks/use-auth';
import { removeUser } from '../../Store/Slices/UserSlices';
import { StyledLink, MENU_STYLE } from '../../Constants/MenuConstants';
import { LangContext } from '../../Contexts/LangContext';
import { fetchUser } from '../../Constants/MenuConstants';

export const AccMenu = () => {
  const navigate = useNavigate();
  const { isAuth, id } = useAuth();
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const { handleMenuClose, sign } = useContext(HeaderContext);
  const { t } = useContext(LangContext);
  const mode = useSelector((state) => state.mode.mode);

  useEffect(() => {
    if (isAuth && id) {
      fetchUser(id).then(setUserData);
    }
  }, [isAuth, id]);

  const handleLogout = () => {
    dispatch(removeUser());
    handleMenuClose();
    navigate('/');
  };

  const menuItems = isAuth
    ? [
      {
        to: '/profile/details',
        icon: <PersonIcon />,
        text: `${userData?.firstName} ${userData?.lastName}`,
      },
      { to: '/orders', icon: <LocalShippingIcon />, text: t('Header.orders') },
      { to: '/profile/favorites', icon: <FavoriteIcon />, text: t('Header.favorites') },
      { to: '/profile/balance', icon: <AccountBalanceIcon />, text: t('Header.balance') },
      { to: '/profile/details#payment-methods', icon: <PaymentIcon />, text: t('Header.payment') },
      {
        onClick: handleLogout,
        icon: <ExitToAppIcon />,
        text: t('Header.logout'),
        to: '/',
        sx: { justifyContent: 'flex-end', },
      },
    ]
    : [
      { to: '/signin', icon: <PersonIcon />, text: t('Header.signin') },
      { to: '/signup', icon: <PersonAddIcon />, text: t('Header.signup') },
    ];

  return (
    <Menu
      id="accountMenu"
      anchorEl={sign}
      open={Boolean(sign)}
      onClose={handleMenuClose}
      PaperProps={{ sx: MENU_STYLE }}
      MenuListProps={{ sx: { py: 0 } }}

    >
      {menuItems.map((item, index) => (
        item.to ? (
          <StyledLink to={item.to} onClick={item?.onClick} key={index}>
            <MenuItem sx={{ backgroundColor: mode === 'dark' ? 'black' : 'white' }} onClick={handleMenuClose}>
              <ListItemIcon sx={{ color: mode === 'dark' ? 'red' : 'black' }}>{item.icon}</ListItemIcon>
                <Tooltip title={item.text}>
                  <Typography sx={{ color: mode === 'dark' ? 'gray' : 'black' }} className='accMenuItem'>
                    {item.text}
                  </Typography>
                </Tooltip>
            </MenuItem>
          </StyledLink>
        ) : (
          <MenuItem onClick={item.onClick} key={index} sx={item.sx}>
            <ListItemText primary={item.text} />
            <ListItemIcon>{item.icon}</ListItemIcon>
          </MenuItem>
        )
      ))}
    </Menu>
  );
};


