import Card from "../Card/Card";
import style from "./Cards.module.css";

//
const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.container}>
      {characters.map(
        ({ id, name, species, gender, status, image, origin }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
