const ASK_A_QUESTIONS_LIST_STYLES = {
    cursor: 'pointer',
    '&:hover': { textDecoration: 'underline' }
}

const DELIVERY_TITLE_STYLES = {
    mb: 6,
    color: "white",
    fontSize: { xs: '16px', sm: '18px', md2: '20px' }
}

const DELIVERY_BOX_STYLES = {
    display: 'flex',
    flexDirection: { xs: "column", lg: 'row' }
}

const FONT_SIZE_FORTY = {
    fontSize: 40
}

const FEAUTRE_STYLES = {
    mb: 2,
    color: "white",
    fontSize: { xs: '14px', sm: '16px', md2: '18px' }
}

const DETAILS_BUTTON_STYLES = {
    fontSize: { xs: '11px', sm: '16px', md2: '18px' }
}

const DELIVERY_CARTON_STYLES = {
    display: { xs: 'none', sm2: 'block' }
}

const DELIVERY_BOX_STYLES_SECOND = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: 600,
    borderRadius: 8,
    background: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    p: 2,
}

const DELIVERY_BOX_STYLES_THIRD = {
    display: "flex",
    justifyContent: "space-between",
    height: 'auto'
}

const DELIVERY_BOX_STYLES_FORTH = {
    display: "flex",
    flexWrap: 'wrap', gap: { xs: '61px', md2: '18px' },
    width: { xs: '100%', md2: '80%' },
    height: 'auto',
    justifyContent: { xs: 'center', sm: 'space-between' }
}

const DELIVERY_BOX_STYLES_FIFTH = {
    width: 500,
    height: 500,
    display: { xs: 'none', md2: 'flex' },
    width: '100%',
    alignItems: "center",
    justifyContent: "flex-end",
}

const DELIVERY_IMAGE_STYLES = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 14
}

const MAKE_ORDER_BOX_STYLES = {
    width: "100%",
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
}

const MAKE_ORDER_IMAGE_STYLES = {
    width: "90%",
    height: "100%",
    borderRadius: "14px",
}

const MAKE_ORDER_STEPS = [2, 3, 4, 5, 6, 7];

const MONEY_REFUND_BOX_STYLES = {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: " 10px",
}

const MONEY_REFUND_TEXT_STYLES = {
    borderBottom: "1px solid white",
    padding: "10px 0",
    paddingLeft: "20px",
    paddingBottom: "20px",
    fontWeight: "normal",
    fontSize: "20px",
}

const MONEY_REFUND_TITLE_STYLES = {
    fontSize: "20px",
    paddingLeft: "0px"
}

const MONEY_REFUND_UL_STYLES = {
    paddingLeft: "20px",
    listStyleType: "none"
}

const MONEY_REFUND_LI_STYLES = {
    margin: "5px 0"
}

const PAYMENT_METHOD_IMAGE_STYLES = {
    width: "50px",
    height: "30px"
}

const PAYMENT_METHOD_COLLAPSE_STYLES = {
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
}

const READY_LIST_STYLES = {
    display: "flex",
    gap: "4px",
    alignItems: "center"
}

const READY_BOLD_TEXT_STYLES = {
    display: "flex",
    alignItems: "center"
}

const READY_B_STYLES = {
    fontSize: "24px",
    marginRight: "6px"
}

const RETURN_SECTION_STYLES = {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px"
}

const RETURN_SPAN_STYLES = {
    display: "flex",
    alignItems: "center"
}

const RETURN_B_STYLES = {
    fontSize: "24px",
    marginRight: "6px"
}

const RULES_SELLING_STYLES = {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
}

const RULES_TRADING_STYLES = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    flexWrap: "nowrap",
    marginLeft: "20px"
}

const BOTTOM_NAVIGATION_ACTION_STYLES = {
    display: "flex",
    flexDirection: "row",
    color: "black",
    gap: "10px",
    flex: 1,
    fontSize: { xs: '14px', sm: '24px' },
    height: 'auto',
    margin: '10px 0'
};

const BOTTOM_NAVIGATION_STYLES = {
    justifyContent: "space-between",
    flexWrap: { xs: 'wrap', md2: 'nowrap', height: 'auto' }
}

const TEXT = 'text'

const IMAGE = 'image'

export {
    ASK_A_QUESTIONS_LIST_STYLES,
    DELIVERY_TITLE_STYLES,
    DELIVERY_BOX_STYLES,
    FONT_SIZE_FORTY,
    FEAUTRE_STYLES,
    DETAILS_BUTTON_STYLES,
    DELIVERY_CARTON_STYLES,
    DELIVERY_BOX_STYLES_SECOND,
    DELIVERY_BOX_STYLES_THIRD,
    DELIVERY_BOX_STYLES_FORTH,
    DELIVERY_BOX_STYLES_FIFTH,
    DELIVERY_IMAGE_STYLES,
    MAKE_ORDER_BOX_STYLES,
    MAKE_ORDER_IMAGE_STYLES,
    MAKE_ORDER_STEPS,
    MONEY_REFUND_BOX_STYLES,
    MONEY_REFUND_TEXT_STYLES,
    MONEY_REFUND_TITLE_STYLES,
    MONEY_REFUND_UL_STYLES,
    MONEY_REFUND_LI_STYLES,
    PAYMENT_METHOD_IMAGE_STYLES,
    PAYMENT_METHOD_COLLAPSE_STYLES,
    READY_LIST_STYLES,
    READY_BOLD_TEXT_STYLES,
    READY_B_STYLES,
    RETURN_SECTION_STYLES,
    RETURN_SPAN_STYLES,
    RETURN_B_STYLES,
    RULES_SELLING_STYLES,
    RULES_TRADING_STYLES,
    BOTTOM_NAVIGATION_ACTION_STYLES,
    BOTTOM_NAVIGATION_STYLES,
    TEXT,
    IMAGE
}