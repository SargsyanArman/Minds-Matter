import { Typography } from "@mui/material";
import { useContext } from "react";
import { LangContext } from "../Contexts/LangContext";
import { Trans } from "react-i18next";

function Copyright(props) {
  const { t } = useContext(LangContext);
  const prefix = "Copyright";
  const date = new Date().getFullYear();

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      style={{whiteSpace: "break-spaces"}}
      {...props}
    >
      <Trans i18nKey={`${prefix}.text`}>
        Copyright ©&Tab;<strong>Minds Matter</strong> {{date}}.
      </Trans>
    </Typography>
  );
}

export default Copyright;
