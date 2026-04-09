import MyImg from "../assets/myImg.png";
import { Element } from "react-scroll";

const About = () => {
  const data = [
    { label: "Experience", value: "Fresher" },
    { label: "Specialty", value: "Full Stack" },
    { label: "Focus", value: "Perfomance & UX" },
  ];
  return (
    <Element name="about">
      <div className="h-dvh md:py-40 lg:py-0 xl:py-20 2xl:py-10">
        <div className="flex flex-col mb-80 bg-violet-400/10 rounded-xl pb-10 ">
          <h2 className="bg-linear-to-r from-violet-600 to-violet-300 bg-clip-text text-transparent text-2xl font-light tracking-wider leading-25 mx-auto ">
            #About Me
          </h2>

          <div className="flex flex-col items-center md:items-start  md:flex-row justify-evenly ">
            <div className="hover:bg-linear-to-r from-blue-400/50 to-violet-400/50 p-0.5 rounded-lg hover:rotate-2 hover:scale-105  duration-500 ">
              <img
                src={MyImg}
                alt=""
                className="w-40 md:w-50 rounded-lg cursor-pointer "
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-stretch">
              <h2 className="text-2xl  my-3 md:my-1 tracking-tight lg:text2xl 2xl:text-4xl font-bold bg-linear-to-r from-violet-500 to-violet-100 bg-clip-text text-transparent">
                Dheetchith Selvan
              </h2>
              <p className="mb-4 text-lg">Full Stack Developer</p>
              <p className="text-gray-500 px-2 md:px-0 mb-8 md:w-95 lg:w-140 xl:w-129 2xl:w-full">
                I am a motivated full-stack developer specializing in the MERN
                stack. I have a strong foundation in JavaScript and experience
                building dynamic, responsive web applications. I enjoy working
                across the entire development lifecycle-from designing user
                interfaces to building scalable backend systems. My focus is on
                writing clean, maintainable code and delivering high-quality
                user experiences.
              </p>

              <div className="flex flex-col md:flex-row gap-3 lg:gap-5">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 w-xs   md:w-40  text-center py-5  rounded-md border border-white/10 cursor-pointer  hover:bg-conic-180 via-purple-500/10 duration-500 hover:scale-105"
                  >
                    <p className="text-gray-400 text-sm ">{item.label}</p>
                    <h4 className="font-bold tracking-wide">{item.value}</h4>
                    <div className="bg-conic-180 via-orange-800"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
