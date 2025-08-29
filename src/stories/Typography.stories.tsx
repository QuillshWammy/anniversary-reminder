import type { Size, Variant } from "@/components/type";
import { Typography } from "@/components/typography/Typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"] satisfies Size[],
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "accent",
        "background",
      ] satisfies Variant[],
    },
    bold: { control: "boolean" },
    as: {
      control: "select",
      options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "これはデフォルトのテキストです。",
    size: "md",
    variant: "primary",
    bold: false,
    as: "p",
  },
};

export const Bold: Story = {
  args: {
    children: "太字のテキストです。",
    size: "lg",
    bold: true,
    variant: "secondary",
  },
};

export const AccentSmall: Story = {
  args: {
    children: "小さいアクセントカラーのテキスト。",
    size: "sm",
    variant: "accent",
  },
};

export const BackgroundSpan: Story = {
  args: {
    children: "span要素で表示されるテキスト。",
    as: "span",
    size: "xl",
    variant: "background",
    bold: true,
  },
};

export const HeadingDefaultSize: Story = {
  args: {
    children: "これは h1 見出し (size 未指定)",
    as: "h1",
    variant: "primary",
  },
};
