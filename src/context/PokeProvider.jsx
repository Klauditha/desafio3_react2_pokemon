/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PokeContext } from "./PokeContext";
import axios from "axios";

const URLBase = "https://pokeapi.co/api/v2/pokemon/";
export const PokeProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(URLBase).then((res) => {
      setPokemones(res.data.results);
      ("");
    });
  }, []);

  useEffect(() => {
    if (name != "") {
      axios.get(URLBase + name).then((res) => {
        setPokemon(res.data);
      });
    }
  }, [name]);
  return (
    <PokeContext.Provider value={{ pokemones, setPokemon, pokemon, setName }}>
      {children}
    </PokeContext.Provider>
  );
};
