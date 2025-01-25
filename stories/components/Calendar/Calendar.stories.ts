import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar.tsx';

const meta = {
    component: Calendar,
    title: 'Calendar',
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: {
            '2025-01-01': { calories: 150 },
            '2025-01-02': { calories: 260 },
            '2025-01-03': { calories: 340 },
            '2025-01-04': { calories: 450 },
            '2025-01-05': { calories: 560 },
            '2025-01-06': { calories: 600 },
            '2025-01-07': { calories: 750 },
            '2025-01-08': { calories: 850 },
            '2025-01-09': { calories: 950 },
            '2025-01-10': { calories: 1150 },
            '2025-01-11': { calories: 1250 },
            '2025-01-12': { calories: 1300 },
            '2025-01-13': { calories: 1400 },
            '2025-01-14': { calories: 1500 },
            '2025-01-15': { calories: 1650 },
            '2025-01-16': { calories: 1750 },
            '2025-01-17': { calories: 1800 },
            '2025-01-18': { calories: 1950 },
            '2025-01-19': { calories: 2050 },
            '2025-01-20': { calories: 2150 },
            '2025-01-21': { calories: 2200 },
            '2025-01-22': { calories: 2300 },
            '2025-01-23': { calories: 2400 },
            '2025-01-24': { calories: 2500 },
            '2025-01-25': { calories: 2600 },
            '2025-01-26': { calories: 2700 },
            '2025-01-27': { calories: 2850 },
            '2025-01-28': { calories: 2900 },
            '2025-01-29': { calories: 3000 },
            '2025-01-30': { calories: 3100 },
        },
        target_calories: 2150,
    },
};
