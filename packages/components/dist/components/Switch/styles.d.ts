import type { CSSProperties } from "react";
type GenerateCSSProps = {
    isChecked: boolean;
    gradientLeftColor: string;
    size: number;
};
export declare function generateCSS(props: GenerateCSSProps): {
    container: CSSProperties;
    background_container: CSSProperties;
    circle_container: CSSProperties;
    background_animation: {
        transform: string;
    };
};
export {};
//# sourceMappingURL=styles.d.ts.map