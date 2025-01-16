import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading.tsx';

const meta = {
    title: 'Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
    args: {
        children: 'Lorem Ipsum',
        level: 1,
    },
};

export const Level2: Story = {
    args: {
        children: 'Lorem Ipsum',
        level: 2,
    },
};

export const Level3: Story = {
    args: {
        children: 'Lorem Ipsum',
        level: 3,
    },
};

export const Level4: Story = {
    args: {
        children: 'Lorem Ipsum',
        level: 4,
    },
};

export const Level5: Story = {
    args: {
        children: 'Lorem Ipsum',
        level: 5,
    },
};

export const Level6: Story = {
    args: {
        children: 'Lorem Ipsum',
        level: 6,
    },
};
