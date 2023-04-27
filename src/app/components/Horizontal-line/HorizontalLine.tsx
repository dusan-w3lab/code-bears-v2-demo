import React from "react";
import styles from "./HorizontalLine.module.scss";

const HorizontalLine = () => {
  return (
    <div className={`container ${styles.horizontal_line}`}>
      <div className={`${styles.left_square}`}></div>
      <div className={`${styles.right_square}`}></div>
    </div>
  );
};

export default HorizontalLine;
