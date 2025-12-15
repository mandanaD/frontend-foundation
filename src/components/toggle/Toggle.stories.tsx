import type {Meta, StoryObj} from '@storybook/react';
import {Toggle} from "./Toggle.tsx";

type Story = StoryObj<typeof Toggle>;

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    args: {
        variant: "primary",
        size: "md",
        checked: false,
        defaultChecked: false
    },
    argTypes: {
        variant: {
            control: "select"
        },
        size: {
            control: "select"
        },
    },
}
export default meta;

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};
export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};
export const Info: Story = {
    args: {
        variant: 'info',
    },
};
export const Success: Story = {
    args: {
        variant: 'success',
    }
};

export const Warning: Story = {
    args: {
        variant: 'warning',
    }
};

export const Error: Story = {
    args: {
        variant: 'error',
    }
};