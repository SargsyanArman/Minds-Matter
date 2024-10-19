const BALANCE_TITLE_STYLES = {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "12px"
}

const BALLANCE_BUTTON_STYLES = {
    marginTop: "12px",
    width: "226px",
    backgroundColor: "gray",
    cursor: "not-allowed",
    "&.Mui-disabled": {
        cursor: "not-allowed",
        backgroundColor: "lightgray",
    },
}

const BALLANCE_ICON_STYLES = {
    margin: "10px 10px 0 0"
}

const BALANCE_SPAN_STYLES = {
    fontSize: "28px",
    marginBottom: '3px'
}

export {
    BALANCE_TITLE_STYLES,
    BALLANCE_BUTTON_STYLES,
    BALLANCE_ICON_STYLES,
    BALANCE_SPAN_STYLES
}