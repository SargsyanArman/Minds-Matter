import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../../../Contexts/LangContext";

function FeedBackNavButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { t } = useContext(LangContext);
  const prefix = "Feedback";

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ color: "inherit", textTransform: "capitalize" }}
        onMouseOver={handleClick}
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
        <MenuItem onClick={handleClose}>
          <Link
            to="feedback/comments"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {t(`${prefix}.menu link1`)}
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="feedback/questions"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {t(`${prefix}.menu link2`)}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FeedBackNavButton;
