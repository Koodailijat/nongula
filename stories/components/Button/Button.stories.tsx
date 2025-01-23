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
        label: 'Button',
        icon: <CirclePlus color="white" />,
    },
};

export const Medium: Story = {
    args: {
        label: 'Button',
        icon: <User color="white" />,
    },
};

export const Large_and_outlined: Story = {
    args: {
        size: 'large',
        label: 'Button',
        outline: true,
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
