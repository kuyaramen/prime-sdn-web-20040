"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  Video,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  SeparatorHorizontal,
  Highlighter,
  Text,
  Subscript,
  Superscript,
  CheckSquare,
  XSquare,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing...",
  minHeight = "300px",
}: RichTextEditorProps) {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkOptions, setShowLinkOptions] = useState(false);

  const toolbarButtons = [
    { icon: Undo, label: "Undo", action: "undo" },
    { icon: Redo, label: "Redo", action: "redo" },
    { divider: true },
    { icon: Heading1, label: "Heading 1", action: "h1" },
    { icon: Heading2, label: "Heading 2", action: "h2" },
    { icon: Heading3, label: "Heading 3", action: "h3" },
    { divider: true },
    { icon: Bold, label: "Bold", action: "bold" },
    { icon: Italic, label: "Italic", action: "italic" },
    { icon: Underline, label: "Underline", action: "underline" },
    { icon: Strikethrough, label: "Strikethrough", action: "strike" },
    { divider: true },
    { icon: List, label: "Bullet List", action: "ul" },
    { icon: ListOrdered, label: "Numbered List", action: "ol" },
    { icon: Quote, label: "Quote", action: "quote" },
    { icon: Code, label: "Code", action: "code" },
    { divider: true },
    { icon: AlignLeft, label: "Align Left", action: "alignLeft" },
    { icon: AlignCenter, label: "Align Center", action: "alignCenter" },
    { icon: AlignRight, label: "Align Right", action: "alignRight" },
    { divider: true },
    { icon: LinkIcon, label: "Link", action: "link" },
    { icon: ImageIcon, label: "Image", action: "image" },
    { icon: Video, label: "Video", action: "video" },
    { divider: true },
    { icon: Highlighter, label: "Highlight", action: "highlight" },
    { icon: Text, label: "Text Color", action: "color" },
  ];

  const handleToolbarAction = useCallback((action: string) => {
    if (action === "link") {
      setShowLinkOptions(!showLinkOptions);
    } else if (action === "image") {
      // Handle image insertion
      const url = prompt("Enter image URL:");
      if (url) {
        const imageHtml = `<img src="${url}" alt="Image" style="max-width: 100%; height: auto;" />`;
        onChange(value + imageHtml);
      }
    } else if (action === "video") {
      // Handle video insertion
      const url = prompt("Enter video URL:");
      if (url) {
        const videoHtml = `<video controls style="max-width: 100%;"><source src="${url}" /></video>`;
        onChange(value + videoHtml);
      }
    } else {
      // For other actions, we would integrate with a proper rich text editor
      // For now, this is a placeholder for the functionality
      console.log("Action:", action);
    }
  }, [value, onChange, showLinkOptions]);

  const handleAddLink = () => {
    if (linkUrl) {
      const linkHtml = `<a href="${linkUrl}" target="_blank" style="color: #500a31; text-decoration: underline;">${linkUrl}</a>`;
      onChange(value + linkHtml);
      setLinkUrl("");
      setIsLinkModalOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 flex-wrap">
        {toolbarButtons.map((button, index) => {
          if (button.divider) {
            return (
              <SeparatorHorizontal
                key={`divider-${index}`}
                className="w-px h-6 bg-gray-300 mx-1"
              />
            );
          }
          const Icon = button.icon;
          if (!Icon || !button.action) return null;
          return (
            <motion.button
              key={button.action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleToolbarAction(button.action!)}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-700 hover:text-maroon-900"
              title={button.label}
            >
              <Icon size={16} />
            </motion.button>
          );
        })}
      </div>

      {/* Editor Area */}
      <div
        contentEditable
        className="p-4 min-h-[300px] focus:outline-none prose prose-sm max-w-none"
        style={{ minHeight }}
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        suppressContentEditableWarning
      />

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Add Link</h3>
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 mb-4"
            />
            <div className="flex items-center gap-3">
              <button
                onClick={handleAddLink}
                disabled={!linkUrl}
                className="flex-1 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Link
              </button>
              <button
                onClick={() => {
                  setIsLinkModalOpen(false);
                  setLinkUrl("");
                }}
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors font-semibold"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Character Count */}
      <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
        <span>{value.length} characters</span>
        <span>{value.split(/\s+/).filter(Boolean).length} words</span>
      </div>
    </div>
  );
}
