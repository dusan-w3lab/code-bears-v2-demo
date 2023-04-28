import React from "react";
import styles from "./Card.module.scss";
import { HiOutlineDeviceTablet } from "react-icons/hi";

const Card = (props: { title: string; icon: any }) => {
  return (
    <div className={`${styles.services_card}`}>
      <div className="services_card_icon">{props.icon}</div>
      <div className={`${styles.services_card_title}`}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
