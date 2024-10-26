"use client";

import React, { useEffect } from "react";
import ThemeEditor from "~/models/theme-editor";
import ThemePreviwe from "~/models/theme-preview";
import useQueryParams from "~/hooks/customs/use-query-params";
import useGetInvitationSheets from "~/hooks/queries/use-get-invitation-sheets";
import useStore from "~/store";

const SelectedThemeDetails = () => {
  const {
    invitationPage: { setInitialPages },
  } = useStore();

  const params = useQueryParams();
  const invitationDeskId = params?.invitation_desk_id as string;

  const { data: invitationSheets, isFetched } = useGetInvitationSheets({
    id: invitationDeskId,
    enabled: !!invitationDeskId,
  });

  useEffect(() => {
    if (isFetched && invitationSheets?.data) {
      setInitialPages(
        invitationSheets?.data.map((sheet) => ({
          id: sheet.id,
          content: sheet.content,
        }))
      );
    }
  }, [isFetched, invitationSheets]);

  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full">
      <div className="h-full w-full flex">
        <div className="h-full w-full p-5">
          <div className="text-gray-100 text-xl font-semibold drop-shadow-xl">
            Preview
          </div>
          <ThemePreviwe isMinimize={true} />
        </div>
        <div className="h-full bg-base p-5 transition-all ease-in-out duration-500 w-[45rem]">
          <ThemeEditor />
        </div>
      </div>
    </div>
  );
};

export default SelectedThemeDetails;
