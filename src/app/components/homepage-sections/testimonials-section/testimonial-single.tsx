import styles from './testimonials-section.module.scss'

const TestimonialSingle = () => {
  return (
    <>
        <p>
            When we talk about Alts, we do not mean a typical business
            partner, but rather a team that collaborates with us daily,
            always there for us when we encounter difficulties and
            celebrate achievements. We see in Alts our best ally for
            success!
        </p>
        <h2 className={styles['client__name-3']}>Maria D. Halk</h2>
        <h3 className={styles['client__role-3']}>Managing Director</h3>
    </>
  )
}

export default TestimonialSingle