import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { CirclePlus, User } from 'lucide-react';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
        icon: <CirclePlus color="white" />,
    },
};

export const Medium: Story = {
    args: {
        children: 'Button',
        icon: <User color="white" />,
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Button',
    },
};
