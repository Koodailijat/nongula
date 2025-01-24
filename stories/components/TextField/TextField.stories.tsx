import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField.tsx';
import { SearchIcon, User } from 'lucide-react';

const meta = {
    title: 'TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
    },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium_and_Right: Story = {
    args: {
        children: 'Search',
        size: 'medium',
        iconSide: 'right',
        icon: <SearchIcon />,
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
        icon: <User />,
    },
};
