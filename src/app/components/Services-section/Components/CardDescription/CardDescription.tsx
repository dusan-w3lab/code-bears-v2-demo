import React from "react";
import styles from "./CardDescription.module.scss";

const CardDescription = (props: { text: string }) => {
  return (
    <div className={`${styles.card_description}`}>
      <div className={`${styles.desc}`}>
        <p>{props.text}</p>
      </div>
      <div className={`${styles.technologies}`}></div>
    </div>
  );
};

export default CardDescription;
