import Image from "next/image";

import styles from "./CardDescription.module.scss";

const CardDescription = (props: { text: string, techStackIcons: any }) => {
  
  return (
    <div className={`${styles.card_description}`}>
      <p>{props.text}</p>
      <div className={styles['card_description-icons']}>
        {
          props.techStackIcons &&
          props.techStackIcons.map((e: any, index: number) => (
            <div key={index} className={styles['card_description-icon']}>
              <Image 
                src={e.src}
                alt="tech stack icon"
                width={40}
                height={40}
              />
              <p>{e.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CardDescription;
