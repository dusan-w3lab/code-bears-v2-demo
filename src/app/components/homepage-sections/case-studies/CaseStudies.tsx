"use client";
import React from "react";
import styles from "./CaseStudies.module.scss";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../../public/assets/case-studies/img-1.png";
import img2 from "../../../../../public/assets/case-studies/programming.jpg";
import img3 from "../../../../../public/assets/case-studies/programming2.jpg";
import Image from "next/image";
import { EffectFade } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([Autoplay]);

const CaseStudies = () => {
  return (
    <section className={`${styles.portfolio__area_2}`}>
      <div className={`container g-0 line pt-100 ${styles.case_studies}`}>
        <div className="row">
          <div className="col-xxl-12">
            <div className={`${styles.sec_title_wrapper} text-anim`}>
              <h2 className={`${styles.sec_title_3} title-anim`}>
                Selected Projects
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`container ${styles.case_studies} ${styles.projects_slider}`}
      >
        <div
          className={`${styles.swiper_section} ${styles.projects_slider_inner}`}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <div className={`container ${styles.case_studies}`}>
              <SwiperSlide>
                <div className={`${styles.portfolio__slide_2}`}>
                  <div className={`${styles.slide_img}`}>
                    <a href="portfolio-details.html">
                      <Image
                        src={img1}
                        width={800}
                        height={700}
                        alt="first-image"
                      />
                    </a>
                  </div>
                  <div className={`${styles.slide_content}`}>
                    <h2 className={`${styles.sec_title}`}>
                      <a href="portfolio-details.html">Flight Tracking</a>
                    </h2>
                    <p>
                      With an intuitive interface and advanced filtering
                      options, you can easily search for specific flights or
                      explore the overall air traffic in real-time. <br />{" "}
                      <br />
                      Whether you are a frequent traveler, aviation enthusiast,
                      or simply curious about the world above, our project is
                      the perfect way to discover the magic of flight.
                    </p>
                    <div className="btn-common-wrap">
                      <a
                        href="portfolio-details.html"
                        className={`${styles.btn_common}`}
                      >
                        View details <BsArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={`${styles.portfolio__slide_2}`}>
                  <div className={`${styles.slide_img}`}>
                    <a href="portfolio-details.html">
                      <Image
                        src={img2}
                        width={800}
                        height={700}
                        alt="first-image"
                      />
                    </a>
                  </div>
                  <div className={`${styles.slide_content}`}>
                    <h2 className={`${styles.sec_title}`}>
                      <a href="portfolio-details.html">Lionpro Agency</a>
                    </h2>
                    <p>
                      With an intuitive interface and advanced filtering
                      options, you can easily search for specific flights or
                      explore the overall air traffic in real-time. <br />{" "}
                      <br />
                      Whether you are a frequent traveler, aviation enthusiast,
                      or simply curious about the world above, our project is
                      the perfect way to discover the magic of flight.
                    </p>
                    <div className="btn-common-wrap">
                      <a
                        href="portfolio-details.html"
                        className={`${styles.btn_common}`}
                      >
                        View details <BsArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={`${styles.portfolio__slide_2}`}>
                  <div className={`${styles.slide_img}`}>
                    <a href="portfolio-details.html">
                      <Image
                        src={img3}
                        width={800}
                        height={700}
                        alt="first-image"
                      />
                    </a>
                  </div>
                  <div className={`${styles.slide_content}`}>
                    <h2 className={`${styles.sec_title}`}>
                      <a href="portfolio-details.html">crodyflw Website</a>
                    </h2>
                    <p>
                      With an intuitive interface and advanced filtering
                      options, you can easily search for specific flights or
                      explore the overall air traffic in real-time. <br />{" "}
                      <br />
                      Whether you are a frequent traveler, aviation enthusiast,
                      or simply curious about the world above, our project is
                      the perfect way to discover the magic of flight.
                    </p>
                    <div className="btn-common-wrap">
                      <a
                        href="portfolio-details.html"
                        className={`${styles.btn_common}`}
                      >
                        View details <BsArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="portfolio__slider-2-pagination--">
              <div className="swiper-pagination circle-pagination right"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
