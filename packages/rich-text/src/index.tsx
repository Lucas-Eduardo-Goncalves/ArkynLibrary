import * as Icons from "lucide-react";
import { useCallback, useState } from "react";
import { createEditor } from "slate";
import {
  Editable,
  Slate,
  withReact,
  type RenderElementProps,
  type RenderLeafProps,
} from "slate-react";

import { BlockButton, MarkButton } from "./components";
import { INITIAL_VALUE } from "./configs";
import { RenderElement, RenderLeaf } from "./elements";

export function RichText() {
  const renderElement = useCallback(
    (props: RenderElementProps) => <RenderElement {...props} />,
    []
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <RenderLeaf {...props} />,
    []
  );

  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div className="rich_text_container">
      <Slate editor={editor} initialValue={INITIAL_VALUE}>
        <header className="rich_text_header">
          <MarkButton format="bold" icon={Icons.Bold} />
          <MarkButton format="italic" icon={Icons.Italic} />
          <MarkButton format="underline" icon={Icons.Underline} />
          <MarkButton format="code" icon={Icons.Code} />
          <BlockButton format="heading-one" icon={Icons.Heading1} />
          <BlockButton format="heading-two" icon={Icons.Heading2} />
          <BlockButton format="block-quote" icon={Icons.Quote} />
          <BlockButton format="numbered-list" icon={Icons.ListOrdered} />
          <BlockButton format="bulleted-list" icon={Icons.List} />
          <BlockButton format="left" icon={Icons.AlignLeft} />
          <BlockButton format="center" icon={Icons.AlignCenter} />
          <BlockButton format="right" icon={Icons.AlignRight} />
          <BlockButton format="justify" icon={Icons.AlignJustify} />
        </header>

        <Editable
          className="rich_text_textarea"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
        />
      </Slate>
    </div>
  );
}
