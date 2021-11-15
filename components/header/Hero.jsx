import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <h1>We Are Creatives</h1>
      <img src="/images/icon-arrow-down.svg" alt="arrow down" />
    </div>
  );
};

export default Hero;
