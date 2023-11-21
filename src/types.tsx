import { ComponentPropsWithoutRef } from "react";

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
