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

const FAVORITES_BOX_STYLE = {
    padding: '30px 0'
}

const FAVORITES_BREADCRUMBS_STYLE = {
    margin: "15px 30px"
}

const FEEDBACK_NAV_ACTION_STYLES = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flex: 1,
    "& .MuiBottomNavigationAction-label": {
        fontSize: "15px",
    },
    "& .MuiBottomNavigationAction-icon": {
        fontSize: "24px",
    },
};

const FEEDBACK_NAV_STYLES = {
    justifyContent: { xs: "space-around", md2: "space-between" },
    width: { xs: '100%', md2: "20%" },
    backgroundColor: "#d5d2d2",
};

const FEEDBACK_BOX_STYLES = {
    width: "100%",
    backgroundColor: "#d5d2d2",
}

const FEEDBACK_LINK_STYLES = {
    textDecoration: "none",
    color: "inherit"
}

const FEEDBACK_BUTTON_BOTTOM_STYLES = {
    color: "inherit",
    textTransform: "capitalize"
}

const FD_COMMENT_STYLES = {
    margin: "22px 0"
}

const FD_BOX_STYLES = {
    padding: "32px 0 32px 32px"
}

const PR_ITEM_TOP = {
    display: "flex",
    alignItems: "center",
};

const PR_ITEM_BOTTOM = {
    display: "flex",
    justifyContent: "space-between",
};

const ROUND_BOX = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "4px solid #F8F0FF",
    marginRight: "20px",
};

const MAX_TOTAL = {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: 700,
    marginTop: "12px",
};

const STAR_STYLES = {
    width: "80px",
    height: "60px",
    paddingTop: "18px",
    marginLeft: "2px",
    color: "purple",
}

const GENERAL_SPAN_STYLES = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "36%",
}

const MARGIN_RIGHT_TEN = {
    marginRight: '10px',
}

const PURCHASES_NAV_STYLES = {
    justifyContent: "space-between",
    width: { xs: '100%', md2: "40%" },
    backgroundColor: "#d5d2d2",
};

const PURCHASES_NAV_ACTION_STYLES = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flex: 1,
    "& .MuiBottomNavigationAction-label": {
        fontSize: "15px",
    },
    "& .MuiBottomNavigationAction-icon": {
        fontSize: "24px",
    },
};

const PURCHASES_BOX_STYLE = {
    width: "100%",
    backgroundColor: "#d5d2d2",
}

const SORT_STYLES = {
    width: { xs: '100%', xs400: '60%', md2: "30%" },
    height: "44px",
    borderRadius: "10px",
};

const PROFILE_NAV_ACTION_STYLES = {
    display: "flex",
    flexDirection: "row",
    color: "black",
    gap: "10px",
    flex: 1,
    "& .MuiBottomNavigationAction-label": {
        fontSize: "15px",
    },
    "& .MuiBottomNavigationAction-icon": {
        fontSize: "24px",
    },
};

const PROFILE_ACTION_STYLES = {
    justifyContent: "space-between",
    display: { xs: 'none', md2: 'flex' }
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
    USER_BOX_STYLES,
    FAVORITES_BOX_STYLE,
    FAVORITES_BREADCRUMBS_STYLE,
    FEEDBACK_NAV_STYLES,
    FEEDBACK_NAV_ACTION_STYLES,
    FEEDBACK_BOX_STYLES,
    FEEDBACK_LINK_STYLES,
    FEEDBACK_BUTTON_BOTTOM_STYLES,
    FD_BOX_STYLES,
    FD_COMMENT_STYLES,
    PR_ITEM_TOP,
    PR_ITEM_BOTTOM,
    ROUND_BOX,
    MAX_TOTAL,
    STAR_STYLES,
    GENERAL_SPAN_STYLES,
    MARGIN_RIGHT_TEN,
    PURCHASES_NAV_STYLES,
    PURCHASES_NAV_ACTION_STYLES,
    PURCHASES_BOX_STYLE,
    SORT_STYLES,
    PROFILE_NAV_ACTION_STYLES,
    PROFILE_ACTION_STYLES
}