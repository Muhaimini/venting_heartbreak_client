"use client";

import React, { useState } from "react";
import ThemeEditor from "~/models/theme-editor";
import cx from "classnames";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FormProvider, useForm } from "react-hook-form";
import ThemePreviwe from "~/models/theme-preview";

const SelectedThemeDetails = () => {
  const [isMinimize, setMinimize] = useState(false);

  const methods = useForm<{
    activePage: number;
    pages: Array<{ index: number; subtitle: string; description: string }>;
  }>({
    defaultValues: {
      activePage: 0,
      pages: [{ index: 0, subtitle: "Hi,", description: "content" }],
    },
  });

  const onResize = () => {
    setMinimize((prev) => !prev);
  };

  return (
    <FormProvider {...methods}>
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
              isMinimize ? "w-1/2" : "w-full"
            )}
          >
            <button
              onClick={onResize}
              className="text-gray-100 border-white px-2 py-1 rounded-sm"
            >
              {isMinimize ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
            <ThemeEditor />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default SelectedThemeDetails;
