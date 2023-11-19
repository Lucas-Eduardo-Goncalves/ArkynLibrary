import { jsx as _jsx } from "react/jsx-runtime";
import * as styles from "./styles.css";
import { useArkyn } from "../../hooks";
export function Badge(props) {
    const { badge } = useArkyn();
    const defaultProps = { ...badge, ...props };
    const { size, space, spacing, radii, variant, colorScheme, fontSize, fontWeight, ...rest } = defaultProps;
    return (_jsx("div", { className: styles.container({
            size,
            space,
            spacing,
            radii,
            variant,
            colorScheme,
            fontSize,
            fontWeight,
        }), ...rest }));
}
