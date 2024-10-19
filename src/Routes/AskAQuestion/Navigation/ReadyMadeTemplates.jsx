import ThemeModes from "../../../Components/Shared/ThemeModes";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { READY_B_STYLES, READY_BOLD_TEXT_STYLES, READY_LIST_STYLES } from "../../../Constants/AskAQuestionsConstants";

const Comment = ({ text }) => {
  return (
    <h3 className="ask-h3" > {text} </h3>
  );
};
const SimpleText = ({ text }) => {
  return (
    <ThemeModes tagName="gn-p" className='ask-p' >
      {text}
    </ThemeModes>
  );
};
const List = ({ text }) => {
  return (
    <span style={READY_LIST_STYLES}>
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
    <span style={READY_BOLD_TEXT_STYLES}>
      <b style={READY_B_STYLES}> {num}</b>
      <h3 className="ask-h3"> {text} </h3>
    </span>
  );
};

export { List, SimpleText, Comment, BoldTextNumeric };
