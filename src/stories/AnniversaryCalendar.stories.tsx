import { addDays } from "date-fns";
import AnniversaryCalendar from "@/components/calender/AnniversaryCalendar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnniversaryCalendar> = {
  title: "Components/AnniversaryCalendar",
  component: AnniversaryCalendar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AnniversaryCalendar>;

const today = new Date();
const nextDay = addDays(today, 1);
const prevDay = addDays(today, -2);

export const Default: Story = {
  args: {
    selectedDate: nextDay,
    events: [
      { id: "1", title: "Next Day", date: nextDay },
      { id: "2", title: "Two Days Ago", date: prevDay },
    ],
  },
};
