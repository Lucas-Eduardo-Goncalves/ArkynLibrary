import type { HTMLAttributes } from "react";

type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export function TableHeader(props: TableHeaderProps) {
	return <thead {...props} />;
}
