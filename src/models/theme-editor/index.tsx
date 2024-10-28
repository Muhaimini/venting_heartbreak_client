"use client";

import React, { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import useStore from "~/store";
import usePatchInvitationSheet from "~/hooks/mutations/use-patch-invitation-sheet";
import useSearch from "~/hooks/customs/use-search";
import Select from "~/components/select";
import useGetMusicThemes from "~/hooks/queries/use-get-music-themes";
import usePatchInvitationDesk from "~/hooks/mutations/use-patch-invitation-desk";
import useGetInvitationDeskDetails from "~/hooks/queries/use-get-invtation-desk-details";

const QuillEditor = dynamic(() => import("~/components/quill-editor"), {
  ssr: false,
});

const ThemeEditor = ({ invitationDeskId = "" }) => {
  const { isSync, debouncedSearchValue, onChangeSearchValue } = useSearch();
  const { mutate: onUpdateSheet } = usePatchInvitationSheet();
  const { mutate: onUpdateDesk } = usePatchInvitationDesk();

  const { data: musicThemes } = useGetMusicThemes();
  const { data: deskDetails } = useGetInvitationDeskDetails({
    id: invitationDeskId,
    enabled: !!invitationDeskId,
  });

  const musics = useMemo(() => {
    if (musicThemes?.data) {
      return musicThemes.data.map((music) => ({
        label: `${music.title} - ${music.artist}`,
        value: music.id,
      }));
    }
    return [];
  }, [musicThemes]);

  const {
    invitationPage: { onModifyActiveContent, activePage },
  } = useStore();

  const onEditorChange = (value: string) => {
    onModifyActiveContent({ id: activePage.id, content: value });
    onChangeSearchValue(value);
  };

  const onSelectMusic = (id: string) => {
    onUpdateDesk({
      invitation_desk_id: invitationDeskId,
      data: { music_theme_id: id },
    });
  };

  useEffect(() => {
    if (isSync && activePage.id !== "default") {
      onUpdateSheet({
        invitation_sheet_id: activePage.id,
        content: debouncedSearchValue,
      });
    }
  }, [isSync, debouncedSearchValue]);

  return (
    <div className="relative w-full flex flex-col gap-2 h-[calc(100%-60px)]">
      <div className="flex flex-col gap-3 h-full">
        <Select
          label="Select music"
          placeholder="Select music"
          data={musics}
          value={deskDetails?.data.music_theme?.id}
          onChange={onSelectMusic}
        />
        <div className="bg-white h-full relative overflow-hidden rounded-md">
          <QuillEditor
            onChange={onEditorChange}
            value={activePage.content}
            focusTrigger={activePage.id}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeEditor;
