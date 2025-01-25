import { Calories } from '../../stories/components/Calendar/Calendar.tsx';
import { useMemo } from 'react';

export function useCurrentDayCalories(ISODate: string, nutrition: Calories) {
    return useMemo(
        () =>
            nutrition?.[ISODate]?.length
                ? nutrition[ISODate].reduce(
                      (totalCalories, food) => totalCalories + food.calories,
                      0
                  )
                : 0,
        [ISODate, nutrition]
    );
}
