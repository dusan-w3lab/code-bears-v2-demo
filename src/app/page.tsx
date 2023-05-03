import HeroSection from "./components/homepage-sections/hero-section/HeroSection";
import MiniAboutSection from "./components/homepage-sections/mini-about-us-section/mini-about-section";
import ServicesSection from "./components/homepage-sections/services-section/ServicesSection";
import HorizontalLine from "./components/layout/layout-elements/horizontal-line/HorizontalLine";
import CaseStudies from "./components/homepage-sections/case-studies/case-studies";
import HowWeDoIt from "./components/homepage-sections/how-we-do-It/HowWeDoIt";
import TestimonialsSection from "./components/homepage-sections/testimonials-section/testimonials-section";
import Footer from "./components/layout/footer/Footer";

import styles from "./page.module.css";

export default function homepage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <MiniAboutSection />
      <HorizontalLine />
      <ServicesSection />
      <HorizontalLine />
      <CaseStudies />
      <HowWeDoIt />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
