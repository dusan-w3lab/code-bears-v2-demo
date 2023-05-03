import styles from "./Card.module.scss";

const Card = (props: { title: string; icon: any }) => {
  return (
    <div className={`${styles.services_card}`}>
      <div className={styles['services_card-icon']}>{props.icon}</div>
      <div className={`${styles.services_card_title}`}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
