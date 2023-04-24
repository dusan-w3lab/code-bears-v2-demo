import Link from "next/link";
import styles from "./page.module.css";
import HeroSection from "./components/hero-section/HeroSection";
export default function homepage() {
  return (
    <main className={styles.main}>
      <h1>Code Bears - v2</h1>
      <Link href="/homepage"> Homepage</Link>
      <HeroSection />
    </main>
  );
}
