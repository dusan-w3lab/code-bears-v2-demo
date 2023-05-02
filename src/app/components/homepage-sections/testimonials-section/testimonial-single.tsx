import Image from 'next/image';

import styles from './testimonials-section.module.scss'

const TestimonialSingle = () => {
  return (
    <>
    <div style={{position:"relative"}}>
        <Image
            className={styles['testimonial__img-4']}
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Testimonial Image"
            width={150}
            height={150}
            style={{objectFit:"cover"}}
        />
        </div>
        <div className={styles['testimonial__info-4']}>
            <h4 className={styles['testimonial__feedback-4']}>Design Quality</h4>
            <p>
                Our philosophy is built on people who are addicted on creating, learning, and growing
                together, which allows us to discover better others miss.
            </p>
            <h5 className={styles['testimonial__name-4']}>Jessica Sherlock</h5>
            <h6 className={styles['testimonial__role-4']}>Manager, Oitaka</h6>
        </div>
    </>
  )
}

export default TestimonialSingle