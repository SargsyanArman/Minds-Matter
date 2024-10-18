import { Box } from "@mui/material";
import { forwardRef } from "react";
import { useSelector } from "react-redux";

const BoxMui = forwardRef(function BoxMui({ children, style: propsStyle = {}, ...rest }, ref) {
  const mode = useSelector((state) => state.mode.mode);

  const box = {
    backgroundColor: mode === 'dark' ? 'gray' : 'white',
    color: mode === 'dark' ? 'white' : 'black'
  }

  return (
    <Box {...rest} style={{ ...box, ...propsStyle }} ref={ref}>
      {children}
    </Box>
  );
});

export default BoxMui;
