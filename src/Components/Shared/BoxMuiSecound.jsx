import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const BoxRoundMui = ({ children, style: propsStyle = {}, ...rest }) => {
    const mode = useSelector((state) => state.mode.mode);

    const box = {
        backgroundColor: mode === 'dark' ? 'black' : 'white',
        color: mode === 'dark' ? 'white' : 'black'
    }

    return (
        <Box {...rest} style={{ ...box, ...propsStyle }}>
            {children}
        </Box>
    );
};

export default BoxRoundMui;
