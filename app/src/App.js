import { Outlet } from "react-router-dom";
import Particle from "./components/Particle";


function App() {
  return (
    <>
    
    <Outlet />
    <Particle />

    </>
  );
}

export default App;