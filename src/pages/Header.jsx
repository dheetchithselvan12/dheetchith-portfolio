import { useEffect, useState } from "react";
import menu from "../assets/bar-menu.png";
import logo2 from "../assets/logo2.png";

import { Link } from "react-scroll";
import ".././App.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header
      className={`sticky top-0 z-50  flex justify-between items-center transition-all duration-300 py-4 md:px-10 xl:px-40 2xl:px-50 ${scrolled ? "bg-black/80 backdrop-blur-lg shadow-md transition " : "bg-transparent"} `}
    >
      <Link
        to="home"
        smooth={true}
        duration={700}
        className="ms-9 md:ms-0 w-24  "
      >
        <img
          className="w-full object-cover transition-transform duration-500 scale-230 hover:scale-250 cursor-pointer "
          src={logo2}
          alt="logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="md:flex hidden space-x-8 ">
        {navItem.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            smooth={true}
            duration={700}
            offset={-140}
            spy={true}
            activeClass="text-violet-400"
            className="relative text-gray-800 dark:text-gray-200 hover:via-violet-600 dark:hover:text-violet-400 text-xs lg:text-lg font-medium  transition-colors duration-300 group cursor-pointer"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-500"></span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-center gap-4">
        <Link
          to="contact"
          smooth={true}
          duration={700}
          className="hidden md:block px-4 py-1 text-lg text-gray-200 tracking-tight rounded-sm bg-linear-to-r from-violet-700 to-violet-400  hover:from-violet-500 hover:to-violet-400 cursor-pointer transition"
        >
          Contact
        </Link>
      </div>

      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="md:hidden p-2 z-50"
      >
        <img
          className="w-8 invert brightness-0 cursor-pointer"
          src={menu}
          alt=""
        />
      </button>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="fixed top-16 bottom-0 right-0 left-0 z-40 md:hidden bg-black opacity-70 backdrop-blur-md">
          <nav className="flex flex-col gap-6 items-center">
            {navItem.map((item, index) => (
              <Link
                key={index}
                className="relative text-gray-800 dark:text-gray-200 hover:via-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                to={item.to}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-500"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
