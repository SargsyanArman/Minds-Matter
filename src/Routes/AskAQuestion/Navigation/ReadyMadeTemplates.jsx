import ThemeModes from "../../../Components/Shared/ThemeModes";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Comment = ({ text }) => {
  return (
    <h3
      className="ask-h3"
    >
      {text}
    </h3>
  );
};
const SimpleText = ({ text }) => {
  return (
    <ThemeModes
      tagName="gn-p"
      className='ask-p'
    >
      {text}
    </ThemeModes>
  );
};
const List = ({ text }) => {
  return (
    <span style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <HorizontalRuleIcon />
      <ThemeModes
        tagName="gn-p"
        className='ask-p-2'
      >
        {text}
      </ThemeModes>
    </span>
  );
};
const BoldTextNumeric = ({ text, num }) => {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <b style={{ fontSize: "24px", marginRight: "6px" }}> {num}</b>
      <h3 className="ask-h3">
        {text}
      </h3>
    </span>
  );
};

export { List, SimpleText, Comment, BoldTextNumeric };
