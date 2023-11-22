import type { LucideIcon } from "lucide-react";
import type { MouseEvent } from "react";
import { useSlate } from "slate-react";

import { isBlockActive, toggleBlock } from "../functions";
import { TEXT_ALIGN_TYPES } from "../configs";

type BlockButtonProps = {
  format: string;
  icon: LucideIcon;
};

export function BlockButton(args: BlockButtonProps) {
  const { format, icon: Icon } = args;

  const editor = useSlate();
  const isActive = isBlockActive({
    editor,
    format,
    blockType: TEXT_ALIGN_TYPES.includes(format) ? "align" : "type",
  });
  const activeClass = isActive ? "is_active" : "not_active";

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleBlock(editor, format);
  }

  return (
    <button
      className={`rich_text_header_button ${activeClass}`}
      onClick={handleClick}
    >
      <Icon size={16} />
    </button>
  );
}
