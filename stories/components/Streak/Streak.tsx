import React, { useEffect, useState } from 'react';
import { Badge } from '../Badge/Badge.tsx';
import { useTargetCaloriesLocalStorage } from '../../../src/hooks/usetargetcalorieslocalstorage.tsx';
import { NutritionData, Item } from '../../../src/types/nutrition.ts';

export const Streak: React.FC = () => {
    const [streakCount, setStreakCount] = useState<number | null>(null);

    const [targetCalories] = useTargetCaloriesLocalStorage();

    useEffect(() => {
        const calculateStreak = () => {
            const nutritionData = JSON.parse(
                localStorage.getItem('nutrition') || '{}'
            ) as NutritionData;

            const sortedDateKeys = Object.keys(nutritionData).sort(
                (newerDate, olderDate) =>
                    new Date(olderDate).getTime() -
                    new Date(newerDate).getTime()
            );

            let consecutiveStreak = 0;

            for (const dateKey of sortedDateKeys) {
                const dailyItems = nutritionData[dateKey];
                const totalDailyCalories = dailyItems.reduce(
                    (calorieSum, item: Item) => calorieSum + item.calories,
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

    return (
        <div>
            {streakCount !== null && streakCount >= 3 && (
                <Badge>{streakCount}🔥</Badge>
            )}
        </div>
    );
};
