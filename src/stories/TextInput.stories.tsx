import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { TextInput } from "@/components/input/textInput/TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const TextInputWrapper = (
  props: Omit<React.ComponentProps<typeof TextInput>, "value" | "onChange">
) => {
  const [value, setValue] = useState("");

  return (
    <div
      style={{ backgroundColor: "var(--color-background)", padding: "2rem" }}
    >
      <TextInput {...props} value={value} onChange={setValue} />
      <p style={{ marginTop: "1rem" }}>入力中の値: {value}</p>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <TextInputWrapper label="名前" placeholder="名前を入力してください" />
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <TextInputWrapper label="メールアドレス" placeholder="example@mail.com" />
  ),
};

export const Controlled: Story = {
  render: () => (
    <TextInputWrapper
      label="コメント"
      placeholder="コメントを入力してください"
    />
  ),
};
