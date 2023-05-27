import style from "./Card.module.css";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  //aqui hago destructuring de las propss

  return (
    <div className={style.container}>
      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      <img src={image} alt={name} />
      <h2>Name: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
    </div>
  );
};

export default Card;
