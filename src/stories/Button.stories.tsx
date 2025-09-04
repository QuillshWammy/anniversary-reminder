import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: { control: { type: "radio" }, options: ["primary", "secondary"] },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: "Primary Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { label: "Secondary Button", variant: "secondary" },
};
