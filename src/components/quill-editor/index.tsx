"use client";

import React, { forwardRef } from "react";
import ReactQuill from "react-quill";

const QuillEditor = forwardRef<ReactQuill, ReactQuill.ReactQuillProps>(
  (props, ref) => <ReactQuill ref={ref} {...props} />
);

QuillEditor.displayName = "QuillEditor";

export default QuillEditor;
