"use client";

import React from "react";
// import Button from "~/components/button"
import NAVIGATION_ADDRESS from "~/constants/navigation_addess";
import useGetSelectedInvitations from "~/hooks/queries/use-get-selected-invitations";
import TopBar from "~/views/themes/components/top-bar";
import ThemeLayouts from "~/models/themes/layouts";
import { useRouter } from "next/navigation";
import cx from "classnames";

const GRADIENT_COLORS = [
  "from-blue-400 to-indigo-500",
  "from-yellow-400 to-orange-500",
  "from-rose-400 to-red-500",
  "from-red-400 to-red-500",
];

const SelectedThemes = () => {
  const router = useRouter();
  const { data } = useGetSelectedInvitations();

  const onEditTemplate = (id: string) => {
    router.push(NAVIGATION_ADDRESS.SELECTED_THEMES.concat(`/${id}`));
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full overflow-y-auto">
      <TopBar title="Selected Themes" />
      <div className="relative h-full w-full flex flex-col items-center">
        <div className="relative w-full">
          {data?.data?.map((invitation, idx) => (
            <div
              key={invitation?.id}
              className={cx(
                "sticky top-0 w-full bg-gradient-to-b",
                GRADIENT_COLORS[idx]
              )}
            >
              <div className="flex items-center justify-center ">
                <button
                  onClick={() => onEditTemplate(invitation?.id)}
                  className="rounded bg-blue-500 text-white px-2 py-1 w-16"
                >
                  Edit
                </button>
              </div>
              <ThemeLayouts themeDetailId={invitation?.invitation_theme?.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedThemes;
