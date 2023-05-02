"use client";
import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import styles from "./HowWeDoIt.module.scss";

SwiperCore.use([Navigation]);

const HowWeDoIt = () => {
  return (
    <section className={`${styles.workflow__area}`}>
      <div
        className={`container g-0 ${styles.line} ${styles.h_w_w} pt-140 pb-140`}
      >
        <div className={`${styles.line_3}`}></div>
        <div className="row">
          <div className="col-xxl-12">
            <div className={`${styles.sec_title_wrapper}`}>
              <h2 className={`${styles.sec_sub_title} title-anim`}>Workflow</h2>
              <h3 className={`${styles.sec_title} title-anim`}>How we work</h3>
            </div>
          </div>

          <div className={`col-xxl-12 ${styles.how_we_work}`}>
            <Swiper slidesPerView={3}>
              <SwiperSlide className={`${styles.workflow__slide} fade_left`}>
                <h4 className={`${styles.workflow__step}`}>step 01</h4>
                <h5 className={`${styles.workflow__number}`}>01</h5>
                <h6 className={`${styles.workflow__title}`}>Audience</h6>
                <p>Having these the marketplace to your business</p>
              </SwiperSlide>

              <SwiperSlide className={`${styles.workflow__slide} fade_left`}>
                <h4 className={`${styles.workflow__step}`}>step 02</h4>
                <h5 className={`${styles.workflow__number}`}>02</h5>
                <h6 className={`${styles.workflow__title}`}>Plan & Sketch</h6>
                <p>Delicate and long-lasting with vitamins and nutritions</p>
              </SwiperSlide>

              <SwiperSlide className={`${styles.workflow__slide} fade_left`}>
                <h4 className={`${styles.workflow__step}`}>step 03</h4>
                <h5 className={`${styles.workflow__number}`}>03</h5>
                <h6 className={`${styles.workflow__title}`}>Customize</h6>
                <p>Creating brand identities for the digital experiences</p>
              </SwiperSlide>

              <SwiperSlide className={`${styles.workflow__slide} fade_left`}>
                <h4 className={`${styles.workflow__step}`}>step 04</h4>
                <h5 className={`${styles.workflow__number}`}>04</h5>
                <h6 className={`${styles.workflow__title}`}>User Testing</h6>
                <p>We look forward to engage with beyond the conventional</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
