import type {Meta, StoryObj} from '@storybook/react';
import {Tooltip} from "./Tooltip.tsx";
import {Button} from "../button";

type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: "primary",
        position: "top",
        dataTip:"Tooltip",
        children:(
            <Button>
                Hover Me!
            </Button>
        )
    },
    argTypes: {
        variant: {
            control: "select"
        },
        position: {
            control: "select"
        },
    },
}
export default meta;

export const Top: Story = {
    args: {
        position: 'top',
    },
};
export const Bottom: Story = {
    args: {
        position: 'bottom',
    },
};
export const Left: Story = {
    args: {
        position: 'left',
    },
};
export const Right: Story = {
    args: {
        position: 'right',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        dataTip: 'Primary Badge',
    },
};
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        dataTip: 'Secondary Badge',
    },
};
export const Info: Story = {
    args: {
        variant: 'info',
        dataTip: 'Info Badge',
    },
};
export const Success: Story = {
    args: {
        variant: 'success',
        dataTip: 'Success Badge',
    }
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        dataTip: 'Warning Badge',
    }
};

export const Error: Story = {
    args: {
        variant: 'error',
        dataTip: 'Error Badge',
    }
};