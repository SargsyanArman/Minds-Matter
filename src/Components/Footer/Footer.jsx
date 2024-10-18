import ThemeModes from "../Shared/ThemeModes";
import FooterColumn from "./FooterColumn";
import { useContext } from "react";
import { LangContext } from "../../Contexts/LangContext";
import "./footer.css";

const Footer = () => {
  const { t } = useContext(LangContext);
  const prefix = "Footer";

  const columnsData = [
    {
      title: t(`${prefix}.For buyers`),
      links: [
        { text: t(`${prefix}.FAQ`), url: "/faq/how-make-order" },
        { text: t(`${prefix}.Legal information`), url: "#" },
      ],
    },
    {
      title: t(`${prefix}.Company`),
      links: [
        { text: t(`${prefix}.About us`), url: "/services/about-us" },
        { text: t(`${prefix}.Contacts`), url: "/services/contact" },
        { text: t(`${prefix}.Press service`), url: "/services/pressService" },
        { text: t(`${prefix}.Vacancies`), url: "/services/requisites" },
        { text: t(`${prefix}.Report`), url: "/services/bugBounty" },
      ],
    },
  ];

  const columns = columnsData.map((col, index) => (
    <FooterColumn
      key={index}
      colTitle={col.title}
      colLinks={col.links}
    />
  ));

  return (
    <ThemeModes tagName="footer">
      <ul className="footerColumns">{columns}</ul>
      <div className="copyright">
        <p>
          &copy; <b>Minds Matter</b> {t(`${prefix}.copyright`)}
        </p>
      </div>
      <div className="socials">
        <ul>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="none">
                <path
                  fill="#868695"
                  d="M1.685 6.878C7.599 4.276 15.253 1.104 16.309.665c2.771-1.15 3.622-.93 3.198 1.616-.305 1.83-1.183 7.885-1.884 11.655-.415 2.235-1.348 2.5-2.813 1.533-.705-.466-4.263-2.819-5.035-3.371-.705-.504-1.677-1.11-.458-2.303.434-.424 3.278-3.14 5.494-5.254.29-.278-.075-.734-.41-.511-2.986 1.98-7.128 4.73-7.655 5.088-.796.54-1.56.788-2.933.394-1.038-.298-2.05-.653-2.445-.789-1.519-.52-1.158-1.196.317-1.845Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </ThemeModes>
  );
};

export default Footer;
