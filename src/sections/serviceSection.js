import styles from "../styles/Services.module.css";

export default function ServiceSection({
  title,
  text,
  images,
  options,
  image,
  doClass,
}) {
  return (
    <div className={`${styles.secContainer}  ${doClass ? styles.invert : ""}`}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          {images.map((img) => (
            <img src={img} alt="image-services" />
          ))}
        </div>
        <ul>
          {options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </div>
      <img src={image} alt="" />
    </div>
  );
}
