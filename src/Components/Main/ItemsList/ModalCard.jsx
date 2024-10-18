import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ThemeModes from "../../Shared/ThemeModes";
import { LangContext } from "../../../Contexts/LangContext";

export default function ModalCard({
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
  handleAddToCart
}) {
  const mode = useSelector((state) => state.mode.mode);
  const { t } = React.useContext(LangContext);
  const prefix = "Card";

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "20px",
          width: "900px",
          height: "auto",
          padding: "24px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          backgroundColor: mode === "dark" ? "black" : "#fff",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          color: "#333",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ padding: 0, display: "flex", gap: "24px" }}>
        <img
          src={imgSrc}
          alt="Book"
          style={{
            width: "320px",
            height: "420px",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ThemeModes
              tagName="span"
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                maxWidth: "500px",
                width: "100%",
              }}
            >
              {category}
            </ThemeModes>

            <ThemeModes
              tagName="span"
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                maxWidth: "500px",
                width: "100%",
              }}
            >
              {price} {currency}
            </ThemeModes>
            <ThemeModes
              tagName="span"
              style={{
                fontSize: "16px",
                marginBottom: "24px",
              }}
            >
              {t(`${prefix}.seller`)}{seller}
            </ThemeModes>
            <ThemeModes
              style={{
                fontSize: "16px",
                marginBottom: "24px",
              }}
            >
              {t(`${prefix}.rating`)}{rating} ({rNum}{t(`${prefix}.reviews`)})
            </ThemeModes>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "10px" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D70057",
                  color: "#fff",
                  width: "48%",
                  padding: "12px 0",
                  borderRadius: "8px",
                  fontWeight: 700,
                  marginRight: "2%",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#c5004e",
                  },
                }}
              >
                {t(`${prefix}.buy`)}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#D70057",
                  color: "#D70057",
                  width: "48%",
                  padding: "12px 0",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "16px",
                  "&:hover": {
                    borderColor: "#c5004e",
                    color: "#c5004e",
                  },
                }}
                rel="noopener noreferrer"
                onClick={handleAddToCart}
              >
                {t(`${prefix}.cart`)}
              </Button>
            </div>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#D70057",
                color: "#D70057",
                width: "98%",
                padding: "6px 0",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "16px",

                "&:hover": {
                  borderColor: "#c5004e",
                  color: "#c5004e",
                },
              }}
              href={itemURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(`${prefix}.more`)}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
