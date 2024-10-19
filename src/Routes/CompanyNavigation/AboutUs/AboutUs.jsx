import { useContext } from "react";
import { LangContext } from "../../../Contexts/LangContext";
import { Trans } from "react-i18next";
import "./Aboutus.css";
import MindMatter from '/Mind_Matter.png';
import orders from '/orders.png';
import warehouse from '/warehouse.png';
import items from '/items.png';
import delivery from '/delivery.png';
import sales from '/sales.png';
import pickup from '/pickup.png';
import selection from '/selection.png';
import ThemeModes from "../../../Components/Shared/ThemeModes";

const AboutUs = () => {
  const { t } = useContext(LangContext);
  const prefix = "About us page";

  const achievements = [
    {
      title: t(`${prefix}.achievement1title`),
      description: t(`${prefix}.achievement1`),
      img: orders,
      alt: 'Orders'
    },
    {
      title: t(`${prefix}.achievement2title`),
      description: t(`${prefix}.achievement2`),
      img: warehouse,
      alt: 'Warehouse'
    },
    {
      title: t(`${prefix}.achievement3title`),
      description: t(`${prefix}.achievement3`),
      img: items,
      alt: 'Items'
    }
  ];

  const features = [
    {
      h4: t(`${prefix}.feature1title`),
      img: delivery,
      h3: t(`${prefix}.feature1descTitle`),
      p: t(`${prefix}.feature1desc`)
    },
    {
      h4: t(`${prefix}.feature2title`),
      img: sales,
      h3: t(`${prefix}.feature2descTitle`),
      p: t(`${prefix}.feature2desc`)
    },
    {
      h4: t(`${prefix}.feature3title`),
      img: pickup,
      h3: t(`${prefix}.feature3descTitle`),
      p: t(`${prefix}.feature3desc`)
    },
    {
      h4: t(`${prefix}.feature4title`),
      img: selection,
      h3: t(`${prefix}.feature4descTitle`),
      p: t(`${prefix}.feature4desc`)
    }
  ];

  return (
    <ThemeModes tagName="gray-Div" id="about-us">
      <ThemeModes tagName="gradient-div-2" className="breadcrumbs">
        <h1>
          <Trans i18nKey={`${prefix}.welcomeText`}>Welcome to</Trans>
          <img src={MindMatter} alt="Mind Matter" />
        </h1>
      </ThemeModes>

      <div className="achievements">
        <ul className="achievements-ul">
          {achievements.map((achievement, index) => (
            <ThemeModes tagName="gray-li" key={index}>
              <div className="text">
                <ThemeModes className='about-us-h3' tagName="h3">{achievement.title}</ThemeModes>
                <ThemeModes className='about-us-p' tagName="p">{achievement.description}</ThemeModes>
              </div>
              <img src={achievement.img} alt={achievement.alt} />
            </ThemeModes>
          ))}
        </ul>
      </div>

      <div className="features">
        <h2>{t(`${prefix}.Buy`)}</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <ThemeModes tagName="gray-div" className="thumbnail">
                <ThemeModes className='about-us-h3' tagName="h3">{feature.h4}</ThemeModes>
                <img src={feature.img} alt="" />
              </ThemeModes>
              <ThemeModes className='about-us-h3' tagName="h3">{feature.h3}</ThemeModes>
              <ThemeModes className='about-us-p' tagName="p">{feature.p}</ThemeModes>
            </li>
          ))}
        </ul>
      </div>
    </ThemeModes>
  );
};

export default AboutUs;
