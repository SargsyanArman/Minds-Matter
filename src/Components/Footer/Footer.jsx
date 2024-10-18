import ThemeModes from "../Shared/ThemeModes";
import FooterColumn from "./FooterColumn";
import { useContext } from "react";
import { LangContext } from "../../Contexts/LangContext";

import "./footer.css";

const Footer = () => {
  const { t } = useContext(LangContext);
  const prefix = "Footer";

  const columns = [
    <FooterColumn
      key={1}
      colTitle={t(`${prefix}.For buyers`)}
      colLinks={[
        { text: t(`${prefix}.FAQ`), url: "/faq/how-make-order" },
        { text: t(`${prefix}.Legal information`), url: "#" },
      ]}
    />,
    <FooterColumn
      key={4}
      colTitle={t(`${prefix}.Company`)}
      colLinks={[
        { text: t(`${prefix}.About us`), url: "/services/about-us" },
        { text: t(`${prefix}.Contacts`), url: "/services/contact" },
        { text: t(`${prefix}.Press service`), url: "/services/pressService" },
        { text: t(`${prefix}.Vacancies`), url: "/services/requisites" },
        { text: t(`${prefix}.Report`), url: "/services/bugBounty" },
      ]}
    />,
  ];

  return (
    <ThemeModes tagName="footer">
      <ul className="footerColumns">
        {columns}
        {/* <li>
          <div className="QRcode">QR Code</div>
        </li> */}
      </ul>
      <div className="copyright">
        <p>
          &copy; <b>Minds Matter</b>
          {t(`${prefix}.copyright`)}
        </p>
      </div>
      <div className="socials">
        <ul>
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="none"
              >
                <path
                  fill="#868695"
                  d="M1.685 6.878C7.599 4.276 15.253 1.104 16.309.665c2.771-1.15 3.622-.93 3.198 1.616-.305 1.83-1.183 7.885-1.884 11.655-.415 2.235-1.348 2.5-2.813 1.533-.705-.466-4.263-2.819-5.035-3.371-.705-.504-1.677-1.11-.458-2.303.434-.424 3.278-3.14 5.494-5.254.29-.278-.075-.734-.41-.511-2.986 1.98-7.128 4.73-7.655 5.088-.796.54-1.56.788-2.933.394-1.038-.298-2.05-.653-2.445-.789-1.519-.52-1.158-1.196.317-1.845Z"
                />
              </svg>
            </button>
          </li>
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="none"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 310 310"
              >
                <g id="XMLID_834_">
                  <path
                    fill="#868695"
                    d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                  />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="none"
                viewBox="0 0 256 256"
                id="Flat"
              >
                <path
                  fill="#868695"
                  stroke="#868695"
                  strokeWidth="25"
                  d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"
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
