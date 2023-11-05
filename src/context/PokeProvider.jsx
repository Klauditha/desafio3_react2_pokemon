/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PokeContext } from "./PokeContext";
import axios from "axios";

const URLBase = "https://pokeapi.co/api/v2/pokemon/";
export const PokeProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);
  const [id, setId] = useState(0);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(URLBase).then((res) => {
      setPokemones(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (id != 0) {
      axios.get(URLBase + id).then((res) => {
        setPokemon(res.data);
      });
    }
  }, [id]);
  return (
    <PokeContext.Provider value={{ pokemones, setPokemon, pokemon, setId }}>
      {children}
    </PokeContext.Provider>
  );
};
