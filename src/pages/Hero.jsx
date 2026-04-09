import Typed from "typed.js";
import { useRef, useEffect } from "react";
import HeroImg from "../assets/HeroImg2.png";
import { Element, Link } from "react-scroll";

import gitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FrontEnd ^2000", "BackEnd ^2000"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 500,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Element name="home">
      <main className="flex flex-col-reverse h-full  items-center md:flex-row  md:justify-between mb-160 md:pt-40 lg:pt-0 ">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-2xl md:2xl: 2xl:text-4xl font-bold tracking-tight">
            Hi, I'm Dheetchith 👋
          </h1>

          <h1 className="text-2xl md:text-xs: lg:text-2xl 2xl:text-4xl leading-15 font-extrabold">
            Full Stack Developer (
            <span className=" bg-linear-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              MERN
            </span>
            ){" "}
          </h1>

          <h1 className="text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold leading-9">
            I work on{" "}
            <span
              className="bg-linear-to-r from-violet-600 to-violet-300 bg-clip-text text-transparent"
              ref={el}
            ></span>
          </h1>

          <p className="pt-8 text-gray-400 text-lg tracking-wide md:w-80 lg:w-100">
            I build scalable and responsive web applications using modern
            technologies.
          </p>

          <div className="flex flex-col mt-10 gap-6">
            <div className="flex gap-5">
              <Link
                to="projects"
                className="bg-linear-to-r from-violet-700 to-violet-400  hover:from-violet-500 hover:to-violet-400 px-4 py-2 rounded-md cursor-pointer"
              >
                My works
              </Link>
              <Link className="bg-white/80 text-black px-4 py-2 hover:bg-white/70 rounded-md cursor-pointer transition">
                My Resume
              </Link>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/dheetchithselvan12"
                className="w-fit p-1 bg-blue-500 hover:bg-blue-400 rounded-lg transition duration-500"
              >
                <img src={LinkedIn} alt="LinkedIn" className=" w-6 invert" />
              </a>
              <a
                href="https://github.com/dheetchithselvan12"
                className="w-fit p-1 bg-white  hover:bg-white/70 rounded-lg transition duration-500"
              >
                <img
                  src={gitHub}
                  alt="GitHub"
                  className=" w-6 bg-white rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          src={HeroImg}
          alt="Computer"
          className="w-100 md:w-90 lg:w-120 2xl:w-120 rounded-full me-8 hover:scale-102 duration-900 cursor-pointer hover:bg-white/10"
        />
      </main>
    </Element>
  );
};

export default Hero;
