import ThemeModes from "../../../Components/Shared/ThemeModes";

function ContactCards({ headerText, bodyText, text }) {
  return (
    <ThemeModes tagName='gray-div' className="contact-card">
      <ThemeModes tagName='h1'>{headerText}</ThemeModes>
      <ThemeModes tagName='gn-p' style={{ whiteSpace: "pre-wrap" }}>{bodyText}</ThemeModes>
      <ThemeModes href="h3" className='text-contact'>{text}</ThemeModes>
    </ThemeModes>
  );
}

export default ContactCards;
