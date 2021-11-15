import styles from "./Testimonials.module.scss";
import { testimonials } from "../../data";

const Testimonials = () => {
  return (
    <section className={styles["testimonial-overview"] + " container"}>
      <h2 className={styles.testimonials__title}>Client Testimonials</h2>
      <div className={styles.testimonials}>
        {testimonials.map((t) => (
          <Testimonial {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const Testimonial = ({ img, name, description, role }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonial__icon}>
        <img src={img} alt={name} />
      </div>
      <p className={styles.testimonial__description}>{description}</p>
      <div className={styles.testimonial__client}>
        <p className={styles.testimonial__client__name}>{name}</p>
        <p className={styles.testimonial__client__role}>{role}</p>
      </div>
    </div>
  );
};
