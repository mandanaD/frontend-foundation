import type {Meta, StoryObj} from '@storybook/react';
import {Status} from './Status';

type Story = StoryObj<typeof Status>;

const meta: Meta<typeof Status> = {
    title: 'Components/Status',
    component: Status,
    tags: ['autodocs'],
    args: {
        size: "md",
        variant: "primary",
        animation:"none"
    },
    argTypes: {
        variant: {
            control: "select"
        },
        size: {
            control: "select"
        },
        animation: {
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
export const Neutral: Story = {
    args: {
        variant: 'neutral',
    },
};
export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};
export const Accent: Story = {
    args: {
        variant: 'accent',
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
    },
};
export const Warning: Story = {
    args: {
        variant: 'warning',
    },
};
export const Error: Story = {
    args: {
        variant: 'error',
    },
};
export const Xs: Story = {
    args: {
        size: 'xs',
    },
};
export const Md: Story = {
    args: {
        size: 'md',
    },
};
export const Sm: Story = {
    args: {
        size: 'sm',
    },
};
export const Lg: Story = {
    args: {
        size: 'lg',
    },
};
export const Xl: Story = {
    args: {
        size: 'xl',
    },
};
//animate
export const Ping: Story = {
    args: {
        animation: 'ping',
    },
};
export const Pulse: Story = {
    args: {
        animation: 'pulse',
    },
};
export const Bounce: Story = {
    args: {
        animation: 'bounce',
    },
};