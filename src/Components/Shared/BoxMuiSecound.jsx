import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { DARK } from "../../Constants/GlobalConstants";

const BoxRoundMui = ({ children, style: propsStyle = {}, ...rest }) => {
    const mode = useSelector((state) => state.mode.mode);

    const box = {
        backgroundColor: mode === DARK ? 'black' : 'white',
        color: mode === DARK ? 'white' : 'black'
    }

    return (
        <Box {...rest} style={{ ...box, ...propsStyle }}>
            {children}
        </Box>
    );
};

export default BoxRoundMui;
