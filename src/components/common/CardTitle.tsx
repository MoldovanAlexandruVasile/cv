import type { ReactNode } from "react";
import { classNames } from "../../utils/classNames.ts";

type CardTitleProps = {
  large?: boolean;
  children: ReactNode;
};

export const CardTitle = ({ large = false, children }: CardTitleProps) => (
  <h3 className={classNames("mt-1.5 font-bold", large ? "text-[30px]" : "text-xl")}>{children}</h3>
);
