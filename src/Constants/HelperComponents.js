const CIRCULAR_STYLES = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
    width: "100%",
}

const UNAUTHORIZED_STYLES = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: { sx: '50vh', sm: '100vh' },
    p: 2
}

const UNAUTHORIZED_BUTTON_STYLES = {
    mt: 2,
    textTransform: "none"
}

const PAPER_STYLES = {
    p: 4,
    borderRadius: 2,
    textAlign: "center",
    maxWidth: 400,
}

export {
    CIRCULAR_STYLES,
    UNAUTHORIZED_STYLES,
    UNAUTHORIZED_BUTTON_STYLES,
    PAPER_STYLES
}