import "../css/Projects.css";
import BubbleMenu from "../Components/BubbleMenu/BubbleMenu";
import barrio from "../assets/img/projects/Logo.webp";
import crita from "../assets/img/projects/Cristavissioon.webp";

function Projects() {
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
      href: "/about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "Projects",
      href: "/projects",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "UI Designs",
      href: "/ui",
      ariaLabel: "UI Designs",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "contact",
      href: "/contact",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];
  return (
    <div className="projects">
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
      <div className="content-projects">
        <div className="Conten-1P">
          <h2>Hotdogs & Harmburguesas para el barrio</h2>
          <div className="content-skills">
            <h3>Skills</h3>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>TypeScript</li>
              <li>SVG</li>
              <li>Componentes React</li>
              <li>API Whatasapp</li>
              <li>API Google Maps</li>
            </ul>
          </div>
          <div className="contenido-1P">
            <p>
              Landing Page con React + Vite, con una solución web de alto
              rendimiento diseñada para un negocio local de comida rápida.
              Desarrollada con React, Vite y TypeScript, la interfaz prioriza la
              usabilidad móvil e incluye una galería interactiva de productos.
              Integra la API de WhatsApp para canalizar pedidos directamente y
              la API de Google Maps para geolocalización.
            </p>
            <img src={barrio} alt="Proyecto 1" />
          </div>
          <div className="link-1P">
            <a href="https://bulliesburger.netlify.app/">Ver Proyecto</a>
          </div>
        </div>
        <div className="Conten-2P">
          <h2>Cristavicionn</h2>
          <div className="content-skills">
            <h3>Skills</h3>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>TypeScript</li>
              <li>SVG</li>
              <li>Componentes React</li>
            </ul>
          </div>
          <div className="contenido-2P">
            <p>
              Landing Page con React + Vite, con una solución web de alto
              rendimiento diseñada para un negocio local de comida rápida.
              Desarrollada con React, Vite y TypeScript, la interfaz prioriza la
              usabilidad móvil e incluye una galería interactiva de productos.
              Integra la API de WhatsApp para canalizar pedidos directamente y
              la API de Google Maps para geolocalización.
            </p>
            <img src={crita} alt="Proyecto 2" />
          </div>
          <div className="link-1P">
            <a href="https://cristavisionn.vercel.app/">Ver Proyecto</a>
          </div>
        </div>

        <div className="Conten-3P">
          <h2>Lading page OneRestaurant</h2>
          <div className="content-skills">
            <h3>Skills</h3>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>TypeScript</li>
              <li>SVG</li>
              <li>JSON</li>
            </ul>
          </div>
          <div className="contenido-3P">
            <p>
              Landing page para la presentacion de un producto de sowftware,
              diriigo a emprendedores en el hambiente de restaurantes, uso de
              imganes de formato svg para optimizar la carga de la pagina
            </p>
            <img src="" alt="Proyecto 3" />
          </div>
          <div className="link-1P">
            <a href="https://onerestaurant.vercel.app/">Ver Proyecto</a>
          </div>
        </div>
        <div className="Conten-4P">
          <h2>OneRestaurant App</h2>
          <div className="content-skills">
            <h3>Skills</h3>
            <ul>
              <li>Xcode</li>
              <li>Swift UI</li>
              <li>Figma</li>
              <li>Core Data</li>
              <li>JSON</li>
            </ul>
          </div>
          <div className="contenido-4P">
            <p>
              App hecha para para emprededores en el hambiente de restaurantes,
              con el fin de facilitar la gestion de sus negocios, con
              funcionalidades como: gestion de productos, pedidos, ordenes, etc.
              con una interfaz sencilla y facil de usar, manejo de datos local y
              backup en archivos JSON.
            </p>
            <img src="" alt="Proyecto 4" />
          </div>
          <div className="link-1P">
            <a href="./Mantenimiento">Ver Proyecto</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
