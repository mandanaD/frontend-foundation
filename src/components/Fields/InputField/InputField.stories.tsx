import type {StoryObj,Meta} from "@storybook/react";
import {InputField} from "./InputField.tsx";

type Story=StoryObj<typeof InputField>

const meta: Meta<typeof InputField> = {
    title: "Components/Fields/InputField",
    component:InputField,
    tags: ['autodocs'],
    args:{
        type:"text",
        label:"Label",
        placeholder: "Placeholder",
        accept:"all",
        disabled:false,
        required:true,
    },
    argTypes:{
        type:{
            control:"select"
        },
        accept:{
            control:"select"
        },
    }

}
export default meta;

export const Default: Story = {
    args: {

    },
};

export const WithError: Story = {
    args: {
        error:"This field is required."
    },
};

export const Disable: Story = {
    args: {
        disabled:true
    },
};