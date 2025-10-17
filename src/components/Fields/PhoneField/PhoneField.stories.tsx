import type {Meta, StoryObj} from '@storybook/react';
import {PhoneField} from "./PhoneField.tsx";

type Story = StoryObj<typeof PhoneField>;

const meta: Meta<typeof PhoneField> = {
    title: 'Components/Fields/PhoneField',
    component: PhoneField,
    tags: ['autodocs'],
    args: {
        label: "Phone",
        name: "phone",
        placeholder: "09XXXXXXXXX",
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
        accept: {
            control: false,
            table: {
                disable: true,
            },
        },
        type: {
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
        placeholder: "09000000000",
    },
};

export const WithError: Story = {
    args: {
        error: "This field is required",
    }
};
export const Disable: Story = {
    args: {
        disabled: true,
    }
};