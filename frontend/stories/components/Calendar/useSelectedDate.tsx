import { useMemo } from 'react';
import { CalendarState } from 'react-stately';
import { getLocalTimeZone } from '@internationalized/date';

export function useSelectedDate(state: CalendarState) {
    return useMemo(
        () =>
            state?.value ? state?.value.toDate(getLocalTimeZone()) : new Date(),
        [state]
    );
}
