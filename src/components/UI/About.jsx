import "../../Style/about.css";
import { BiWifi } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { BsStopwatch } from "react-icons/bs";
import chooseImg from "../../assets/images/about-us.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Save time managing your business with</h2>
            <h2 className="highlight">our best services</h2>
            <p className="description about__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo sit laborum exercitationem quidem nostrum hic molestias,
              id ab ipsum esse.
            </p>
            <div className="choose__us__item">
              <div className="choose__icon">
                <BiWifi color="blue" size={35} />
              </div>
              <div className="choose__content">
                <h4 className="choose__us__title">First working process</h4>
                <p className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas vero, tempore dolor ad sint quae.
                </p>
              </div>
            </div>
            <div className="choose__us__item">
              <div className="choose__icon">
                <RiTeamLine color="blue" size={35} />
              </div>
              <div className="choose__content">
                <h4 className="choose__us__title">Dedicated team</h4>
                <p className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas vero, tempore dolor ad sint quae.
                </p>
              </div>
            </div>
            <div className="choose__us__item">
              <div className="choose__icon">
                <BsStopwatch color="blue" size={35} />
              </div>
              <div className="choose__content">
                <h4 className="choose__us__title">24/7 hour</h4>
                <p className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas vero, tempore dolor ad sint quae.
                </p>
              </div>
            </div>
          </div>
          <div className="about__image">
            <img src={chooseImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
