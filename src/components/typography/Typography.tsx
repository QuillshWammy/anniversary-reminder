import React from "react";
import type { Size, Variant } from "../type";

type AsElement = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  size?: Size;
  variant?: Variant;
  bold?: boolean;
  as?: AsElement;
};

const sizeMap = {
  xs: "var(--font-size-xs)",
  sm: "var(--font-size-sm)",
  md: "var(--font-size-md)",
  lg: "var(--font-size-lg)",
  xl: "var(--font-size-xl)",
};

const colorMap = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  accent: "var(--color-accent)",
  background: "var(--color-background)",
};

const headingSizeMap: Record<AsElement, Size> = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
  h5: "xs",
  h6: "xs",
  p: "md",
  span: "md",
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  size,
  variant,
  bold = false,
  as = "p",
  ...restProps
}) => {
  const Component = as;

  const resolvedSizeKey = size ?? headingSizeMap[as] ?? "md";
  const resolvedSize = sizeMap[resolvedSizeKey];

  const style: React.CSSProperties = {
    fontSize: resolvedSize,
    color: variant ? colorMap[variant] : "black",
    fontWeight: bold ? "bold" : "normal",
    whiteSpace: "pre-wrap",
  };

  return (
    <Component style={style} {...restProps}>
      {children}
    </Component>
  );
};
