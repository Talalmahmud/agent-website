import "../../Style/footer.css";
const quickLink1 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];

const quickLink2 = [
  {
    path: "#",
    display: "Pricing",
  },
  {
    path: "#",
    display: "Documentation",
  },
  {
    path: "#",
    display: "Guids",
  },
];

const quickLink3 = [
  {
    path: "#",
    display: "About",
  },
  {
    path: "#",
    display: "Job",
  },
  {
    path: "#",
    display: "Blogs",
  },
];

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Market</h2>
            <p className="description">Grow with us</p>
          </div>
          <div className="footer__quick__link">
            <div className="quick__link__title">Solution</div>
            <ul className="quick__link">
              {quickLink3.map((item, index) => (
                <li className="quick__link__item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick__link">
            <div className="quick__link__title">Support</div>
            <ul className="quick__link">
              {quickLink1.map((item, index) => (
                <li className="quick__link__item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick__link">
            <div className="quick__link__title">Company</div>
            <ul className="quick__link">
              {quickLink2.map((item, index) => (
                <li className="quick__link__item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copy__wright">Copy wright @2023 reserved</p>
      </div>
    </section>
  );
};
