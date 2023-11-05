import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PokeRoutes from "./components/Routes/PokeRoutes";
import { PokeProvider } from "./context/PokeProvider";

function App() {
  return (
    <PokeProvider>
      <NavBar />
      <PokeRoutes />
    </PokeProvider>
  );
}

export default App;
