import { useContext } from "react";
import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TextWithIcon from "./TextWithIcon";
import { LangContext } from "../../../Contexts/LangContext";
import { Trans } from "react-i18next";

const SalesWithUs = ({ onHide }) => {
  const { t } = useContext(LangContext);
  const prefix = "Orders page";

  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'block' },
        height: "120px",
        borderRadius: "8px",
        my: "20px",
        background:
          "linear-gradient(to right, rgba(101, 75, 225, 0.3), rgba(231, 3, 252, 0.05))",
        p: "10px",
      }}
    >
      <Box>

        <TextWithIcon
          text={
            <>
              <Trans i18nKey={`${prefix}.discount top`} >
                <strong>3%</strong> discount if you are our <strong>special&nbsp;customer</strong>.
              </Trans>
            </>
          }
          IconComponent={CancelIcon}
          onIconClick={onHide}
        />
      </Box>
      <TextWithIcon
        text={
          <span style={{ color: "#B903FC" }}>
            <b>{t(`${prefix}.discount bottom`)}</b>
          </span>
        }
        IconComponent={AccountBalanceWalletIcon}
      />
    </Box>
  );
};

export default SalesWithUs;
