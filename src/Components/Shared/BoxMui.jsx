import { Box } from "@mui/material";
import { forwardRef } from "react";
import { useSelector } from "react-redux";
import { DARK } from "../../Constants/GlobalConstants";

const BoxMui = forwardRef(function BoxMui({ children, style: propsStyle = {}, ...rest }, ref) {
  const mode = useSelector((state) => state.mode.mode);

  const box = {
    backgroundColor: mode === DARK ? 'gray' : 'white',
    color: mode === DARK ? 'white' : 'black'
  }

  return (
    <Box {...rest} style={{ ...box, ...propsStyle }} ref={ref}>
      {children}
    </Box>
  );
});

export default BoxMui;
