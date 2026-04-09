import { PROJECTS } from "../data/project.db";
import View from "../assets/view.svg";
import SOURCE from "../assets/source.svg";

import { Element, Link } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <div className={`relative flex flex-col bg-white/10 pt-40  `}>
        <div className="relative h-dvh flex flex-col items-center px-5 py-20  ">
          {/* Glowing Effect */}
          <div className="absolute top-0 left-5 w-70 h-70 rounded-full  bg-linear-to-r from-purple-400 to-blue-400  blur-3xl opacity-5 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-70 h-70 rounded-full  bg-linear-to-r from-purple-400 to-blue-400  blur-3xl opacity-5 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <h2 className="bg-linear-to-r from-violet-600 to-violet-300 bg-clip-text text-transparent text-2xl font-light tracking-wider leading-20 mx-auto ">
            #Projects
          </h2>
          <p className="text-center text-gray-400 md:w-150 ">
            Here are some of the projects I’ve built to apply my web development
            skills. Each project focuses on solving real-world problems and
            improving my understanding of frontend development.
          </p>
          <p className="my-10 animate-pulse text-gray-400">Scroll down ↓</p>
        </div>
        {PROJECTS.map((item, index) => (
          // poject cards
          <div
            key={index}
            className={`${item.color} h-dvh w-full my-30 backdrop-blur-2xl flex items-center justify-center sticky top-15 rounded-b-2xl `}
          >
            <div className="flex flex-col justify-between bg-black/10 p-4 rounded-2xl backdrop-blur-xs shadow-xl border-2 border-white/10  my-15 md:h-150">
              <a href={item.links.view}>
                <img
                  src={item.image}
                  alt="Image"
                  className="w-screen md:w-170 rounded-xl hover:cursor-pointer "
                />
              </a>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h4
                      className={`text-lg md:text-3xl mb-2 ${item.textColor} font-bold`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-100 md:w-120">{item.description}</p>
                  </div>

                  {/* Links */}
                  <div className="flex justify-end gap-3">
                    <a
                      href={item.links.view}
                      className=" flex items-center bg-white/40 rounded-full w-7 h-7"
                    >
                      <img src={View} className="p-1 hover:invert" />
                    </a>

                    <a
                      href={item.links.source}
                      className="flex bg-white/40 rounded-full w-7 h-7 ps-0.5"
                    >
                      <img src={SOURCE} className="p-1 hover:invert" />
                    </a>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap gap-3 items-center">
                  {item.uses?.map((v, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-xs bg-white/10 rounded-sm border border-white/10 tracking-wide"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
