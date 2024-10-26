"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import useStore from "~/store";
import usePatchInvitationSheet from "~/hooks/mutations/use-patch-invitation-sheet";
import debounce from "lodash/debounce";
import useSearch from "~/hooks/customs/use-search";

const QuillEditor = dynamic(() => import("~/components/quill-editor"), {
  ssr: false,
});

const ThemeEditor = () => {
  const { isSync, debouncedSearchValue, onChangeSearchValue } = useSearch();
  const { mutate: onUpdateSheet } = usePatchInvitationSheet();

  const {
    invitationPage: { onModifyActiveContent, activePage },
  } = useStore();

  const onEditorChange = (value: string) => {
    onModifyActiveContent({ id: activePage.id, content: value });
    onChangeSearchValue(value);
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
