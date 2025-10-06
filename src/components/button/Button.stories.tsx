import type {Meta, StoryObj} from '@storybook/react';
import {Button} from "./Button.tsx";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    args: {
        children: "Button",
        size: "md",
        disabled: false,
        isLoading: false,
        appearance: "solid",
        shape: "regular",
        variant: "primary",
        startIcon: "",
        endIcon: "",
    },
    argTypes: {
        children: {
            control: { type: 'text' },
            description: 'The text content displayed inside the button',
            defaultValue: 'Button',
        },
        variant: {
            control: { type: 'select' },
            description: 'The visual theme/color of the button that indicates its purpose',
            defaultValue: 'primary',
        },
        appearance: {
            control: { type: 'select' },
            description: 'The visual style treatment of the button (fill, border, etc.)',
            defaultValue: 'solid',
        },
        size: {
            control: { type: 'select' },
            description: 'The size of the button affecting padding, font size, and height',
            defaultValue: 'md',
        },
        shape: {
            control: { type: 'select' },
            description: 'The form factor of the button (width, aspect ratio, layout)',
            defaultValue: 'standard',
        },
        startIcon: {
            control: { type: 'text' },
            description: 'SVG markup for an icon displayed before the button text',
        },
        endIcon: {
            control: { type: 'text' },
            description: 'SVG markup for an icon displayed after the button text',
        },
        isLoading: {
            control: { type: 'boolean' },
            description: 'Shows loading spinner and disables the button when true',
            defaultValue: false,
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disables the button preventing user interaction',
            defaultValue: false,
        },
    }
};

export default meta;

export const Primary: Story = {
    args: {
        variant: 'primary',

    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
    },
};

export const Soft: Story = {
    render: (args) => (
        <div className="flex gap-2 flex-wrap">
            <Button {...args} variant="primary" appearance="soft">Primary Soft</Button>
            <Button {...args} variant="secondary" appearance="soft">Secondary Soft</Button>
            <Button {...args} variant="destructive" appearance="soft">Destructive Soft</Button>
            <Button {...args} variant="ghost" appearance="soft">Ghost Soft</Button>
        </div>
    )
};

export const Outline: Story = {
    render: (args) => (
        <div className="flex gap-2 flex-wrap">
            <Button {...args} variant="primary" appearance="outline">Primary Outline</Button>
            <Button {...args} variant="secondary" appearance="outline">Secondary Outline</Button>
            <Button {...args} variant="destructive" appearance="outline">Destructive Outline</Button>
            <Button {...args} variant="ghost" appearance="outline">Ghost Outline</Button>
        </div>
    )
};

export const Dashed: Story = {
    render: (args) => (
        <div className="flex gap-2 flex-wrap">
            <Button {...args} variant="primary" appearance="dashed">Primary dashed</Button>
            <Button {...args} variant="secondary" appearance="dashed">Secondary dashed</Button>
            <Button {...args} variant="destructive" appearance="dashed">Destructive dashed</Button>
            <Button {...args} variant="ghost" appearance="dashed">Ghost dashed</Button>
        </div>
    ),
    argTypes: {
        variant: {
            control: 'select',
        },
    }
};

export const WideButton: Story = {
    args: {
        shape: 'wide',
    },
};

export const BlockButton: Story = {
    args: {
        shape: 'block',
    },
};

export const CircleButton: Story = {
    args: {
        children: "",
        shape: 'circle',
        startIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-alert-icon lucide-badge-alert"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>'
    },
};

export const SquareButton: Story = {
    args: {
        children: "",
        shape: 'square',
        startIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-alert-icon lucide-badge-alert"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>'
    },
};
