import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Plus } from 'lucide-react';

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

export const Default: Story = { args: { children: 'Button' } };

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
        </div>
    ),
};

export const Icon: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Button icon={<Plus />}>Icon</Button>
        </div>
    ),
};
