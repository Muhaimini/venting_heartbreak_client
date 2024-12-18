import React from "react";

const TopBar = ({ title = "Themes" }) => {
  return (
    <div className="sticky top-0 h-20 bg-blue-400/10 backdrop-blur-md flex items-center px-4 z-10">
      <div className="text-gray-100 text-xl font-semibold drop-shadow-xl">
        {title}
      </div>
    </div>
  );
};

export default TopBar;
