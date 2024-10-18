import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ThemeModes from "../../Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";
import {
  DIALOG_BUY_BUTTON, DIALOG_CART_BUTTON, DIALOG_CONTENT, DIALOG_DIV, DIALOG_ICON_BUTTON, DIALOG_IMG, DIALOG_MORE_BUTTON, DIALOG_SELLER, DIALOG_SPAN, DIALOG_STYLES,
} from "../../../Constants/MenuConstants";

const ModalCard = ({
  handleClose,
  open,
  imgSrc,
  price,
  currency,
  seller,
  category,
  rating,
  rNum,
  itemURL,
  handleAddToCart,
}) => {
  const { t } = React.useContext(LangContext);
  const prefix = "Card";

  const details = [
    { label: category, style: DIALOG_SPAN },
    { label: `${price} ${currency}`, style: DIALOG_SPAN },
    { label: `${t(`${prefix}.seller`)} ${seller}`, style: DIALOG_SELLER },
    { label: `${t(`${prefix}.rating`)} ${rating} (${rNum} ${t(`${prefix}.reviews`)})`, style: DIALOG_SELLER },
  ];

  const buttons = [
    {
      label: t(`${prefix}.buy`),
      variant: "contained",
      sx: DIALOG_BUY_BUTTON,
      onClick: () => { },
    },
    {
      label: t(`${prefix}.cart`),
      variant: "outlined",
      sx: DIALOG_CART_BUTTON,
      onClick: handleAddToCart,
    },
    {
      label: t(`${prefix}.more`),
      variant: "outlined",
      sx: DIALOG_MORE_BUTTON,
      href: itemURL,
      target: "_blank",
    },
  ];

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" sx={DIALOG_STYLES}>
      <IconButton aria-label="close" onClick={handleClose} sx={DIALOG_ICON_BUTTON}>
        <CloseIcon />
      </IconButton>
      <DialogContent sx={DIALOG_CONTENT}>
        <img src={imgSrc} alt="Item" style={DIALOG_IMG} />
        <div style={DIALOG_DIV}>
          <div>
            {details.map((item, index) => (
              <ThemeModes key={index} tagName="span" style={item.style}>
                {item.label}
              </ThemeModes>
            ))}
          </div>
          <div style={{ marginBottom: "10px" }}>
            {buttons.slice(0, 2).map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                sx={button.sx}
                onClick={button.onClick}
              >
                {button.label}
              </Button>
            ))}
          </div>
          <Button
            variant={buttons[2].variant}
            sx={buttons[2].sx}
            href={buttons[2].href}
            target={buttons[2].target}
          >
            {buttons[2].label}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCard;
