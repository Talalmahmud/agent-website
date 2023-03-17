import "../../Style/hero.css";
import heroImage from "../../assets/images/hero-img.png";
import lightheroImage from "../../assets/images/light-hero-bg.jpg";
const Hero = ({ theme }) => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>We are Create Perfect</h2>
              <h2>
                Digital Product To{" "}
                <span className="highlights">Promot Your Brand</span>
              </h2>
            </div>
            <p className="description">
              You can choice us. We are experinced in this way. We can spread
              your product all over the country.We ensure you we can this very
              well.
            </p>
            <div className="hero__btns">
              <button className="hero__start__btn">Get Start Now</button>
              <button className="discover__btn">Discover Now</button>
            </div>
          </div>
          <div className="hero__image">
            <img
              src={theme === "light-theme" ? lightheroImage : heroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
