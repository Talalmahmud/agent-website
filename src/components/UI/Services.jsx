import { GrAppsRounded } from "react-icons/gr";
import { BiCodeAlt } from "react-icons/bi";
import { SiBackendless } from "react-icons/si";
import "../../Style/services.css";

const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="services__top__content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>
        <div className="service__item__wrapper">
          <div className="service__item">
            <div className="service__icon">
              <GrAppsRounded color="white" size={25} />
            </div>
            <h5 className="service__title">App Developer</h5>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              ducimus laborum. Magni nemo magnam corrupti.
            </p>
          </div>

          <div className="service__item">
            <div className="service__icon">
              <BiCodeAlt color="#379cf6" size={25} />
            </div>
            <h5 className="service__title">Web Developer</h5>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              ducimus laborum. Magni nemo magnam corrupti.
            </p>
          </div>

          <div className="service__item">
            <div className="service__icon">
              <SiBackendless color="#379cf6" size={25} />
            </div>
            <h5 className="service__title">Backend Developer </h5>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              ducimus laborum. Magni nemo magnam corrupti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
