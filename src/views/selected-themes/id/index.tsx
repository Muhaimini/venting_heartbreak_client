"use client";

import React, { useState } from "react";
import ThemeEditor from "~/models/theme-editor";
import cx from "classnames";
import ThemePreviwe from "~/models/theme-preview";

const SelectedThemeDetails = () => {
  const [isMinimize, setMinimize] = useState(false);

  // const onResize = () => {
  //   setMinimize((prev) => !prev);
  // };

  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full">
      <div className="h-full w-full flex">
        <div className="h-full w-full p-5">
          <div className="text-gray-100 text-xl font-semibold drop-shadow-xl">
            Preview
          </div>
          <ThemePreviwe isMinimize={isMinimize} />
        </div>
        <div
          className={cx(
            "h-full bg-base p-5 transition-all ease-in-out duration-500",
            isMinimize ? "w-[45rem]" : "w-full"
          )}
        >
          {/* <button
            onClick={onResize}
            className="text-gray-100 border-white px-2 py-1 rounded-sm"
          >
            {isMinimize ? <FaAngleLeft /> : <FaAngleRight />}
          </button> */}
          <ThemeEditor />
        </div>
      </div>
    </div>
  );
};

export default SelectedThemeDetails;
