import imagen from "../../assets/img/pikachu.png";

const NotFound = () => {
  return (
    <div className="home font-serif text-center">
      <div className="text-xl font-bold p-5 text-center ml-4 mt-4">
        <p>Querido entrenador, esta página no existe.</p>
        <p>Pero no te desanimes!</p>
        <p>
          Accede al menú para volver y seguir conociendo a tus pokemones
          preferidos
        </p>
      </div>
      <div className="flex justify-center">
        <img src={imagen} alt="Pikachu" width={300} />
      </div>
    </div>
  );
};

export default NotFound;
