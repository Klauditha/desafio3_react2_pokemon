import imagen from "../../assets/img/profesorOak.png";
const Home = () => {
  return (
    <div className="home font-serif text-center">
      <h1 className="text-3xl font-bold p-5">Bienvenido Maestro Pokemón</h1>
      <div className="flex justify-center">
        <img src={imagen} alt="profesor Oak" />
      </div>
      <p className="p-5 text-xl">
        En este sitio encontrarás toda la información necesaria para aprender
        sobre los pokemones y ayudarte a enfrentar cada batalla.
      </p>
    </div>
  );
};

export default Home;
