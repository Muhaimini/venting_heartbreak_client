"use client";

import React, { useEffect } from "react";
import ThemeEditor from "~/models/theme-editor";
import ThemePreviwe from "~/models/theme-preview";
import useQueryParams from "~/hooks/customs/use-query-params";
import useGetInvitationSheets from "~/hooks/queries/use-get-invitation-sheets";
import first from "lodash/first";
import useStore from "~/store";
import { useRouter } from "next/navigation";

const SelectedThemeDetails = () => {
  const router = useRouter();

  const {
    invitationPage: { setInitialPages, setActivePage },
  } = useStore();

  const params = useQueryParams();
  const invitationDeskId = params?.invitation_desk_id as string;

  const { data: invitationSheets, isFetched } = useGetInvitationSheets({
    id: invitationDeskId,
    enabled: !!invitationDeskId,
  });

  const onClickPreview = () => {
    router.push(`/preview/${invitationDeskId}`);
  };

  useEffect(() => {
    if (isFetched && invitationSheets?.data) {
      const initialPages = invitationSheets.data.map((sheet) => ({
        id: sheet.id,
        content: sheet.content,
      }));

      const active = first(initialPages);

      setInitialPages(initialPages);
      if (active) setActivePage(active.id);
    }
  }, [isFetched, invitationSheets]);

  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full">
      <div className="h-full w-full flex">
        <div className="h-full w-full p-5">
          <div className="text-gray-100 text-xl font-semibold drop-shadow-xl">
            Invitation Sheet
          </div>
          <ThemePreviwe isMinimize={true} />
        </div>
        <div className="h-full bg-base p-5 transition-all ease-in-out duration-500 w-[45rem] flex flex-col gap-4">
          <div className="flex items-center justify-end">
            <button
              onClick={onClickPreview}
              className="px-2 py-1 border border-white rounded-md text-white w-40"
            >
              Preview
            </button>
          </div>
          <ThemeEditor />
        </div>
      </div>
    </div>
  );
};

export default SelectedThemeDetails;
