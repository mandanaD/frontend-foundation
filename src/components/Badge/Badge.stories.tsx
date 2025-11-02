import type {Meta, StoryObj} from '@storybook/react';
import {Badge} from "./Badge.tsx";


type Story = StoryObj<typeof Badge>


const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    args: {
        variant:"primary",
        children:"Badge"
    },
    argTypes: {
        variant: {
            control: "select"
        }
    },
}
export default meta;


export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Badge',

    },
};
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Badge',
    },
};
export const Info: Story = {
    args: {
        variant: 'info',
        children: 'Info Badge',
    },
};
export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success Badge',
    }
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Warning Badge',
    }
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'Error Badge',
    }
};