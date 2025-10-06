import type {Meta, StoryObj} from '@storybook/react';
import {Alert} from "./Alert.tsx";

type Story = StoryObj<typeof Alert>;

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    args: {
        title: "Unable to process your payment.",
        description: "This is an alert with icon, title and description.",
        HaveIcon: true
    },
    argTypes: {
        type: {
            control: "select"
        }
    },
}
export default meta;


export const Info: Story = {
    args: {
        type: 'info',
    },
};
export const Success: Story = {
    args: {
        type: 'success',
    },
};
export const Warning: Story = {
    args: {
        type: 'warning',
    },
};
export const Error: Story = {
    args: {
        type: 'error',
    },
};