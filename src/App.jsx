import grid from "../public/grid.png";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <div className=" gap-8">
        <img
          src={grid}
          className="absolute top-0 right-[-10%] opacity-10 w-5xl -z-10"
        />

        {/* Lighting Effect */}
        <div className="h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px_15px_#e99b63] -rotate-30 -z-10"></div>
        <Header />

        <div className="mx-2 md:px-5 xl:mx-40 2xl:mx-50">
          <Hero />
          <About />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
