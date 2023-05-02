import React from "react";
import styles from "./footer.module.scss";
import footerImg from "../../../../../public/assets/footer-imgs/footer.jpg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={`${styles["footer__area"]}`}>
      <div className={`${styles["footer__top"]}`}>
        <div className={`container ${styles["footer-line"]}`}></div>
        <Image src={footerImg} width={780} height={560} alt="footer image" />
      </div>

      <div className={`${styles["footer__btm"]}`}>
        <div className="container">
          <div className={`row ${styles["footer__row"]}`}>
            <div className="col-xxl-12">
              <div className={`${styles["footer__inner"]}`}>
                <div className={`${styles["footer__widget"]}`}>
                  <p>
                    When do they work well, and when do they on us and finally,
                    when do we actually need how can we avoid them.
                  </p>
                  <ul className={`${styles["footer__social"]}`}>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-facebook-f"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-linkedin"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={`${styles["footer__widget-2"]}`}>
                  <h2 className={`${styles["footer__widget-title"]}`}>
                    Information
                  </h2>
                  <ul className={`${styles["footer__link"]}`}>
                    <li>
                      <a href="about.html">About Company</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Case Study</a>
                    </li>
                    <li>
                      <a href="career.html">Career</a>
                    </li>
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </div>

                <div className={`${styles["footer__widget-3"]}`}>
                  <h2 className={`${styles["footer__widget-title"]}`}>
                    Contact Us
                  </h2>
                  <ul className={`${styles["footer__contact"]}`}>
                    <li>Valentin, Street Road 24, New York, USA - 67452</li>
                    <li>
                      <a href="tel:02574328301" className="phone">
                        +02 574 - 328 - 301
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@buildyexample.com">
                        info@buildyexample.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={`${styles["footer__widget-4"]}`}>
                  <h2 className={`${styles["project-title"]}`}>
                    Have a project in your mind?
                  </h2>
                  <div className={`${styles["btn_wrapper"]}`}>
                    <a
                      href="contact.html"
                      className={`${styles["wc-btn-primary"]} ${styles["btn-hover"]} ${styles["btn-item"]}`}
                    >
                      <span></span> contact us
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                  <h3 className={`${styles["contact-time"]}`}>
                    09 : 00 AM - 10 : 30 PM
                  </h3>
                  <h4 className={`${styles["contact-day"]}`}>
                    Saturday - Thursday
                  </h4>
                </div>

                <div className={`${styles["footer__copyright"]}`}>
                  <p>
                    © 2022 - 2025 | Alrights reserved by
                    <a href="https://wealcoder.com/" target="_blank">
                      Wealcoder
                    </a>
                  </p>
                </div>

                <div className={`${styles["footer__subscribe"]}`}>
                  <form action="#">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit" className={`${styles["subs-btn"]}`}>
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
