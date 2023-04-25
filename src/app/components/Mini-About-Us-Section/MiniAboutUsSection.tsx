import React from "react";
import styles from "./MiniAboutUsSection.module.scss";
import Image from "next/image";
import imgLeft from "../../../../public/assets/mini-about-us/img-1.png";

const MiniAboutUsSection = () => {
  return (
    <section className={`${styles.about__area}`}>
      <div className={`container ${styles.line} g-0 pt-140 pb-130`}>
        <span className={`${styles.line_3}`}></span>
        <div className={`${styles.cont} row`}>
          <div className="col-xxl-12">
            <div className={`${styles.about__title_wrapper}`}>
              <h3 className={`${styles.sec_title} title-anim`}>
                We unlock the potential of your business with creative design
              </h3>
            </div>
            <div className={`${styles.about__content_wrapper}`}>
              <div className={`${styles.square_edge_left}`}></div>
              <div className={`${styles.square_edge_right}`}></div>

              <div className={`${styles.about__img}`}>
                <div className={`${styles.img_anim}`}>
                  <img
                    src="assets/imgs/about/1/1.jpg"
                    alt="About Image"
                    data-speed="0.3"
                  />
                  {/* <Image src={imgLeft} width={526} height={49} /> */}
                </div>

                <div className={`${styles.about__img_right}`}>
                  <img
                    src="assets/imgs/about/1/2.jpg"
                    alt="About Image Right"
                    data-speed="0.5"
                  />
                  <div className={`${styles.shape}`}>
                    <div className="secondary" data-speed="0.9"></div>
                    <div className="primary"></div>
                  </div>
                </div>
              </div>

              <div className={`${styles.about__content} text_anim`}>
                <p>
                  From traditional PR and thought leadership campaigns to
                  storytelling and creative social media management we’ve got
                  you covered. Something is not your average order-taking
                  vendor. We are proud to be the go-to partner for some of the
                  world’s biggest agencies and brands because they trust our
                  expertise
                </p>

                <div className={`cursor-btn ${styles.btn_wrapper}`}>
                  <a
                    className={`${styles.btn_item} ${styles.wc_btn_primary} btn_hover`}
                    href="about.html"
                  >
                    <span></span> Explore Us
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniAboutUsSection;
