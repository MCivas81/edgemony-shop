import "./Hero.css";

function Hero({ title, description, cover }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-description">{description}</h2>
      </div>
      <div className="hero-container-img">
        <img className="hero-img" src={cover} alt="Company_img" />
      </div>
    </section>
  );
}

export default Hero;
