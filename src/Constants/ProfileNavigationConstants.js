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

const COMM_BOX_STYLES = {
    padding: "32px 0 32px 32px"
}

const COMM_SUB_TITLE_STYLES = {
    margin: "8px 0 18px 0"
}

const DETAILS_BOX_STYLES = {
    margin: 0,
    width: "100%",
    minHeight: "224px",
    cursor: "default",
    marginBottom: "50px",
}

const DETAILS_CARD_STYLES = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
}

const DETAILS_MODAL_STYLES = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 310, sm: 400 },
    height: { xs: 'auto', sm: 400 },
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const DETAILS_MODAL_BOX_STYLES = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}

const DETAILS_MODAL_INPUT_BOX_STYLES = {
    display: "flex",
    gap: "20px"
}

const MODAL_INPUT_STYLES = {
    width: "48%"
}

const USER_CIRCLE_ICON_STYLES = {
    marginLeft: '12px',
    color: 'green',
    marginBottom: '-6px'
}

const USER_SIZE_AVATAR = {
    height: "80px",
    width: "80px",
    marginRight: "20px"
};

const USER_BOX_STYLES = {
    display: 'flex',
    alignItems: 'center'
}


export {
    BALANCE_TITLE_STYLES,
    BALLANCE_BUTTON_STYLES,
    BALLANCE_ICON_STYLES,
    BALANCE_SPAN_STYLES,
    COMM_BOX_STYLES,
    COMM_SUB_TITLE_STYLES,
    DETAILS_BOX_STYLES,
    DETAILS_CARD_STYLES,
    DETAILS_MODAL_STYLES,
    DETAILS_MODAL_BOX_STYLES,
    DETAILS_MODAL_INPUT_BOX_STYLES,
    MODAL_INPUT_STYLES,
    USER_CIRCLE_ICON_STYLES,
    USER_SIZE_AVATAR,
    USER_BOX_STYLES
}