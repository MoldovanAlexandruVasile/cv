import type { ReactNode } from "react";
import { cx } from "@moldovanalexandruvasile/unity-marketing";

type CardTitleProps = {
  large?: boolean;
  children: ReactNode;
};

export const CardTitle = ({ large = false, children }: CardTitleProps) => (
  <h3 className={cx("mt-1.5 font-bold", large ? "text-[30px]" : "text-xl")}>{children}</h3>
);
