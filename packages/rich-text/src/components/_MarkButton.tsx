import type { LucideIcon } from "lucide-react";
import type { MouseEvent } from "react";

import { isMarkActive, toggleMark } from "../functions";
import { useSlate } from "slate-react";

type MarkButtonProps = {
  format: string;
  icon: LucideIcon;
};

export function MarkButton(args: MarkButtonProps) {
  const { format, icon: Icon } = args;

  const editor = useSlate();
  const isActive = isMarkActive(editor, format);
  const activeClass = isActive ? "is_active" : "not_active";

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    toggleMark(editor, format);
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
