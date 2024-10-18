import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Typography, IconButton, Modal } from "@mui/material";
import ThemeModes from "../Shared/ThemeModes";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ModalLogin() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        bgcolor: 'background.paper',
        padding: '32px',
        gap: '15px',
    };

    const avatarSize = {
        height: "100px",
        width: "100px",
    };

    const buttonStyle = {
        width: '100%',
        padding: '12px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
    };

    return (
        <>
            <IconButton color="inherit" aria-label="open login modal" onClick={handleOpen}>
                <AccountCircleIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={modalStyle}>
                    <Avatar sx={avatarSize} />
                    <Typography>После входа вам будут доступны товары с персональными скидками</Typography>
                    <Link to="/signin" style={{ textDecoration: 'none', width: '100%' }}>
                        <ThemeModes
                            tagName='buttonModeDeliveris'
                            style={buttonStyle}
                            onClick={handleClose}
                        >
                            Sign in or Sign up
                        </ThemeModes>
                    </Link>
                </Box>
            </Modal>
        </>
    );
}
