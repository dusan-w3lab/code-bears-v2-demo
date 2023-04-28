"use client";
import React, { useState } from "react";

import Card from './Components/Cards/Card'
import CardDescription from "./Components/CardDescription/CardDescription";

import { CiLaptop } from "react-icons/ci";
import { BsTablet } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

import styles from "./ServicesSection.module.scss";

const ServicesSection = () => {
  const [selected, setSelected] = useState(0);

  const items = [
    {
      id: 0,
      name: "Mobile App Development",
      description:
        "MOBILE APP DEVELOPMENT We have all the tools, technologies, and battle-tested processes to improve your customer experience and support business growth with custom mobile apps for iOS and Android. Get a world-class team of developers, project managers, UX/UI designers, and business analysts to work on your mobile app.",
      icon: <BsTablet size={25} />,
    },
    {
      id: 1,
      name: "Web Development",
      description:
        "WEB APP DEVELOPMENT We have all the tools, technologies, and battle-tested processes to improve your customer experience and support business growth with custom mobile apps for iOS and Android. Get a world-class team of developers, project managers, UX/UI designers, and business analysts to work on your mobile app.",
      icon: <CiLaptop size={25} />,
    },
    {
      id: 2,
      name: "E-Commerce",
      description:
        "E-COMMERCE We have all the tools, technologies, and battle-tested processes to improve your customer experience and support business growth with custom mobile apps for iOS and Android. Get a world-class team of developers, project managers, UX/UI designers, and business analysts to work on your mobile app.",
      icon: <HiOutlineShoppingBag size={25} />,
    },
  ];

  return (
    <div className={`${styles.services_section} container`}>
      <div className="row">
        <div className={`col ${styles.title_col}`}>
          <h2>
            What we <span>do</span>
          </h2>
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
                              ${e.id === selected ? styles.active_card : ""}
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
          <CardDescription text={items[selected].description} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
