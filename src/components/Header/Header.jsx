import { useRef } from "react";
import { BiSun } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import "./header.css";
const nav_links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#project",
    display: "Project",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu__active");
    console.log("a");
  };
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Market</h2>
            {/* <p>grow with us</p> */}
          </div>
          {/* {navigation} */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav_links.map((item, index) => {
                return (
                  <li key={index} className="menu__item">
                    <a a className="menu__link" href={item.path}>
                      {item.display}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* {right} */}
          {theme === "light-theme" ? (
            <div className="light__mode" onClick={toggleTheme}>
              <CiDark size={20} color="black" className="sunlight__icon" />
              <p className="dark__icon__p">Dark mode</p>
            </div>
          ) : (
            <div className="light__mode" onClick={toggleTheme}>
              <BiSun BiSun size={20} color="white" className="sunlight__icon" />
              <p className="light__icon__p">light mode</p>
            </div>
          )}
          <div className="mobile__btn" onClick={toggleMenu}>
            <FaBars size={25} color="violet" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
