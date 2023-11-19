import type { HTMLAttributes } from "react";
import { BadgeModel } from "../../models";

export type BadgeProps = Partial<BadgeModel> &
  Omit<HTMLAttributes<HTMLElement>, "className">;
