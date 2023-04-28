import HeroSection from "./components/homepage-sections/hero-section/HeroSection";
import MiniAboutUsSection from "./components/homepage-sections/mini-about-us-section/MiniAboutUsSection";
import ServicesSection from "./components/homepage-sections/services-section/ServicesSection";
import HorizontalLine from "./components/layout/layout-elements/horizontal-line/HorizontalLine";
import CaseStudies from "./components/homepage-sections/case-studies/CaseStudies";
import HowWeDoIt from "./components/homepage-sections/how-we-do-It/HowWeDoIt";
import Homepage from './homepage/page'

import styles from "./page.module.css";

export default function homepage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <MiniAboutUsSection />
      <HorizontalLine />
      <ServicesSection />
      <HorizontalLine />
      <CaseStudies />
      {/* <HowWeDoIt /> */}
      <Homepage />
    </main>
  );
}
