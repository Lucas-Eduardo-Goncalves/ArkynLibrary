type ParamsType = Record<string, string | number | boolean | undefined>;
export declare function useScopedParams(scope?: string): {
    getParam: (key: string) => string;
    getScopedSearch: (params: ParamsType) => string;
};
export {};
//# sourceMappingURL=useScopedParams.d.ts.map