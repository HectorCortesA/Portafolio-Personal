import "../css/Projects.css";
import BubbleMenu from "../Components/BubbleMenu/BubbleMenu";

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
      <div className="content">
        <h1>Proximamente</h1>
      </div>
    </div>
  );
}

export default Projects;
