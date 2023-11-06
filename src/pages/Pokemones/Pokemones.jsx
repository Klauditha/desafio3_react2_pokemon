import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const { pokemones } = useContext(PokeContext);
  const navigate = useNavigate();

  return (
    <div className="home font-serif text-center">
      <h1 className="text-3xl font-bold p-5">Selecciona un Pokemón</h1>
      <div className="flex justify-center mr-5 ml-5">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
          name="pokemones"
          id="pokemones"
        >
          {pokemones.map((pokemon) => (
            <option
              key={pokemon.url.split("/")[6]}
              className="m-6"
              value={pokemon.url}
            >
              {pokemon.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <button
        className="mt-5 bg-black hover:bg-black text-white font-bold py-2 px-4 rounded text-sm"
        onClick={() =>
          navigate(
            `/pokemon/${
              document.getElementById("pokemones").value.split("/")[6]
            }`
          )
        }
      >
        Ver Detalle
      </button>
    </div>
  );
};

export default Pokemones;
