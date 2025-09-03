import React, { useRef } from "react";
import { useTextField } from "react-aria";
import styles from "./index.module.css";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useTextField(
    {
      label,
      value,
      onChange: (val) => onChange(val),
      placeholder,
    },
    ref
  );

  return (
    <div className={`${styles.inputWrapper} ${className || ""}`}>
      <label {...labelProps} className={styles.label}>
        {label}
      </label>
      <input {...inputProps} ref={ref} className={styles.input} />
    </div>
  );
};
