import type {Meta, StoryObj} from '@storybook/react';
import {Drawer} from "./Drawer.tsx";
import {Menu} from "lucide-react";

type Story = StoryObj<typeof Drawer>;

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    args: {
        position: "end",
        className: "",
        children: (
            <>
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </>
        ),
    },
    argTypes: {
        children: {
            defaultValue: (
                <>
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </>
            ),
        },
        position: {
            control: {type: 'select'},
            defaultValue: 'end',
        },
        className: {
            control: {type: 'text'},
        },
    }
};

export default meta;

export const End: Story = {
    args: {
        position: "end",
    },
};

export const Start: Story = {
    args: {
        position: "start",
    },
};

export const CustomActionBtn: Story = {
    args: {
        actionBtn: (
                <Menu
                    className={"size-6 cursor-pointer"}
                />
        ),
    },
};
