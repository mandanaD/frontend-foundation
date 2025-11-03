import type {StoryObj, Meta} from "@storybook/react";
import {RangeField} from "./RangeField.tsx";

type Story = StoryObj<typeof RangeField>

const meta: Meta<typeof RangeField> = {
    title: "Components/Fields/RangeField",
    component: RangeField,
    tags: ['autodocs'],
    args: {
        label: "Label",
        disabled: false,
        required: true,
        variant: "primary",
        sizeInput: "md"
    },
    argTypes: {
        variant: {
            control: "select"
        },
        sizeInput: {
            control: "select"
        },
    }

}
export default meta;

export const Primary: Story = {
    args: {},
};

export const Secondary: Story = {
    args: {
        variant: "secondary"
    },
};

export const Accent: Story = {
    args: {
        variant: "accent"
    },
};
export const Success: Story = {
    args: {
        variant: "success"
    },
};
export const Warning: Story = {
    args: {
        variant: "warning"
    },
};

export const Info: Story = {
    args: {
        variant: "info"
    },
};

export const Error: Story = {
    args: {
        variant: "error"
    },
};

export const WithError: Story = {
    args: {
        error: "This field is required."
    },
};

export const Disable: Story = {
    args: {
        disabled: true
    },
};