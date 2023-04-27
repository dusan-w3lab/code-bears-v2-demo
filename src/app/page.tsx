import styles from "./page.module.css";
import HeroSection from "./components/hero-section/HeroSection";
import MiniAboutUsSection from "./components/Mini-About-Us-Section/MiniAboutUsSection";
import ServicesSection from "./components/Services-section/ServicesSection";
import HorizontalLine from "./components/Horizontal-line/HorizontalLine";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import HowWeDoIt from "./components/HowWeDoIt/HowWeDoIt";

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
    </main>
  );
}
