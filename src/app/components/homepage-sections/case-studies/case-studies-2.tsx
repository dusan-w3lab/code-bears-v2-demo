"use client"

import SwiperCore, { Pagination, Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

import CaseImg1 from '../../../../../public/assets/case-studies/img-1.png'

import styles from './case-studies-2.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);
SwiperCore.use([Autoplay]);

export default function Portfolio() {
  
  return (
    <section className={styles['portfolio__area-2']}>
      <div className={`container ${styles['g-0']} ${styles.line} ${styles['pt-100']} ${styles['pb-140']}`}>
        <div className="row">
          <div className="col-xxl-12">
            <div className={`${styles['sec-title-wrapper']}`}>
              <h2 className={styles['sec-title-3']}>
                Selected Projects
              </h2>
              {/* <p className={styles['sec-text']}>
                Worked with global brands & agency at the intersection of flat
                design and digitalasdasd technology.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <Swiper
        className={styles['portfolio__slider-2']}
        slidesPerView={1}
        direction={"vertical"}
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className={styles['portfolio__slide-2']}>
            <div className={styles['slide-img']}>
              <Image
                src={CaseImg1}
                alt="Portfolio Image"
                width={945}
                height={1000}
              />
            </div>
            <div className={styles['slide-content']}>
              <h3 className={styles['slide-content-title']}>Real-time Flight Tracking: Explore the Skies with Our Project</h3>
              <p>
                We are passionate designers, developers and digital marketeers.
                We produce best projects that both ourselves
              </p>
              <div className={styles['btn-common-wrap']}>
                <a href="portfolio-details.html" className={styles['btn-common']}>
                  View details <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles['portfolio__slide-2']}>
            <div className={styles['slide-img']}>
              <Image
                src={CaseImg1}
                alt="Portfolio Image"
                width={945}
                height={1000}
              />
            </div>
            <div className={styles['slide-content']}>
              <h3 className={styles['slide-content-title']}>Project #2</h3>
              <p>
                We are passionate designers, developers and digital marketeers.
                We produce best projects that both ourselves
              </p>
              <div className={styles['btn-common-wrap']}>
                <a href="portfolio-details.html" className={styles['btn-common']}>
                  View details <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}
