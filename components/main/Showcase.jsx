import { ShowBoxFull, ShowBoxHalf } from "./ShowBox";
import styles from "./Showcase.module.scss";
import { showcase } from "../../data";

const Showcase = () => {
  return (
    <>
      {showcase.full.map((item) => (
        <ShowBoxFull {...item} key={item.id} />
      ))}
      {showcase.half.map((cols) => (
        <section className={styles["half-container"] + " container"}>
          {cols.map((item) => (
            <ShowBoxHalf {...item} key={item.id} />
          ))}
        </section>
      ))}
    </>
  );
};

export default Showcase;
