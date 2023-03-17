import React from "react";
import "../../Style/blog.css";
import videoImg from "../../assets/images/video.png";
import articleImg from "../../assets/images/article.png";
import caseStudyImg from "../../assets/images/case-study.png";
import { BsArrowRightShort } from "react-icons/bs";
const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__top__content">
          <h6 className="subtitle">Our blogs</h6>
          <h2>
            Let's have a look from{" "}
            <span className="highlight">our recent blog</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          <div className="blog__item">
            <h3>Video</h3>
            <div className="blog__img">
              <img src={videoImg} alt="" />
            </div>
            <p className="description blog__description">
              To know about our work to watch some video...
            </p>
            <div>
              <BsArrowRightShort className="blog__more__icon" />
            </div>
          </div>
          <div className="blog__item">
            <h3>Articles</h3>
            <div className="blog__img">
              <img src={articleImg} alt="" />
            </div>
            <p className="description blog__description">
              To know about our work to watch some video...
            </p>
            <div>
              <BsArrowRightShort className="blog__more__icon" />
            </div>
          </div>
          <div className="blog__item">
            <h3>Case Study</h3>
            <div className="blog__img">
              <img src={caseStudyImg} alt="" />
            </div>
            <p className="description blog__description">
              To know about our work to watch some video...
            </p>
            <div>
              <BsArrowRightShort className="blog__more__icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
