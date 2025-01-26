import React, { useEffect, useState } from 'react';
import { Badge } from '../Badge/Badge.tsx';
import { useTargetCaloriesLocalStorage } from '../../../src/hooks/usetargetcalorieslocalstorage.tsx';

type CalorieData = {
    calories: number;
    name: string;
    id: string;
};

type StreakData = Record<string, CalorieData[]>;

export const Streak: React.FC = () => {
    const [streakCount, setStreakCount] = useState<number | null>(null);

    const [targetCalories] = useTargetCaloriesLocalStorage();

    useEffect(() => {
        const calculateStreak = () => {
            const nutritionData = JSON.parse(
                localStorage.getItem('nutrition') || '{}'
            ) as StreakData;
            const sortedDateKeys = Object.keys(nutritionData).sort(
                (dateA, dateB) =>
                    new Date(dateB).getTime() - new Date(dateA).getTime()
            );

            let consecutiveStreak = 0;

            for (const dateKey of sortedDateKeys) {
                const totalDailyCalories = nutritionData[dateKey].reduce(
                    (calorieSum, entry) => calorieSum + entry.calories,
                    0
                );
                if (
                    totalDailyCalories > targetCalories * 0.8 &&
                    totalDailyCalories < targetCalories * 1.1
                ) {
                    consecutiveStreak += 1;
                } else {
                    break;
                }
            }

            setStreakCount(consecutiveStreak);
        };

        calculateStreak();
    }, [targetCalories]);

    return <div>{streakCount !== null && <Badge>{streakCount}🔥</Badge>}</div>;
};
