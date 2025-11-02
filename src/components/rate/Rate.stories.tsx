import type {Meta, StoryObj} from '@storybook/react';
import {Rate} from "./Rate.tsx";

type Story = StoryObj<typeof Rate>;

const meta: Meta<typeof Rate> = {
    title: 'Components/Rate',
    component: Rate,
    tags: ['autodocs'],
    args: {
        size: "md",
        shape: "starBold",
        length:5
    },
    argTypes: {
        shape: {
            control: "select"
        },
        size: {
            control: "select"
        },
    },
}
export default meta;

export const Squircle: Story = {
    args: {
        shape: 'squircle',
    },
};
export const Heart: Story = {
    args: {
        shape: 'heart',
    },
};
export const Hexagon: Story = {
    args: {
        shape: 'hexagon',
    },
};
export const Hexagon2: Story = {
    args: {
        shape: 'hexagon2',
    },
};
export const Decagon: Story = {
    args: {
        shape: 'decagon',
    },
};
export const Pentagon: Story = {
    args: {
        shape: 'pentagon',
    },
};export const Star: Story = {
    args: {
        shape: 'star',
    },
};
export const StarBold: Story = {
    args: {
        shape: 'starBold',
    },
};
export const Circle: Story = {
    args: {
        shape: 'circle',
    },
};