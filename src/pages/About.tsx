import "../css/about.css";
import BubbleMenu from "../Components/BubbleMenu/BubbleMenu";
import foto from "../assets/background/ProfileAbout.png";
import insta from "../assets/img/social/instagram.svg";
import x from "../assets/img/social/twitter.svg";
import githud from "../assets/img/social/github.svg";

function About() {
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
    <div className="about">
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
      <div className="content">
        <div className="Profile">
          <img src={foto} alt="Hector Cortes" />
        </div>
        <div className="Content-1">
          <div className="Description">
            <p>
              Soy Hector Cortes, Programador Developer mobile y Diseñador UI &
              UX, Actualmente Soy estudiante de Ingeniería Ciencias de la
              Computación
            </p>
          </div>
          <div className="btn-cv">
            <a href="https://drive.google.com/file/d/1fv4t5lLWD-XU1_Y9x_Di4ezFT6IZXdWr/view?usp=sharing">
              DESCARGAR CV
            </a>
          </div>
          <div className="Redes">
            <a href="https://www.instagram.com/hector.crts/">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="https://x.com/HectordroidG">
              <img src={x} alt="X Twitter" />
            </a>
            <a href="https://github.com/HectorCortesA">
              <img src={githud} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
