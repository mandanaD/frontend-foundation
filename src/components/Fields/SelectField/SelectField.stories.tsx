import type {Meta, StoryObj} from "@storybook/react";
import {SelectField} from "./SelectField";

type Story = StoryObj<typeof SelectField>

const meta: Meta<typeof SelectField> = {
    title: 'Components/Form/SelectField',
    component: SelectField,
    tags: ['autodocs'],
    args: {
        name: "select",
        label: "select",
        options: [{
            value: "option 1",
            label: "option 1",
        }],
        loadingMessage : "loading...",
        errorMessage : "Something Went Wrong!",
        state: "success",
        placeholder:"Choose Option",
        required: true,
    },
    argTypes: {
        name: {
            control: false,
            table: {
                disable: true,
            },
        },
        state:{
            control: "select"
        }
    }
}
export default meta;

export const Default: Story = {};