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

const items = [
  {
    label: "Home",
    href: "#",
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
    href: "#",
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
        <p>Explicacion del diseño</p>
        <div className="Scrollimages2">
          <p>Scroll de imagenes </p>
        </div>
      </div>
    </div>
  );
}

export default UI;
