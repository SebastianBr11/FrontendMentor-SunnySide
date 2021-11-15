import styles from "./Gallery.module.scss";

const images = [
  {
    desktop: "/images/desktop/image-gallery-milkbottles.jpg",
    mobile: "images/mobile/image-gallery-milkbottles.jpg",
    title: "milkbottles"
  },
  {
    desktop: "/images/desktop/image-gallery-orange.jpg",
    mobile: "images/mobile/image-gallery-orange.jpg",
    title: "orange"
  },
  {
    desktop: "/images/desktop/image-gallery-cone.jpg",
    mobile: "images/mobile/image-gallery-cone.jpg",
    title: "cone"
  },
  {
    desktop: "/images/desktop/image-gallery-sugarcubes.jpg",
    mobile: "/images/mobile/image-gallery-sugarcubes.jpg",
    title: "sugarcubes"
  }
];

const Gallery = () => {
  return (
    <section className={styles.gallery + " container"}>
      {images.map((img) => (
        <picture>
          <source media="(min-width: 500px)" srcSet={img.desktop} />
          <img src={img.mobile} alt={img.title} />
        </picture>
      ))}
    </section>
  );
};

export default Gallery;
