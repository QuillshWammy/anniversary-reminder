import React, { useRef, useState } from "react";
import { useDialog, useModal, useOverlay, usePreventScroll } from "react-aria";
import { Button } from "@/components/button/Button";
import { TextInput } from "@/components/input/textInput/TextInput";
import { Typography } from "@/components/typography/Typography";
import { db } from "@/db";
import styles from "./index.module.css";

type DialogProps = {
  title: string;
  date: string;
  contents: string;
  onClose: () => void;
  onConfirm: () => void;
};

export const Dialog: React.FC<DialogProps> = ({
  title,
  date,
  contents,
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
  const [inputText, setInputText] = useState("");

  const handleConfirm = () => {
    db.events.add({
      title,
      date,
      description: inputText,
    }).then(id => {
      console.log("イベントをDBに追加:", id);
      onConfirm();
    });
  };

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
            ${contents}`}
          </Typography>
        </div>
        <TextInput
          label="イベント詳細"
          value={inputText}
          onChange={setInputText}
          placeholder="入力してください..."
        />
        <DialogButtons onClose={onClose} onConfirm={handleConfirm} />
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
