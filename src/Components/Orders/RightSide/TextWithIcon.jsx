import { Box, Typography } from "@mui/material";
import { TEXT_BOX_STYLES, TEXT_ICON_STYLES } from "../../../Constants/OrderPageConstants";

const TextWithIcon = ({ text, IconComponent, onIconClick }) => {
  return (
    <Box sx={TEXT_BOX_STYLES}>
      <Typography variant="body1">{text}</Typography>
      {IconComponent && (
        <IconComponent
          onClick={onIconClick}
          sx={TEXT_ICON_STYLES}
        />
      )}
    </Box>
  );
};

export default TextWithIcon;
