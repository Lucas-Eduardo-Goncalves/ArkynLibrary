import { jsx as _jsx } from "react/jsx-runtime";
import { Image } from "lucide-react";
import { useSlateStatic } from "slate-react";
import { isImageUrl } from "../functions";
import { insertImage } from "../functions/_insertImage";
export function InsertImageButton() {
    const editor = useSlateStatic();
    function handleClick(event) {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the image:");
        if (url && !isImageUrl(url)) {
            alert("URL is not an image");
            return;
        }
        url && insertImage(editor, url);
    }
    return (_jsx("button", { className: "rich_text_header_button", onClick: handleClick, children: _jsx(Image, { size: 16 }) }));
}
