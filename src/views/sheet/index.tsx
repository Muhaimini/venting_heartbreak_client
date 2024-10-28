"use client";

import React, { useEffect } from "react";
import ThemeEditor from "~/models/theme-editor";
import ThemePreviwe from "~/models/theme-preview";
import useQueryParams from "~/hooks/customs/use-query-params";
import useGetInvitationSheets from "~/hooks/queries/use-get-invitation-sheets";

import useStore from "~/store";
import { useRouter } from "next/navigation";
import TopBar from "../themes/components/top-bar";

const SelectedThemeDetails = () => {
  const router = useRouter();

  const {
    invitationPage: { setInitialPages },
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

      setInitialPages(initialPages);
    }
  }, [isFetched, invitationSheets]);

  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-indigo-500 text-black h-full w-full">
      <div className="relative h-full w-full flex">
        <div className="relative h-full w-full overflow-auto">
          <TopBar title="Invitation Sheet" />
          <div className="pb-8">
            <ThemePreviwe isMinimize={true} />
          </div>
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
          <ThemeEditor invitationDeskId={invitationDeskId} />
        </div>
      </div>
    </div>
  );
};

export default SelectedThemeDetails;
