"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from './lib.js';
import TestimonialSingle from './testimonial-single';
import Image from 'next/image';

import 'swiper/swiper-bundle.css';
import styles from './testimonials-section.module.scss'

const TestimonialsSection = () => {
  return (
    <section className={styles['testimonial__area-3']}>
        <div className="container">
            <div className="row">
                <div className="col-xxl-12">
                    <Swiper
                        navigation={{
                            nextEl: "#nextNav",
                            prevEl: "#prevNav",
                        }}
                        className={styles['testimonial__slider-3']}
                    >
                        {
                            testimonials.slides.map((testimonial, index) => (
                                <SwiperSlide className={styles['testimonial__slide-3']} key={index}>
                                    <TestimonialSingle />
                                </SwiperSlide>
                            ))
                        }
                        <div className={styles['testimonial_btns-container']}>
                            <div className={`${styles['next-button']} ${styles['swipper-btn']}`} id='nextNav'><i className="fa-solid fa-arrow-left"></i>1</div>
                            <div className={`${styles['prev-button']} ${styles['swipper-btn']}`} id='prevNav'><i className="fa-solid fa-arrow-right"></i>2</div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
        <div className="testimonial__images-3 animation_image_zoom">
            <Image src='https://images.unsplash.com/photo-1682821890455-044ea43d8b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' width={170} height={200} alt="testimonial Image" className={styles['testimonial3__img']} style={{objectFit:"cover"}} />
            <Image src='https://images.unsplash.com/photo-1682711274476-02947d6b4699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' width={90} height={100} alt="testimonial Image" className={styles['testimonial3__img-2']} style={{objectFit:"cover"}} /> 
            <Image src='https://images.unsplash.com/photo-1682842098670-ace3aa03f719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' width={250} height={325} alt="testimonial Image" className={styles['testimonial3__img-3']} style={{objectFit:"cover"}} />
            <Image src='https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' width={250} height={325} alt="testimonial Image" className={styles['testimonial3__img-4']} style={{objectFit:"cover"}} />
            <Image src='https://images.unsplash.com/photo-1552960366-b330a2f83823?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' width={245} height={278} alt="testimonial Image" className={styles['testimonial3__img-5']} style={{objectFit:"cover"}} />
            <Image src='https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' width={140} height={160} alt="testimonial Image" className={styles['testimonial3__img-6']} style={{objectFit:"cover"}} /> 
        </div>
    </section>
  )
}

export default TestimonialsSection