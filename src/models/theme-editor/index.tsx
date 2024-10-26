"use client";

import React from "react";
import dynamic from "next/dynamic";
import useStore from "~/store";

const QuillEditor = dynamic(() => import("~/components/quill-editor"), {
  ssr: false,
});

const ThemeEditor = () => {
  const {
    invitationPage: { onModifyActiveContent, activePage },
  } = useStore();

  const onEditorChange = (value: string) => {
    onModifyActiveContent({ id: activePage.id, content: value });
  };

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
