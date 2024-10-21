import React from "react";

const TopBar = () => {
  return (
    <div className="sticky top-0 h-20 bg-blue-400/10 backdrop-blur-md flex items-center px-4 z-10">
      <div className="text-gray-100 text-xl font-semibold drop-shadow-xl">
        Themes
      </div>
    </div>
  );
};

export default TopBar;
