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
            '2025-01-01': [{ calories: 150, name: 'Chicken' }],
            '2025-01-02': [{ calories: 260, name: 'Salad' }],
            '2025-01-03': [{ calories: 340, name: 'Burger' }],
            '2025-01-04': [{ calories: 450, name: 'Pizza' }],
            '2025-01-05': [{ calories: 560, name: 'Pasta' }],
            '2025-01-06': [{ calories: 600, name: 'Steak' }],
            '2025-01-07': [{ calories: 750, name: 'Sushi' }],
            '2025-01-08': [{ calories: 850, name: 'Tacos' }],
            '2025-01-09': [{ calories: 950, name: 'Burritos' }],
            '2025-01-10': [{ calories: 1150, name: 'Curry' }],
            '2025-01-11': [{ calories: 1250, name: 'Ramen' }],
            '2025-01-12': [{ calories: 1300, name: 'Lasagna' }],
            '2025-01-13': [{ calories: 1400, name: 'Fried Chicken' }],
            '2025-01-14': [{ calories: 1500, name: 'Fish and Chips' }],
            '2025-01-15': [{ calories: 1650, name: 'BBQ' }],
            '2025-01-16': [{ calories: 1750, name: 'Spaghetti' }],
            '2025-01-17': [{ calories: 1800, name: 'Hot Dogs' }],
            '2025-01-18': [{ calories: 1950, name: 'Cheeseburger' }],
            '2025-01-19': [{ calories: 2050, name: 'Fajitas' }],
            '2025-01-20': [{ calories: 2150, name: 'Chicken Wings' }],
            '2025-01-21': [{ calories: 2200, name: 'Peking Duck' }],
            '2025-01-22': [{ calories: 2300, name: 'Shawarma' }],
            '2025-01-23': [{ calories: 2400, name: 'Chili' }],
            '2025-01-24': [{ calories: 2500, name: 'Pork Belly' }],
            '2025-01-25': [{ calories: 2600, name: 'Lobster' }],
            '2025-01-26': [{ calories: 2700, name: 'Bacon' }],
            '2025-01-27': [{ calories: 2850, name: 'Ribs' }],
            '2025-01-28': [{ calories: 2900, name: 'Steak and Fries' }],
            '2025-01-29': [{ calories: 3000, name: 'Paella' }],
            '2025-01-30': [{ calories: 3100, name: 'Casserole' }],
        },
        target_calories: 2150,
    },
};
