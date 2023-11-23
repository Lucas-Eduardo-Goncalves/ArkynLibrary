import { Image } from "lucide-react";
import { useSlateStatic } from "slate-react";
import { MouseEvent } from "react";

import { isImageUrl } from "../functions";
import { insertImage } from "../functions/_insertImage";

export function InsertImageButton() {
  const editor = useSlateStatic();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const url = window.prompt("Enter the URL of the image:");

    if (url && !isImageUrl(url)) {
      alert("URL is not an image");
      return;
    }

    url && insertImage(editor, url);
  }

  return (
    <button className="rich_text_header_button" onClick={handleClick}>
      <Image size={16} />
    </button>
  );
}
