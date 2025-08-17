import AnniversaryCalendar from "@/components/calender/AnniversaryCalendar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnniversaryCalendar> = {
  title: "Components/AnniversaryCalendar",
  component: AnniversaryCalendar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AnniversaryCalendar>;

export const Default: Story = {
  args: {
    selectedDate: new Date(),
    onDateClick: (date: Date) => alert(date.toLocaleDateString()),
  },
};
