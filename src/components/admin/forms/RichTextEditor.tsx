"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Label } from "@/components/ui/label";
import "quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface RichTextEditorProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  height?: string;
}

export function RichTextEditor({
  label,
  value,
  onChange,
  placeholder = "Enter text here...",
  required = false,
  readOnly = false,
  height = "300px",
}: RichTextEditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
      ],
    }),
    []
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
    "script",
    "size",
    "color",
    "background",
    "font",
    "align",
  ];

  return (
    <div className="space-y-2">
      {label && (
        <Label>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </Label>
      )}
      <div className="border rounded-lg overflow-hidden bg-white">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          readOnly={readOnly}
          style={{ height, backgroundColor: "white" }}
        />
      </div>
    </div>
  );
}
