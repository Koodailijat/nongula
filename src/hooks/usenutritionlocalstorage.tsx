import { useLocalStorage } from 'usehooks-ts';
import { Calories } from '../../stories/components/Calendar/Calendar.tsx';

export function useNutritionLocalStorage() {
    return useLocalStorage<Calories>('nutrition', {});
}
