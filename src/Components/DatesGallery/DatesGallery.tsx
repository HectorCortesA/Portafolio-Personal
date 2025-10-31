import CircularGallery from "../CircularGallery/CircularGalerry";

import addWallet from "../../assets/img/dates/addWallet.png";
import Calendario from "../assets/img/dates/Calendario.png";
import Cupon from "../assets/img/dates/Cupon.png";
import DateCupon from "../assets/img/dates/DateCupon.png";
import DatePelicula from "../assets/img/dates/DatePelicula.png";
import EditarPerfil from "../assets/img/dates/EditarPerfil.png";
import Home from "../assets/img/dates/Home.png";
import login from "../assets/img/dates/login.png";
import Perfil from "../assets/img/dates/Perfil.png";
import register from "../assets/img/dates/register.png";

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

export default function DatesGallery() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CircularGallery
        items={datesItems}
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        font="bold 24px Figtree"
      />
    </div>
  );
}
