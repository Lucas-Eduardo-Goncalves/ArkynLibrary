export declare const container: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        card: {
            padding: "var(--table-td-card-space)";
            background: "var(--table-row-background)";
        };
        default: {
            padding: "var(--table-td-default-space)";
        };
    };
    isFirst: {
        true: {
            borderRadius: "var(--table-td-radii) 0 0 var(--table-td-radii)";
        };
    };
    isLast: {
        true: {
            borderRadius: "0 var(--table-td-radii) var(--table-td-radii) 0";
        };
    };
}>;
//# sourceMappingURL=styles.css.d.ts.map