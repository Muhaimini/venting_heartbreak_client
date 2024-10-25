"use client";

import React, { useEffect, useMemo, useRef } from "react";
import type ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import useStore from "~/store";

const QuillEditor = dynamic(() => import("~/components/quill-editor"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const ThemeEditor = () => {
  const editorRef = useRef<ReactQuill>(null);

  const {
    invitationPage: { onModifyActiveContent, activePage },
  } = useStore();

  const onEditorChange = (value: string) => {
    onModifyActiveContent({ id: activePage.id, content: value });
  };

  const setFocusToEnd = () => {
    if (!editorRef.current) return;

    const editor = editorRef.current.getEditor();
    const length = editor.getLength();

    editor.focus();
    editor.setSelection(length, length);
  };

  useEffect(() => {
    setFocusToEnd();
  }, [activePage.id, editorRef]);

  const editorMemoize = useMemo(() => {
    return (
      <QuillEditor
        ref={editorRef}
        onChange={onEditorChange}
        value={activePage.content}
      />
    );
  }, [activePage, editorRef]);

  return (
    <div className="relative w-full flex flex-col gap-2 h-[calc(100%-60px)]">
      <div className="flex flex-col gap-3 h-full">
        {/* <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Invitation title
          </label>
          <input
            type="text"
            value={pageData?.subtitle}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            onChange={(event) => onSubtitleChange(event.target.value)}
          />
        </div> */}
        <div className="bg-white h-full relative overflow-hidden rounded-md">
          {editorMemoize}
        </div>
      </div>
    </div>
  );
};

export default ThemeEditor;
