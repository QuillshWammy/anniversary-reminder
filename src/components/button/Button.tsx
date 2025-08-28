import React, { useRef } from "react";
import { useButton } from "react-aria";
import styles from "./index.module.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  className,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton({ onPress: onClick }, ref);

  const buttonClassName = `${styles.button} ${
    variant === "primary" ? styles.primary : styles.secondary
  } ${className}`;

  return (
    <button {...buttonProps} ref={ref} className={buttonClassName}>
      {label}
    </button>
  );
};
