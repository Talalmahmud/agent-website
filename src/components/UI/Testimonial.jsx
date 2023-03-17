import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "../../Style/testimonial.css";
import av1 from "../../assets/images/ava-1.jpg";
import av2 from "../../assets/images/ava-2.jpg";
import av3 from "../../assets/images/ava-3.jpg";

const testimonialDetails = [
  {
    image: av1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atad, laudantium atque voluptatem aliquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atad, laudantium atque voluptatem aliquam!",
    name: "Khon Doe",
  },
  {
    image: av2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atad, laudantium atque voluptatem aliquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atad, laudantium atque voluptatem aliquam!",
    name: "Willy",
  },
  {
    image: av3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atad, laudantium atque voluptatem aliquam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atad, laudantium atque voluptatem aliquam!",
    name: "Jack Joe",
  },
];

const Testimonial = () => {
  const [testimonialcontent, setTestimonialcontent] = useState(
    testimonialDetails[0]
  );
  const [count, setCount] = useState(1);

  const handleTestimonial = () => {
    if (count >= testimonialDetails.length - 1) {
      setCount(0);
    } else {
      setCount((count) => count + 1);
    }
    setTestimonialcontent(testimonialDetails[count]);
  };
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial__top">
          <h6 className="subtitle">Testimaonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 customers</span>{" "}
          </h2>
        </div>
      </div>

      <div className="slider__wrapper">
        <div className="left__btn" onClick={() => handleTestimonial()}>
          <AiOutlineArrowLeft size={20} color="red" />
        </div>
        <div className="testimonial__content__details">
          <p className="description testimonial__description">
            {testimonialcontent.description}
          </p>
          <img className="slider__img" src={testimonialcontent.image} alt="" />
          <p style={{ color: "white" }}>{testimonialcontent.name}</p>
        </div>
        <div className="right__btn" onClick={() => handleTestimonial()}>
          <AiOutlineArrowRight size={20} color="red" />
          {/* {testimonialDetails.map((item, index) => (
          <div className="slider__item">
            <p className="description">{item.description}</p>
            <img src={item.image} alt="" />
          </div>
        ))} */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
