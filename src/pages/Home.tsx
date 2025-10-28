import "../css/home.css";
import Lanyard from "../Components/Lanyard/lanyard";

function Home() {
  return (
    <div className="Menu">
      {/* Columna izquierda - Títulos */}
      <div className="Title">
        <h2>Hola soy Hector Cortes</h2>
        <h1>Developer móvil</h1>
        <h1>y diseñador</h1>
        <h1>UI & UX</h1>
      </div>

      {/* Columna derecha - Lanyard */}
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}

export default Home;
