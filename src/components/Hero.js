import "./Hero.css";

function Hero({ title, description, cover }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">{title}</h1>
        <h2 className="hero-description">{description}</h2>
      </div>
      <img className="hero-img" src={cover} alt="Company_img" />
    </section>
  );
}

export default Hero;
