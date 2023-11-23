import type { RenderLeafProps } from "slate-react";

export function RenderLeaf(args: RenderLeafProps) {
  const { attributes, children: DefaultChildren, leaf } = args;

  let children = DefaultChildren;

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
}
