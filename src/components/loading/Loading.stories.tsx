import type {Meta, StoryObj} from '@storybook/react';
import {Loading} from "./Loading.tsx";

type Story = StoryObj<typeof Loading>;

const meta: Meta<typeof Loading> = {
    title: 'Components/Loading',
    component: Loading,
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