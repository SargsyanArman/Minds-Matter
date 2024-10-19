import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../../Contexts/LangContext";
import { FEEDBACK_BUTTON_BOTTOM_STYLES, FEEDBACK_LINK_STYLES } from "../../../Constants/ProfileNavigationConstants";

function FeedBackNavButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useContext(LangContext);
  const prefix = "Feedback";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={FEEDBACK_BUTTON_BOTTOM_STYLES}
      >
        {t(`${prefix}.button`)}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {["comments", "questions"].map((link, index) => (
          <MenuItem key={link} onClick={handleClose}>
            <Link to={`feedback/${link}`} style={FEEDBACK_LINK_STYLES}>
              {t(`${prefix}.menu link${index + 1}`)}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default FeedBackNavButton;
