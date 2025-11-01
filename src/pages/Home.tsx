import "../css/home.css";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import BubbleMenu from "../Components/BubbleMenu/BubbleMenu";

function Home() {
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

  return (
    <div className="Menu">
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

      {/* Textos ABAJO en móvil */}
      <div className="Title">
        <h2>Hola soy Hector Cortes</h2>
        <h1>Developer móvil</h1>
        <h1>y diseñador</h1>
        <h1>UI & UX</h1>
      </div>
      {/* ProfileCard ARRIBA en móvil */}
      <div className="profile-card-container">
        <ProfileCard
          name="Hector Cortes"
          title="Developer Mobile"
          handle="hector.crts"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/images/profile.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
}

export default Home;
