
export const NAV_BAR_STYLES = (mode) => ({
    top: 'auto',
    bottom: 0,
    background: mode === "dark"
        ? "linear-gradient(to right, #9d0000, #d40000)"
        : "linear-gradient(to right, #a103fc, #e703fc)",
    height: "60px",
    display: {
        xs: 'flex',
        md2: 'none',
    },
});
