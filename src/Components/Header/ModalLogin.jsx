import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Typography, IconButton, Modal } from "@mui/material";
import ThemeModes from "../Shared/ThemeModes";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AVATAR_STYLES, BUTTON_STYLES, MODAL_STYLES } from "../../Constants/HeaderConstants";

export default function ModalLogin() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Box sx={MODAL_STYLES}>
                    <Avatar sx={AVATAR_STYLES} />
                    <Typography>После входа вам будут доступны товары с персональными скидками</Typography>
                    <Link to="/signin" style={{ textDecoration: 'none', width: '100%' }}>
                        <ThemeModes
                            tagName='button_mode'
                            style={BUTTON_STYLES}
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
