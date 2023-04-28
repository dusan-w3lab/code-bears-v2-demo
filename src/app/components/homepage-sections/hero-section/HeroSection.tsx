import l1 from "../../../../../public/assets/companies-logo/ATIProject.png";
import l2 from "../../../../../public/assets/companies-logo/cpt-grey 1.png";
import l3 from "../../../../../public/assets/companies-logo/eagle-grey 1.png";
import l4 from "../../../../../public/assets/companies-logo/edelswiss-grey 1.png";
import l5 from "../../../../../public/assets/companies-logo/mts-grey 1.png";
import l6 from "../../../../../public/assets/companies-logo/w3-lab-grey 1.png";

import Image from "next/image";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p>Discover the Bear Difference</p>
            <h2>
              Delivering <br />
              tailor-made software
            </h2>
            <p>
              We are a custom software development company with a <br />
              main focus on creating web and mobile apps, and e-commerce
              solutions.
            </p>
            <button>Our Services</button>
          </div>
          <div className="col-6">3D</div>
        </div>
        <div className={`${styles.collaboration}`}>
          <div>
            <p>We collaborate with ambitious brands and people.</p>
          </div>
          <div className={styles.logo_companies}>
            <Image src={l1} alt="Picture of the author" width={70} />
            <Image src={l2} alt="Picture of the author" width={70} />
            <Image src={l3} alt="Picture of the author" width={70} />
            <Image src={l4} alt="Picture of the author" width={70} />
            <Image src={l5} alt="Picture of the author" width={70} />
            <Image src={l6} alt="Picture of the author" width={70} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
