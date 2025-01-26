import React, { useEffect, useState } from 'react';
import { Badge } from '../Badge/Badge.tsx';

type CalorieData = {
    calories: number;
    name: string;
    id: string;
};

type StreakData = Record<string, CalorieData[]>;

export const Streak: React.FC = () => {
    const [streak, setStreak] = useState<number | null>(null);

    useEffect(() => {
        const calculateStreak = () => {
            const data = JSON.parse(
                localStorage.getItem('nutrition') || '{}'
            ) as StreakData;
            const sortedDates = Object.keys(data).sort(
                (a, b) => new Date(b).getTime() - new Date(a).getTime()
            );

            let streakCount = 0;

            for (const date of sortedDates) {
                const dailyCalories = data[date].reduce(
                    (sum, entry) => sum + entry.calories,
                    0
                );
                console.log(dailyCalories);
                if (dailyCalories > 2000 * 0.8 && dailyCalories < 2000 * 1.1) {
                    streakCount += 1;
                } else {
                    break;
                }
            }

            setStreak(streakCount);
        };

        calculateStreak();
    }, []);

    return <div>{streak !== null && <Badge>{streak}🔥</Badge>}</div>;
};
