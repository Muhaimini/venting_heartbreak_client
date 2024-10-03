import React, { ReactNode, FC } from "react";
import cx from "classnames";
import { Size, Color } from "@types";

export interface TextProps {
  size?: Size;
  color?: Color;
  className?: string;
  children?: ReactNode;
}

const Text: FC<TextProps> = ({
  size = "md",
  color = "black",
  children = null,
  className,
}) => {
  const textSize = cx({
    "text-xs": size === "xs",
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg",
    "text-xl": size === "xl",
    "text-2xl": size === "xxl",
  });

  const textColor = cx({
    "text-white": color === "white",
    "text-slate-950": color === "black",
    "text-slate-400": color === "green",
    "text-rose-500": color === "red",
    "text-blue-600": color === "blue",
    "text-yellow-400": color === "yellow",
    "text-emerald-500": color === "green",
  });

  return <div className={cx(textSize, textColor, className)}>{children}</div>;
};

export default Text;
