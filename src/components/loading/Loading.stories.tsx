import type {Meta, StoryObj} from '@storybook/react';
import {Loading} from "./Loading.tsx";

type Story = StoryObj<typeof Loading>;

const meta: Meta<typeof Loading> = {
    title: 'Components/Loading',
    component: Loading,
    tags: ['autodocs'],
    args: {
        variant:"primary",
        size: "md",
        shape: "spinner",
    },
    argTypes: {
        shape: {
            control: "select"
        },
        size: {
            control: "select"
        },
        variant: {
            control: "select"
        },
    },
}
export default meta;

export const Spinner: Story = {
    args: {
        shape: 'spinner',
    },
};
export const Dots: Story = {
    args: {
        shape: 'dots',
    },
};
export const Ring: Story = {
    args: {
        shape: 'ring',
    },
};
export const Ball: Story = {
    args: {
        shape: 'ball',
    },
};
export const Bars: Story = {
    args: {
        shape: 'bars',
    },
};
export const Infinity: Story = {
    args: {
        shape: 'infinity',
    },
};

//sizes

export const AllSizes: Story = {
    render: (args) => (
        <div className="flex gap-2 flex-wrap">
            <Loading {...args} size="xs"/>
            <Loading {...args} size="sm"/>
            <Loading {...args} size="md"/>
            <Loading {...args} size="lg"/>
            <Loading {...args} size="xl"/>
        </div>
    )
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