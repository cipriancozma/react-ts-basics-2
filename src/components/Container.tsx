import { ElementType } from "react";
import { ContainerProps } from "../types";

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
