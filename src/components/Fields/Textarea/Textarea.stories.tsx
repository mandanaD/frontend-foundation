import type {Meta, StoryObj} from '@storybook/react';
import {Textarea} from "./Textarea";

type Story = StoryObj<typeof Textarea>;

const meta: Meta<typeof Textarea> = {
    title: 'Components/Fields/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    args: {
        label: "Textarea",
        name: "textarea",
        placeholder: "",
        disabled: false,
        required: true,
    },
    argTypes: {
        name: {
            control: false,
            table: {
                disable: true,
            },
        },
    }
}
export default meta;

export const Default: Story = {
    args: {
        placeholder: "placeholder",
    }
};
export const WithError: Story = {
    args: {
        error: "This field is required",
    }

};
export const Disabled: Story = {
    args: {
        disabled: true
    }
};