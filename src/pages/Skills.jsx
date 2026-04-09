import { SKILLS, FILTERS } from "../data/skills.db";
import { useMemo, useState } from "react";
import { Element } from "react-scroll";

const Skills = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterButton = (selectedCategory) => {
    setSelectedFilters((prevSelectedFilters) => {
      if (selectedCategory === "All") return [];
      if (prevSelectedFilters.includes(selectedCategory)) {
        return prevSelectedFilters.filter((el) => el !== selectedCategory);
      }
      return [...prevSelectedFilters, selectedCategory];
    });
  };

  const filteredItems = useMemo(() => {
    if (selectedFilters.length === 0) return SKILLS;
    const selectedSet = new Set(selectedFilters);
    return SKILLS.filter((item) =>
      item.label.split(" ").some((label) => selectedSet.has(label)),
    );
  }, [selectedFilters]);

  return (
    <Element name="skills">
      <div className="flex flex-col  bg-violet-400/10 md:px-5 xl:px-50 w-full h-full xl:h-120 my-120 px-2">
        <h2 className="bg-linear-to-r from-violet-600 to-violet-300 bg-clip-text text-transparent text-2xl font-light tracking-wider leading-25 mx-auto ">
          #Skills
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-9 2xl:grid-cols-11 gap-2 md:gap-5 mb-3 ">
          {FILTERS.map((category) => {
            const isActive =
              (selectedFilters.length === 0 && category === "All") ||
              selectedFilters.includes(category);

            return (
              <button
                key={category}
                onClick={() => handleFilterButton(category)}
                className={`bg-white/10 p-1 text-sm  rounded-lg border border-white/10 cursor-pointer hover:bg-white/25 duration-300 ${
                  isActive ? "bg-white/25 " : ""
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9  gap-8 items-center mx-auto md:mx-0 my-5 ">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-500/10 border hover:bg-conic-180 via-purple-500/10 border-white/10 p-2 flex flex-col rounded-xl  cursor-pointer items-center hover:scale-115  duration-500"
            >
              <img
                src={item.icon}
                alt="logo"
                className="w-20  bg-white/10 rounded-md p-3"
              />
              <p className="text-sm pt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
