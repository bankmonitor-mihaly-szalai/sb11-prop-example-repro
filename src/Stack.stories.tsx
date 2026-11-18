import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stack } from "./Stack";

const meta = { component: Stack, tags: ["autodocs"] } satisfies Meta<typeof Stack>;
export default meta;

export const Default: StoryObj<typeof meta> = {
  args: { gap: "4", children: "Stack content" },
};
