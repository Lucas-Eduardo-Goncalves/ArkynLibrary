import { IMAGE_EXTENSIONS } from "../configs";
import { isUrl } from "./_isUrl";
export function isImageUrl(url) {
    if (!url)
        return false;
    if (!isUrl(url))
        return false;
    const ext = new URL(url).pathname.split(".").pop();
    return IMAGE_EXTENSIONS.includes(ext);
}
