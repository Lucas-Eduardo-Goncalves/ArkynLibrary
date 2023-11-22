import { type BaseEditor } from "slate";
import type { ReactEditor } from "slate-react";
type IsBlockActiveProps = {
    editor: BaseEditor & ReactEditor;
    format: string;
    blockType?: "align" | "type";
};
export declare function isBlockActive(args: IsBlockActiveProps): boolean;
export {};
//# sourceMappingURL=_isBlockActive.d.ts.map