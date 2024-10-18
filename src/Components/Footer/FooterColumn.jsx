import { Link } from "react-router-dom";
import ThemeModes from "../Shared/ThemeModes";

const FooterColumn = ({ colTitle, colLinks }) => {
  const linkElements = colLinks.map((link, index) => {
    return (
      <li key={index}>
        <Link to={link.url}>
          <ThemeModes tagName="gn-p" href={link.url}>
            {link.text}
          </ThemeModes>
        </Link>
      </li>
    );
  });

  return (
    <li className="column">
      <ThemeModes tagName="h4" className="colTitle">
        {colTitle}
      </ThemeModes>
      <ul className="colLinks">{linkElements}</ul>
    </li>
  );
};

export default FooterColumn;
