/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PokeContext } from "./PokeContext";
import axios from "axios";

const URLBase = "https://pokeapi.co/api/v2/pokemon/";
export const PokeProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);
  useEffect(() => {
    axios.get(URLBase).then((res) => {
     // console.log(res.data.results);
      setPokemones(res.data.results);
      console.log(pokemones);
    });
  }, []);

  return (
    <PokeContext.Provider value={{ pokemones }}>
      {children}
    </PokeContext.Provider>
  );
};
