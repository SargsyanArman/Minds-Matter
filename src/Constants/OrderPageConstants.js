const CONTAINER_BG = "#575757";
const BOX_BG = "#FFFFFF";
const TEXT_COLOR = "#9C9C9C";

const ORDER_STYLES = {
    m: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "6px",
    maxHeight: "500px",
    overflowY: "auto",
}

const ORDER_BOX_STYLES = {
    display: "flex",
    alignItems: "start",
    gap: 2,
    position: "relative",
    paddingBottom: 2,
}

const CHECKBOX_STYLES = {
    position: "absolute",
    marginLeft: "230px",
    padding: "0",
}

const ORDER_BOX_STYLES_SECOND = {
    display: "flex",
    gap: 2
}

const MAX_WIDTH = {
    maxWidth: "250px"
}

const TEXT_STYLES = {
    width: "200px",

    overflow: "hidden",
    textOverflow: "ellipsis",
}

const TEXT_RESPONSIVE_STYLES = {
    whiteSpace: {
        xs: "normal",
        sm: "nowrap",
    },
}

const ORDER_SPAN_STYLES = {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    textDecorationColor:
        "rgb(34, 34, 34)",
    whiteSpace: "normal",
    display: "inline-block",
    wordBreak: "break-word",
}

const ORDER_BOX_STYLES_THIRD = {
    marginLeft: 2,
    marginRight: 2,
    display: "flex",
    flexDirection: {
        xs: "column",
        sm: "row",
    },
    flex: 1,
    justifyContent: "space-between",
}

const ORDER_BOX_STYLES_FOURTH = {
    position: "relative",
    textAlign: {
        xs: "left",
        sm: "left",
        md: "right",
    },
}

const ORDER_TEXT_LINE = {
    textDecoration:
        "line-through",
}

const ORDER_BUTTON_FAVORITE = {
    backgroundColor: "transparent",
    border: "none",
}

const ORDER_DELETE_STYLES = {
    color: "rgba(240, 240, 240, 0.7)",
    ml: 1,
    mt: 1,
}

const ORDER_FAV_BORDER_COLOR = {
    color: "rgba(240, 240, 240, 0.7)",
}

const QUANTITY_STYLES = {
    marginX: "8px",
    width: "60px",
    fontSize: "14px",
    textAlign: "center",
    border: "none",
    outline: "none",
    borderRadius: "4px",
    padding: "2px",
    WebkitAppearance: "none",
    backgroundColor: 'transparent',
    MozAppearance: "textfield",
}

const COUNTER_BUTTON_STYLES = {
    width: "24px",
    height: "24px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent',
    cursor: 'pointer'
}

const AGREEMENT_CHECKBOX_STYLES = {
    "& .MuiSvgIcon-root": {
        borderRadius: "4px",
        color: "rgba(0, 0, 0, 0.54)",
    },
    "&.Mui-checked": {
        "& .MuiSvgIcon-root": {
            backgroundColor: "transparent",
        },
    },
}

const ORDER_BUTTON_STYLES = {
    width: "100%",
    height: "60px",
    backgroundColor: "#8E34E9",
    color: "#fff",
    borderRadius: "8px",
}

const INFO_P_STYLES = {
    color: 'red',
    marginTop: '10px'
}

const RIGHT_SIDE_BOX = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: '15px',
    width: "100%",
}

export {
    BOX_BG,
    CONTAINER_BG,
    TEXT_COLOR,
    ORDER_STYLES,
    ORDER_BOX_STYLES,
    CHECKBOX_STYLES,
    ORDER_BOX_STYLES_SECOND,
    MAX_WIDTH,
    TEXT_STYLES,
    TEXT_RESPONSIVE_STYLES,
    ORDER_SPAN_STYLES,
    ORDER_BOX_STYLES_THIRD,
    ORDER_BOX_STYLES_FOURTH,
    ORDER_TEXT_LINE,
    ORDER_BUTTON_FAVORITE,
    ORDER_DELETE_STYLES,
    ORDER_FAV_BORDER_COLOR,
    QUANTITY_STYLES,
    COUNTER_BUTTON_STYLES,
    AGREEMENT_CHECKBOX_STYLES,
    ORDER_BUTTON_STYLES,
    INFO_P_STYLES,
    RIGHT_SIDE_BOX,
};
