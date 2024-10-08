"use client";

import React, { useMemo } from "react";
import useGetInvitationThemes from "~/hooks/queries/use-get-invitation-themes";
import TopBar from "./components/top-bar";

const Themes = () => {
  const { data } = useGetInvitationThemes();

  const invitationThemes = useMemo(() => data?.data ?? [], [data?.data]);

  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full overflow-y-auto">
      <TopBar />
      <div>
        {Array(100)
          .fill("")
          .map((_, idx) => (
            <div key={idx}>Hello!</div>
          ))}
      </div>
    </div>
  );
};

export default Themes;
