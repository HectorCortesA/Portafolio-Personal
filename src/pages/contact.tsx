import "../css/contact.css";
import BubbleMenu from "../Components/BubbleMenu/BubbleMenu";
import perfil from "../assets/background/yo.jpg";

function contact() {
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
      label: "Contact",
      href: "/contact",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];

  return (
    <div className="contact">
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

      <div className="main-content">
        <div className="image-side">
          <div className="image-container">
            <img src={perfil} alt="Hector Cortes" className="contact-image" />
          </div>
        </div>

        <div className="form-side">
          <h1>Contact us</h1>
          <div className="contenedor-form">
            <div className="content-Izquierda">
              <form className="form">
                <div className="input-container">
                  <input
                    name="name"
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                  />
                  <input
                    name="mail"
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                  />
                  <textarea
                    name="message"
                    placeholder="Escribe tu mensaje"
                    rows={4}
                  />
                  <button type="submit">Enviar</button>
                </div>
              </form>

              <div className="content-Derecha">
                <div className="info">
                  <h2>Contact</h2>
                  <h3>hectorlifego@gmail.com</h3>
                </div>
                <div className="info">
                  <h2>Base in</h2>
                  <h3>Mexico, Puebla</h3>
                </div>
                <div className="redes">
                  <div className="social-icons">
                    <a href="#" aria-label="Gmail">
                      💼
                    </a>
                    <a href="#" aria-label="GitHub">
                      🐱
                    </a>
                    <a href="#" aria-label="Instagram">
                      📷
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
