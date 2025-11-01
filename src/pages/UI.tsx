import "../css/UI.css";
import CircularGallery from "../Components/CircularGallery/CircularGalerry";
import BubbleMenu from "../Components/BubbleMenu/BubbleMenu";

import addWallet from "../assets/img/dates/addWallet.png";
import Calendario from "../assets/img/dates/Calendario.png";
import Cupon from "../assets/img/dates/Cupon.png";
import DateCupon from "../assets/img/dates/DateCupon.png";
import DatePelicula from "../assets/img/dates/DatePelicula.png";
import EditarPerfil from "../assets/img/dates/EditarPerfil.png";
import Home from "../assets/img/dates/Home.png";
import login from "../assets/img/dates/login.png";
import Perfil from "../assets/img/dates/Perfil.png";
import register from "../assets/img/dates/register.png";

import error from "../assets/img/Pokemon/error.png";
import Personaje from "../assets/img/Pokemon/Personaje.png";
import Pokemones from "../assets/img/Pokemon/Pokemones.png";
import Search from "../assets/img/Pokemon/Search.png";
import Splash from "../assets/img/Pokemon/Splash .png";

import RecetasHome from "../assets/img/Recetarios/Home.png";
import RecetasPerfil from "../assets/img/Recetarios/Perfil.png";
import RecetasRecetas from "../assets/img/Recetarios/Recetas.png";
import RecetasRegister from "../assets/img/Recetarios/Register.png";

const items = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "About",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "Projects",
    href: "#",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "UI",
    href: "/ui",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

const datesItems = [
  { image: addWallet, text: "Add Wallet" },
  { image: Calendario, text: "Calendario" },
  { image: Cupon, text: "Cupón" },
  { image: DateCupon, text: "Date Cupón" },
  { image: DatePelicula, text: "Date Película" },
  { image: EditarPerfil, text: "Editar Perfil" },
  { image: Home, text: "Home" },
  { image: login, text: "Login" },
  { image: Perfil, text: "Perfil" },
  { image: register, text: "Register" },
];

const pokemonItems = [
  { image: Splash, text: "Splash Screen" },
  { image: Personaje, text: "Personaje" },
  { image: Pokemones, text: "Pokémones" },
  { image: Search, text: "Búsqueda" },
  { image: error, text: "Pantalla de Error" },
];

const recetasItems = [
  { image: RecetasHome, text: "Inicio Recetas" },
  { image: RecetasRecetas, text: "Lista de Recetas" },
  { image: RecetasPerfil, text: "Perfil" },
  { image: RecetasRegister, text: "Registro" },
];

function UI() {
  return (
    <div className="UI">
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>HC</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      <div className="dates">
        <h1>DatesCupon</h1>
        <p>
          Organiza citas de película, envía cupones y sorprende a tu pareja con
          detalles digitales, todo desde la palma de tu mano. Con un diseño
          moderno, limpio y cuidadosamente pensado, cada pantalla ofrece una
          navegación intuitiva y atractiva que hace que interactuar con la app
          sea un placer. Integrable con Apple y Google Wallet, combina amor,
          diversión y tecnología en una experiencia visualmente envolvente y
          memorable.
        </p>
        <div className="scrollimages1">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={datesItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </div>
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <p>
          ¿Quién no soñó con tener su propia Pokédex? Esta app convierte ese
          sueño en una experiencia visual moderna y fácil de usar. Con una
          interfaz colorida, dinámica y pensada para fans de todas las edades,
          podrás buscar, explorar y descubrir a tus Pokémon favoritos de forma
          rápida y divertida.
          <br />
          <br />
          Cada detalle fue diseñado para transmitir esa sensación de aventura:
          desde los colores vibrantes y las tarjetas interactivas hasta la
          navegación fluida que te invita a seguir explorando.
          <br />
          <br />Y cuando no hay conexión… no te preocupes. Snorlax aparece en
          una encantadora pantalla Error, recordándote que incluso los
          entrenadores necesitan descansar.
          <br />
          <br />
          Una experiencia llena de nostalgia, diseño y cariño para los amantes
          del mundo Pokémon.
        </p>
        <div className="scrollimages2">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={pokemonItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </div>
      <div className="Recetario">
        <h1>Recetario</h1>
        <p>
          Una aplicación pensada para quienes aman cocinar y experimentar en la
          cocina. Permite crear una cuenta personalizada para guardar tus
          platillos favoritos y descubrir nuevas recetas con su preparación paso
          a paso e ingredientes detallados.
          <br />
          <br />
          El diseño se centra en la claridad y la inspiración: una interfaz
          limpia, moderna y visualmente apetitosa que invita a explorar. Cada
          receta cuenta con imágenes atractivas, tipografía legible y una
          navegación sencilla que convierte cocinar en una experiencia agradable
          y accesible.
          <br />
          <br />
          Porque cocinar también puede ser una experiencia digital deliciosa
        </p>
        <div className="scrollimages3">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={recetasItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UI;
