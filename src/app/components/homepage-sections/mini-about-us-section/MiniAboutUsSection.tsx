"use client";
import React, { useState } from "react";

import Image from "next/image";

import { BsArrowUpRight } from "react-icons/bs";
import imgLeft from "../../../../../public/assets/mini-about-us/img-1.png";
import imgRight from "../../../../../public/assets/mini-about-us/img-2.png";

import styles from "./MiniAboutUsSection.module.scss";

const MiniAboutUsSection = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseOver = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <section className={`${styles.about__area}`}>
      <div className={`container ${styles.line} g-0`}>
        <span className={`${styles.line_3}`}></span>
        <div className={`${styles.cont} row`}>
          <div className="col-xxl-12">
            <div className={`${styles.about__title_wrapper}`}>
              <h2 className={`${styles.sec_title} title-anim`}>
                Years of experience in <br />
                software engineering
              </h2>
            </div>
            <div className={`${styles.about__content_wrapper}`}>
              <div className={`${styles.about__img}`}>
                <div className={`${styles.img_anim}`}>
                  <Image
                    src={imgLeft}
                    width={590}
                    height={480}
                    alt="left-image"
                  />
                </div>
                <div className={`${styles.about__img_right}`}>
                  <Image
                    src={imgRight}
                    width={220}
                    height={200}
                    alt="right-image"
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
                <div
                  className={`cursor-btn ${styles.btn_wrapper}`}
                  onMouseOver={handleMouseOver}
                >
                  <a
                    className={`${styles.btn_item} ${styles.wc_btn_primary} btn_hover`}
                    href="about.html"
                  >
                    <span
                      style={{
                        top: `${coords.y}px`,
                        left: `${coords.x}px`,
                      }}
                    />
                    Explore Us <BsArrowUpRight size={14} />
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
