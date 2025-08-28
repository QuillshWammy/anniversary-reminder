import { Button } from "@/components/button/Button";
import { Dialog } from "@/components/dialog/Dialog";
import React from "react";
import { OverlayContainer } from "react-aria";
import { useOverlayTriggerState } from "react-stately";

export const DialogExample: React.FC = () => {
  const state = useOverlayTriggerState({});

  return (
    <div className="p-8" style={{ backgroundColor: "var(--color-background)" }}>
      <Button label="ダイアログを開く" variant="primary" onClick={state.open} />

      {state.isOpen && (
        <OverlayContainer>
          <Dialog
            title="予定の確認"
            date="2025-08-28"
            text="記念日イベントの準備を忘れないでください。"
            onClose={state.close}
            onConfirm={() => {
              alert("確定しました！");
              state.close();
            }}
          />
        </OverlayContainer>
      )}
    </div>
  );
};
