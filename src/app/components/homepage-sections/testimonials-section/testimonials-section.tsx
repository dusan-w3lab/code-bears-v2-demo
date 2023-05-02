"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from './lib.js';
import TestimonialSingle from './testimonial-single';

import 'swiper/swiper-bundle.css';
import styles from './testimonials-section.module.scss'

const TestimonialsSection = () => {
  return (
    <section className={styles['testimonial__area-4']}>
        <div className={`container ${styles['g-0']} ${styles['line_4']} ${styles['testimonial__pt']}`}>
            <div className={styles['line-col-4']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="row">
                <div className="col-xxl-12">
                    <div className={`${styles['testimonial__sec-title']} text-anim`}>
                        <h2 className={styles['sec-subtile-6']}>Testimonials</h2>
                        <h3 className={` ${styles['sec-title-6']} title-anim`}>Clients feedback</h3>
                        <p>We are Trusted by 10,000+ global customers teams like have projects with this template</p>
                    </div>
                </div>

                <Swiper
                    className={styles['testimonial__slider-4']}
                    navigation={{ prevEl: '.prev-button', nextEl: '.next-button' }}
                    pagination={{ el: '.testimonial__pagination-4', clickable: true }}
                    // pagination={{
                    //     type: "fraction",
                    // }}
                    slidesPerView={3}
                >
                    {
                        testimonials.slides.map((slide, index) => (
                            <SwiperSlide className={styles['testimonial__slide-4']} key={index}>
                                <TestimonialSingle />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>   

                <div className={styles['testimonial__btn-4']}>
                    <div className="prev-button swipper-btn">LEF</div>
                    <div className="next-button swipper-btn">Arrow 2</div>
                    <div className={`pagination ${styles['testimonial__pagination-4']} `}>
                        <div className="pag"></div>
                    </div>
                </div>             
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection