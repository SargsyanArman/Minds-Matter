import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { CIRCULAR_STYLES } from "../Constants/HelperComponents";

export default function CircularIndeterminate() {
  return (
    <Box sx={CIRCULAR_STYLES}>
      <CircularProgress />
    </Box>
  );
}
