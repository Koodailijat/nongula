import { CalendarState, useCalendarState } from 'react-stately';
import { createCalendar } from '@internationalized/date';
import { useLocale } from 'react-aria-components';
import { Locale } from 'react-aria';

export function useNongulaCalendarState(): [CalendarState, Locale] {
    const locale = useLocale();
    const state = useCalendarState({
        locale: locale.locale,
        createCalendar,
    });
    return [state, locale];
}
