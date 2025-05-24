import React from "react";
import styles from "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Internships by Places",
      links: [
        "Internship in Delhi",
        "Internship in Mumbai",
        "Internship in Bangalore",
        "Internship in Hyderabad",
        "Internship in Chennai",
        "Internship in Pune",
      ],
    },
    {
      title: "Internships by Stream",
      links: [
        "Computer Science Internship",
        "Marketing Internship",
        "Finance Internship",
        "Mechanical Internship",
        "Content Writing Internship",
        "Graphic Design Internship",
      ],
    },
    {
      title: "Online Internships",
      links: [
        "Work from Home Internship",
        "Part-time Internship",
        "Virtual Internship",
        "Summer Internship",
        "Winter Internship",
      ],
    },
    {
      title: "About Internshala",
      links: [
        "About Us",
        "We're Hiring",
        "Contact Us",
        "Help & Support",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {footerLinks.map((column, index) => (
            <div key={index} className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>{column.title}</h3>
              <ul className={styles.columnLinks}>
                {column.links.map((link, i) => (
                  <li key={i} className={styles.linkItem}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>© 2023 Internshala</div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <FaFacebook />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaLinkedin />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
