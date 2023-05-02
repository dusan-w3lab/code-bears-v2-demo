import React from "react";
import styles from "./Card.module.scss";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import Image from "next/image";

const Card = (props: { title: string; icon: any }) => {
  return (
    <div className={`${styles.services_card}`}>
      <div className="services_card_icon">
        <Image src={props.icon} width={35} height={35} alt="icon" />
      </div>
      <div className={`${styles.services_card_title}`}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
