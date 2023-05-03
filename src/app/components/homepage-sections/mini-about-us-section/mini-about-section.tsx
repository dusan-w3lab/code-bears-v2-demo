import Image from 'next/image'

import styles from './mini-about-section.module.scss'

const MiniAboutSection = () => {
  return (
    <section className={styles['about__area']}>
      <div className={`container ${styles.line} ${styles['g-0']} ${styles['pt-140']} ${styles['pb-130']}`}>
        <span className={styles['line-3']}></span>
        <div className="row">
          <div className="col-xxl-12">
            <div className={styles['about__title-wrapper']}>
              <h3 className={`${styles['sec-title']} title-anim`}>
                We unlock the potential of your business with creative design
              </h3>
            </div>

            <div className={styles['about__content-wrapper']}>
              <div className={styles['about__img']}>
                <div className="img-anim">
                  <Image
                    src="https://images.unsplash.com/photo-1613579992511-9e60cbb5b814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="About Image"
                    width={1000}
                    height={667}
                    data-speed="0.3"
                  />
                </div>

                <div className={styles['about__img-right']}>
                  <Image
                    src="https://images.unsplash.com/photo-1536158614364-49b81421db1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="About Image Right"
                    width={220}
                    height={250}
                    data-speed="0.5"
                  />
                  <div className={styles['shape']}>
                    <div className={styles['secondary']} data-speed="0.9"></div>
                    <div className={styles['primary']}></div>
                  </div>
                </div>
              </div>

              <div className={`${styles['about__content']} text-anim`}>
                <p>
                  From traditional PR and thought leadership campaigns to storytelling and creative social media management we’ve got you covered. Something is not your average order-taking vendor. We are proud to be the go-to partner for some of the world’s biggest agencies and brands because they trust our expertise
                </p>

                <div className={`cursor-btn ${styles['btn_wrapper']}`}>
                  <a className={`${styles['btn-item']} ${styles['wc-btn-primary']} btn-hover`} href="about.html">
                    <span></span> Explore Us{' '}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiniAboutSection