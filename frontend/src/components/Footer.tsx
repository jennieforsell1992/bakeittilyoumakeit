import { FaPhone } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <h3 className="footer-logo">Bake it til you make it</h3>
      </div>

      <div className="wrapper-contacts">
        <p className="contact">Kontakt</p>

        <span className="address-wrapper">
          <FaHouse />
          <p className="contact-text">
            Adress: Gästrikegatan 11, 113 62 Stockholm
          </p>
        </span>
        <span className="phone-wrapper">
          <FaPhone /> <p className="contact-text">telefonnummer: 0736516546</p>
        </span>
        <span className="email-wrapper">
          <IoIosMail />
          <p className="contact-text">email: info@bakeittilyoumakeit.se</p>
        </span>
      </div>
    </footer>
  );
};
