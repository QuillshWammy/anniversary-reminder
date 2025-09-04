import { OverlayContainer } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { Button } from "@/components/button/Button";
import { Dialog } from "@/components/dialog/Dialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;
const DialogWrapper = () => {
  const state = useOverlayTriggerState({});

  return (
    <div
      style={{ backgroundColor: "var(--color-background)", padding: "2rem" }}
    >
      <Button label="ダイアログを開く" variant="primary" onClick={state.open} />
      {state.isOpen && (
        <OverlayContainer>
          <Dialog
            title="予定の確認"
            date="2025-08-28"
            contents="Storybook から開いたダイアログです。"
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

export const Default: Story = {
  render: () => <DialogWrapper />,
};
