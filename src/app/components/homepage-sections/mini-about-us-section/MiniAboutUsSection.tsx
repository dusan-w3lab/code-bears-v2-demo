"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import imgRight from "../../../../../public/assets/mini-about-us/img-2.png";
import styles from "./MiniAboutUsSection.module.scss";

const MiniAboutUsSection = () => {
  const [coords, setCoords] = useState({ x: -15, y: -15 });
  const [top, setTop] = useState(280);
  const handleMouseOver = (event: any) => {
    const rect = event.target.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  const ref = useRef(null);

  const [bottomPosition, setBottomPosition] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY) {
        setScrollDir("down");

        console.log("down");
      } else if (prevScrollY.current > currentScrollY) {
        setScrollDir("up");
      }
      prevScrollY.current = currentScrollY;
      if (window.pageYOffset > 480 && scrollDir === "down") setTop(top + 2.5);
      else if (window.pageYOffset < 1400 && scrollDir === "up")
        setTop(top - 2.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.pageYOffset, top, scrollDir]);

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
                  {/* <Image
                    src={imgLeft}
                    width={590}
                    height={480}
                    alt="left-image"
                  /> */}
                </div>

                <div
                  className={`${styles.about__img_right}`}
                  style={{
                    top: `${top}px`,
                    transform: `translate(${0}px, ${top}px)`,
                  }}
                  ref={ref}
                >
                  <Image
                    src={imgRight}
                    width={220}
                    height={200}
                    alt="right-image"
                  />
                  <div className={`${styles.shape}`}>
                    <div
                      className={`${styles.secondary}`}
                      data-speed="0.9"
                    ></div>
                    <div className={`${styles.primary}`}></div>
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
                    onMouseOver={handleMouseOver}
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
