import type { Meta, StoryObj } from '@storybook/react';
import { Textfield } from './Textfield';

const meta = {
    title: 'Textfield',
    component: Textfield,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
    },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium_and_Right: Story = {
    args: {
        children: 'Search',
        size: 'medium',
        icon_side: 'right',
    },
};

export const Medium_and_Left: Story = {
    args: {
        children: 'Search',
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        children: 'Search',
        size: 'large',
    },
};
