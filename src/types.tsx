import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

export type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

export type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;
