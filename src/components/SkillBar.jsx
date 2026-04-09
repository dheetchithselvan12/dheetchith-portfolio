import React, { useState, useEffect } from "react";

const SkillBar = ({ skills, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => setWidth(level), 500);
  }, [level]);
  return (
    <div className="">
      <div className="mb-1">
        <span className="text-sm font-medium md:text-xs">{skills}</span>
      </div>
      <div className="w-80 bg-gray-300 rounded-full h-2 md:h-2 lg:h-3 md:w-40 lg:w-30 xl:w-full">
        <div
          className="  bg-linear-to-r from-blue-400 to-blue-700  rounded-full transition-all duration-300 relative h-2 md:h-2 lg:h-3"
          style={{ width: `${width}%` }}
        >
          <span className="w-6 h-6 bg-blue-500 border hover:border-2 border-white  rounded-full top-[-90%] absolute md:top-[-80%] lg:top-[-50%]  right-0 text-white text-xs text-center pt-0.5 ">
            {width}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
