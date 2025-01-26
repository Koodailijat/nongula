import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
    title: 'Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: 'text' },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consetetur',
        size: 'medium',
    },
};

export const Sizes: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consetetur',
        size: 'small',
    },
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Text size="large">
                Large: Lorem ipsum dolor sit amet, consetetur
            </Text>

            <Text size="medium">
                Medium: Lorem ipsum dolor sit amet, consetetur
            </Text>
            <Text size="small">
                Small: Lorem ipsum dolor sit amet, consetetur
            </Text>
        </div>
    ),
};
