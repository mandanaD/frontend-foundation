import type {Meta, StoryObj} from '@storybook/react';
import {Alert} from "./alert.tsx";

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    args: {
        title: "Unable to process your payment.",
        description: "This is an alert with icon, title and description.",
    }
}
export default meta;


export const Info: Story = {
    args: {
        type: 'info',
    },
};