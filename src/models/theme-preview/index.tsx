"use client";

import React, { memo } from "react";
import cx from "classnames";
import { AiOutlineClose } from "react-icons/ai";
import useStore from "~/store";

const ThemePreviwe = ({ isMinimize = false }) => {
  const {
    invitationPage: {
      pages,
      activePage,
      onAddPage,
      onRemovePage,
      setActivePage,
    },
  } = useStore();

  return (
    <div className="w-full h-full flex flex-col gap-3 p-10 items-center overflow-auto">
      {pages.map((page, idx) => (
        <div
          key={page.id}
          onClick={() => setActivePage(page.id)}
          className={cx(
            "relative shadow-md flex flex-col gap-3 items-center bg-white transition-all ease-in-out duration-500",
            {
              "w-80 min-h-[26rem]": !isMinimize,
              "w-[26rem] min-h-[34rem]": isMinimize,
              "outline outline-offset-2 outline-green-400":
                activePage.id === page?.id,
            }
          )}
        >
          <div
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onRemovePage(page.id);
            }}
            className={cx("absolute top-1 right-1 cursor-pointer", {
              hidden: !idx || page.id === activePage.id,
            })}
          >
            <AiOutlineClose />
          </div>
          <div
            className="w-full px-4 py-2 ql-editor-displayer ql-editor"
            dangerouslySetInnerHTML={{ __html: page?.content }}
          />
        </div>
      ))}
      <button
        onClick={onAddPage}
        className="px-2 py-1 border border-white rounded-md mt-4 text-white"
      >
        Add page
      </button>
    </div>
  );
};

export default memo(ThemePreviwe);
