import styles from "./CardDescription.module.scss";

const CardDescription = (props: { text: string }) => {
  return (
    <div className={`${styles.card_description}`}>
      <p>{props.text}</p>
    </div>
  );
};

export default CardDescription;
