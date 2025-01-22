import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar.tsx';

const meta = {
    component: Calendar,
    title: "Calendar"
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
    data: {
        2025: {
            1: {
                "1": { "calories": 150 },
                "2": { "calories": 260 },
                "3": { "calories": 340 },
                "4": { "calories": 450 },
                "5": { "calories": 560 },
                "6": { "calories": 600 },
                "7": { "calories": 750 },
                "8": { "calories": 850 },
                "9": { "calories": 950 },
                "10": { "calories": 1150 },
                "11": { "calories": 1250 },
                "12": { "calories": 1300 },
                "13": { "calories": 1400 },
                "14": { "calories": 1500 },
                "15": { "calories": 1650 },
                "16": { "calories": 1750 },
                "17": { "calories": 1800 },
                "18": { "calories": 1950 },
                "19": { "calories": 2050 },
                "20": { "calories": 2150 },
                "21": { "calories": 2200 },
                "22": { "calories": 2300 },
                "23": { "calories": 2400 },
                "24": { "calories": 2500 },
                "25": { "calories": 2600 },
                "26": { "calories": 2700 },
                "27": { "calories": 2850 },
                "28": { "calories": 2900 },
                "29": { "calories": 3000 },
                "30": { "calories": 3100 },
            }
        }
    }
        ,
        target_calories: 2150
    }};
