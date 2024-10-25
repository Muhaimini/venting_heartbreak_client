import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  MouseEvent,
} from "react";
import ReactQuill from "react-quill";
import { IoMdImages } from "react-icons/io";

interface EditorProps extends ReactQuill.ReactQuillProps {
  focusTrigger?: string | number | boolean;
}

const CustomToolbar = ({
  onInsertImage,
}: {
  onInsertImage?(
    event?: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ): void;
}) => (
  <div id="toolbar">
    <select className="ql-header" defaultValue="">
      <option value="1">Header 1</option>
      <option value="2">Header 2</option>
      <option value="3">Header 3</option>
      <option value="">Normal</option>
    </select>
    <button className="ql-bold">Bold</button>
    <button className="ql-italic">Italic</button>
    <button className="ql-underline">Underline</button>
    <button className="ql-strike">Strike</button>
    <button className="ql-blockquote">Blockquote</button>
    <button className="ql-code-block">Code Block</button>
    <button className="ql-list" value="ordered">
      Ordered List
    </button>
    <button className="ql-list" value="bullet">
      Bullet List
    </button>
    <button className="ql-indent" value="-1">
      Indent -1
    </button>
    <button className="ql-indent" value="+1">
      Indent +1
    </button>
    <button className="ql-link">Link</button>
    <div
      className="cursor-pointer flex items-center justify-center h-6 w-7"
      onClick={onInsertImage}
    >
      <IoMdImages />
    </div>
  </div>
);

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const QuillEditor = forwardRef<ReactQuill, EditorProps>((props, ref) => {
  const editorRef = useRef<ReactQuill>(null);

  const setFocusToEnd = () => {
    if (!editorRef.current || !props?.focusTrigger) return;
    const editor = editorRef.current.getEditor();
    const length = editor.getLength();
    editor.focus();
    editor.setSelection(length, length);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation();

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
      fileInputRef.current.click();
    }
  };

  const insertImage = (url: string) => {
    if (!editorRef.current) return;

    const editor = editorRef.current.getEditor();
    const range = editor.getSelection(true);

    if (range) {
      editor.insertEmbed(range.index, "image", url);
      editor.setSelection(range);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          insertImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useImperativeHandle(ref, () => editorRef.current!);
  useEffect(() => setFocusToEnd(), [props.focusTrigger]);

  useEffect(() => {
    if (editorRef.current) {
      console.log("Editor loaded and ready for interaction.");
    }
  }, []);

  return (
    <div className="text-editor">
      <CustomToolbar onInsertImage={handleImageUpload} />
      <ReactQuill
        {...props}
        ref={editorRef}
        formats={formats}
        modules={{
          toolbar: {
            container: "#toolbar",
          },
        }}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={onFileChange}
      />
    </div>
  );
});

QuillEditor.displayName = "QuillEditor";

export default QuillEditor;
