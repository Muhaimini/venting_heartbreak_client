"use client";

import React, { useMemo } from "react";
import useGetInvitationThemes from "~/hooks/queries/use-get-invitation-themes";
import TopBar from "./components/top-bar";
import InvitationTemeCard from "./components/inviitation-theme-card";

const Themes = () => {
  const { data } = useGetInvitationThemes();

  const invitationThemes = useMemo(() => data?.data ?? [], [data?.data]);

  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full overflow-y-auto">
      <TopBar />
      <div className="h-full w-full flex flex-col items-center">
        <div className="w-2/3 px-4 py-2 grid grid-cols-2 gap-2">
          {invitationThemes.map((invitation) => (
            <InvitationTemeCard key={invitation?.id} {...invitation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
