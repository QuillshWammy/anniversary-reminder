import React, { useRef } from "react";
import { useDialog, useModal, useOverlay, usePreventScroll } from "react-aria";
import { Button } from "../button/Button";
import { Typography } from "../typography/Typography";
import styles from "./index.module.css";

type DialogProps = {
  title: string;
  date: string;
  text: string;
  onClose: () => void;
  onConfirm: () => void;
};

export const Dialog: React.FC<DialogProps> = ({
  title,
  date,
  text,
  onClose,
  onConfirm,
}) => {
  const ref = useRef(null);

  const { overlayProps } = useOverlay(
    { onClose, isOpen: true, isDismissable: true },
    ref
  );

  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog({}, ref);

  return (
    <div className={styles.overlay}>
      <div
        {...overlayProps}
        {...dialogProps}
        {...modalProps}
        ref={ref}
        className={styles.container}
      >
        <Typography as="h1" size="lg" {...titleProps}>
          {title}
        </Typography>
        <div className={styles.content}>
          <Typography>
            {`${date}
            ${text}`}
          </Typography>
        </div>
        <DialogButtons onClose={onClose} onConfirm={onConfirm} />
      </div>
    </div>
  );
};

type DialogButtonsProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const DialogButtons: React.FC<DialogButtonsProps> = ({
  onClose,
  onConfirm,
}) => {
  return (
    <div className={styles.buttonContainer}>
      <Button
        label="閉じる"
        variant="secondary"
        className={styles.buttonItem}
        onClick={onClose}
      />
      <Button
        label="確定"
        variant="primary"
        className={styles.buttonItem}
        onClick={onConfirm}
      />
    </div>
  );
};
