import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  //creo el estado id
  const [id, setId] = useState("");
  //creo la funcion handleChange
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={style.bar}>
      <input
        type="search"
        className={style.searchInput}
        onChange={handleChange}
        value={id}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
        className={style.searchButton}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
