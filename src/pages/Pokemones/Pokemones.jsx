import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";

const Pokemones = () => {
  const { pokemones } = useContext(PokeContext);
  return (
    <div className="home font-serif text-center">
      <h1 className="text-3xl font-bold p-5">Selecciona un Pokemón</h1>
      <div className="flex justify-center ml-96 mr-96">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
          name="pokemones"
          id="pokemones"
        >
          {pokemones.map((pokemon) => (
            <option
              key={pokemon.name}
              className="m-6"
              value={pokemon.url.split("/")[6]}
            >
              {pokemon.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pokemones;
