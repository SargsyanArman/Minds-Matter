const dialogStyles = {
  borderRadius: "20px",
  width: "900px",
  height: "auto",
  padding: "24px",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

const closeButton = {
  position: "absolute",
  right: 16,
  top: 16,
  color: "#333",
};

const imageStyles = {
  width: "320px",
  height: "420px",
  borderRadius: "10px",
  objectFit: "cover",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
};

const titleCategory = {
  fontWeight: 700,
  fontSize: "22px",
  color: "#333",
  marginBottom: "16px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  maxWidth: "500px",
  width: "100%",
};

const priceAndCurrency = {
  fontSize: "24px",
  fontWeight: 700,
  color: "#D70057",
  marginBottom: "16px",
};

const sellerStyles = {
  fontSize: "16px",
  color: "#999",
  marginBottom: "8px",
};

const ratingStyles = {
  fontSize: "16px",
  color: "#999",
  marginBottom: "24px",
};

const buyButton = {
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
};

const addToCart = {
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
};

const moreInfo = {
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
};

export {
  dialogStyles,
  closeButton,
  imageStyles,
  titleCategory,
  priceAndCurrency,
  sellerStyles,
  ratingStyles,
  buyButton,
  addToCart,
  moreInfo,
};
