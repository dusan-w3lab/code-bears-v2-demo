"use client";
import React, { useState } from "react";

import Card from './Components/Cards/Card'
import CardDescription from "./Components/CardDescription/CardDescription";

import AppleLogo from '../../../../../public/assets/services/apple-logo.png'
import AndroidLogo from '../../../../../public/assets/services/android.png'
import FlutterLogo from '../../../../../public/assets/services/flutter-logo.png'
import ReactLogo from '../../../../../public/assets/services/react-icon-01.png'

import MobileDevIcon from '../../../../../public/assets/services/mobile-icon.svg'
import DesktopDevIcon from '../../../../../public/assets/services/desktop-icon.svg'
import EcommerceDevIcon from '../../../../../public/assets/services/e-commerce-icon.svg'

import styles from "./ServicesSection.module.scss";

const ServicesSection = () => {
  const [selected, setSelected] = useState(0);

  const items = [
    {
      id: 0,
      name: "Mobile App Development",
      description:
        "MOBILE APP DEVELOPMENT We have all the tools, technologies, and battle-tested processes to improve your customer experience and support business growth with custom mobile apps for iOS and Android. Get a world-class team of developers, project managers, UX/UI designers, and business analysts to work on your mobile app.",
      icon: <MobileDevIcon />,
      techStackIcons: [
        {
          title: 'iPhone App Development',
          src: AppleLogo,
        },
        {
          title: 'Android App Development',
          src: AndroidLogo,
        },
        {
          title: 'Flutter App Development',
          src: FlutterLogo,
        },
        {
          title: 'React Native App Development',
          src: ReactLogo,
        }
      ]
    },
    {
      id: 1,
      name: "Web Development",
      description:
        "WEB APP DEVELOPMENT We have all the tools, technologies, and battle-tested processes to improve your customer experience and support business growth with custom mobile apps for iOS and Android. Get a world-class team of developers, project managers, UX/UI designers, and business analysts to work on your mobile app.",
      icon: <DesktopDevIcon />,
    },
    {
      id: 2,
      name: "E-Commerce",
      description:
        "E-COMMERCE We have all the tools, technologies, and battle-tested processes to improve your customer experience and support business growth with custom mobile apps for iOS and Android. Get a world-class team of developers, project managers, UX/UI designers, and business analysts to work on your mobile app.",
      icon: <EcommerceDevIcon />,
    },
  ];

  return (
    <div className={`${styles.services_section}  ${styles['pt-140']} ${styles['pb-130']} container`}>
      <div className="row">
        <div className={`col ${styles.title_col}`}>
          <h2>
            We create impactful experiences
            <br/> for <span>startups & scaleups</span>
          </h2>
          <p>
            We collaborate with young and innovative companies because we believe their products will influence the future.
          </p>
        </div>
      </div>
      <div className={`${styles.content} row`}>
        <div className="col-5">
          {
            items.map((e: any, index: number) => {
              return (
                <div
                  className={`
                              ${styles.card_wrapper} 
                              ${e.id === selected && styles.active_card}
                            `}
                  key={e.id}
                  onClick={() => setSelected(e.id)}
                >
                  <Card title={e.name} icon={e.icon} />
                </div>
              );
            })
          }
        </div>
        <div className={`col-6 ${styles.card_desc}`}>
          <CardDescription text={items[selected].description} techStackIcons={items[selected].techStackIcons} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
