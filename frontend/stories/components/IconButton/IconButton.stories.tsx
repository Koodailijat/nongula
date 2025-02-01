import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Pen, Trash } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
    title: 'IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
            <IconButton icon={<Trash color="red" />} />
            <IconButton icon={<Pen color="black" />} />
        </div>
    ),
};
