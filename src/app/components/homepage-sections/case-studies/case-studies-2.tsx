"use client"

import Image from 'next/image';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/components/pagination/pagination.min.css';
import styles from './case-studies-2.module.scss'

SwiperCore.use([Pagination]);

const Portfolio = () => {
  return (
    <section className={styles['portfolio__area-2']}>
      <div className={`container g-0 line ${styles['pt-100']} pb-140`}>
        <div className="row">
          <div className="col-xxl-12">
            <div className={`${styles['sec-title-wrapper']} text-anim`}>
              <h2 className={`${styles['sec-title-3']} title-anim`}>
                Selected <span>Projects</span>
              </h2>
              <p className={styles['sec-text']}>
                Worked with global brands &amp; agency at the intersection of flat design and digitalasdasd
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        className={styles['portfolio__slider-2']}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={styles['portfolio__slide-2']}>
            <div className={styles['slide-img']}>
              <a href="portfolio-details.html">
                <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Portfolio Image" width={480} height={360} />
              </a>
            </div>
            <div className="slide-content">
              <h2 className={styles['sec-title']}>
                <a href="portfolio-details.html">
                  Lionpro <span>Agency</span>
                </a>
              </h2>
              <p>
                We are passionate designers, developers and digital marketeers. We produce best projects that both
                ourselves
              </p>
              <div className="btn-common-wrap">
                <a href="portfolio-details.html" className="btn-common">
                  View details <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Portfolio;
