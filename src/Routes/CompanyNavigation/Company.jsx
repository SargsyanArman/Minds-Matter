import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import ThemeModes from "../../Components/Shared/ThemeModes";
import { useContext } from "react";
import { LangContext } from "../../Contexts/LangContext";
import { COMPANY_NAV_ACTION_STYLES } from "../../Constants/CompanyConstants";

const Company = () => {
    const { t } = useContext(LangContext);
    const prefix = "Company navbar";

    const CompanyNavigation = [
        {
            to: "/services/about-us",
            label: t(`${prefix}.About us`),
        },
        {
            to: "/services/requisites",
            label: t(`${prefix}.Requisites`),
        },
        {
            to: "/services/pressService",
            label: t(`${prefix}.Press service`),
        },
        {
            to: "/services/contact",
            label: t(`${prefix}.Contact`),
        },
        {
            to: "/services/bugBounty",
            label: t(`${prefix}.Bug bounty`),
        },
    ];

    const { pathname } = useLocation();
    const value = CompanyNavigation.findIndex(({ to }) => pathname === to);

    return (
        <ThemeModes tagName="div" style={{ backgroundColor: "#e0e0e0" }}>
            <BottomNavigation
                showLabels
                value={value}
                sx={{ justifyContent: "space-between" }}
            >
                {CompanyNavigation.map(({ to, label }) => (
                    <BottomNavigationAction
                        key={to}
                        component={Link}
                        to={to}
                        label={label}
                        sx={COMPANY_NAV_ACTION_STYLES}
                        className="nav-company"
                    />
                ))}
            </BottomNavigation>
            <Outlet />
        </ThemeModes>
    );
}
export default Company;
