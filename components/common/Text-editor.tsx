"use client";

import dynamic from "next/dynamic";
import { FC, useMemo } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const RichTextEditor: FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
      ],
    }),
    []
  );

  const formats = useMemo(
    () => [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "image",
      "video",
    ],
    []
  );

  return (
    <div className="rich-text-editor">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        theme="snow"
       
      />
      <style jsx>{`
        .rich-text-editor :global(.ql-editor) {
          height: 300px !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          white-space: normal !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          max-width: 100% !important;
        }
        .rich-text-editor :global(.ql-container) {
          height: 300px !important;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;