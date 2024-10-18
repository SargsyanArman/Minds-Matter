import { Box, Typography } from "@mui/material";

const TextWithIcon = ({ text, IconComponent, onIconClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography variant="body1">{text}</Typography>
      {IconComponent && (
        <IconComponent
          onClick={onIconClick}
          sx={{ marginLeft: 6, color: "rgba(180, 180, 180, 0.7)" }}
        />
      )}
    </Box>
  );
};

export default TextWithIcon;
