import { useMemo } from "react";
import styles from "./ShowBox.module.scss";

const ShowBoxFull = ({
  title,
  content,
  button,
  buttonColor,
  images,
  textLocation
}) => {
  const style = useMemo(
    () => ({
      "--clr-btn": buttonColor
    }),
    [buttonColor]
  );
  const reverse = textLocation === "left" ? styles.reverse : "";
  return (
    <section
      style={style}
      className={styles["full-section"] + " container " + reverse}
    >
      <div className={styles["content-wrapper"]}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{content}</p>
          <a href="#">{button}</a>
        </div>
      </div>
      <picture>
        <source media="(min-width: 500px)" srcSet={images.desktop} />
        <img src={images.mobile} alt={title} />
      </picture>
    </section>
  );
};

const ShowBoxHalf = ({ title, content, images }) => {
  return (
    <div className={styles["half-section"]}>
      <picture>
        <source media="(min-width: 500px)" srcSet={images.desktop} />
        <img src={images.mobile} alt={title} />
      </picture>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export { ShowBoxFull, ShowBoxHalf };
