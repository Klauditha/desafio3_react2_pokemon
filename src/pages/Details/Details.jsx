import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokeContext } from "../../context/PokeContext";
const Details = () => {
  const { pokemon, setName } = useContext(PokeContext);
  const { name } = useParams();

  useEffect(() => {
    setName(name);
  }, [name]);

  return (
    <div>
      {pokemon ? (
        <>
          <div>
            <h1 className="text-3xl font-bold uppercase text-center mt-5">
              {pokemon.name}
            </h1>
            <div className="flex justify-center items-center">
              <h3 className="text-center text-xl mt-2 font-bold">
                {" "}
                Tipo(s) :{" "}
              </h3>
              {pokemon.types ? (
                pokemon.types.map((type, index) => (
                  <h3
                    className="text-center text-xl mt-2 uppercase"
                    key={index}
                  >
                    {index > 0 ? " , " : ""}
                    {type.type.name}
                  </h3>
                ))
              ) : (
                <h3 className="text-center text-xl mt-2 ">Desconocido</h3>
              )}
            </div>

            <div className="flex justify-center items-center">
              <div>
                {pokemon.sprites ? (
                  <img src={pokemon.sprites.front_default} alt="" width={300} />
                ) : null}
              </div>
              <div className="flex flex-col items-start content-center">
                {pokemon.stats &&
                  pokemon.stats.map((stat) => (
                    <div className="flex justify-center" key={stat.stat.name}>
                      <label className="font-bold">{stat.stat.name} : </label>
                      <p>{stat.base_stat}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Details;
