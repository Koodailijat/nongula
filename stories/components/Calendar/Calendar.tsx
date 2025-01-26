import './calendar.scss';
import {
    Button as RAButton,
    Heading as RAHeading,
    CalendarProps as RACalendarProps,
    CalendarCellProps as RACalendarCellProps,
} from 'react-aria-components';
import { useCalendar, useCalendarCell, useCalendarGrid } from 'react-aria';
import { CalendarDate, getWeeksInMonth } from '@internationalized/date';
import { CSSProperties, useRef } from 'react';
import { format, isEqual } from 'date-fns';
import { CalendarState } from 'react-stately';
import { DateValue } from '@react-types/datepicker';
import { useSelectedDate } from './useSelectedDate.tsx';

interface Nutrition {
    calories: number;
    name: string;
    id: string;
}

export interface Calories {
    [key: string]: Nutrition[];
}

function getColor(value: number) {
    if (value < 0.2) {
        return '#00c65a';
    } else if (value < 0.4) {
        return '#19a052';
    } else if (value < 0.6) {
        return '#0b9244';
    } else if (value < 0.8) {
        return '#008537';
    } else if (value < 0.9) {
        return '#006824';
    } else if (value < 1.1) {
        return '#bcba29';
    } else if (value < 1.3) {
        return '#c23b26';
    }
    return '#941515';
}

function getStyle(
    date: CalendarDate,
    data: Calories,
    targetCalories: number,
    selectedDate: Date
): CSSProperties {
    const isoDate = `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`;
    const isSelectedDate = isEqual(
        date.toString(),
        format(selectedDate, 'yyyy-MM-dd')
    );

    if (data?.[isoDate]?.length) {
        return {
            background: getColor(
                data[isoDate].reduce(
                    (previousValue, currentValue) =>
                        previousValue + currentValue.calories,
                    0
                ) / targetCalories
            ),
            outline: isSelectedDate ? '4px solid black' : 'none',
        };
    }
    return { outline: isSelectedDate ? '4px solid black' : 'none' };
}

interface CalendarCellProps extends RACalendarCellProps {
    state: CalendarState;
}

function CalendarCell({ state, date, style }: CalendarCellProps) {
    const ref = useRef(null);
    const {
        cellProps,
        buttonProps,
        isSelected,
        isOutsideVisibleRange,
        isDisabled,
        isUnavailable,
        formattedDate,
    } = useCalendarCell({ date }, state, ref);

    return (
        <td {...cellProps}>
            <div
                {...buttonProps}
                ref={ref}
                hidden={isOutsideVisibleRange}
                className={`calendar-cell ${isSelected ? 'selected' : ''} ${
                    isDisabled ? 'disabled' : ''
                } ${isUnavailable ? 'unavailable' : ''}`}
                style={{ ...style }}>
                {formattedDate}
            </div>
        </td>
    );
}

interface CalendarProps extends RACalendarProps<DateValue> {
    data: Calories;
    targetCalories: number;
    state: CalendarState;
    locale: string;
}

export function Calendar({
    data,
    state,
    locale,
    targetCalories,
    ...props
}: CalendarProps) {
    const selectedDate = useSelectedDate(state);
    // CALENDAR
    const { calendarProps, prevButtonProps, nextButtonProps, title } =
        useCalendar(props, state);

    // GRID
    const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

    const weeksInMonth = getWeeksInMonth(
        state.visibleRange.start,
        locale,
        props.firstDayOfWeek
    );

    return (
        <div {...calendarProps} className="calendar">
            <header className="calendar-header">
                <RAButton {...prevButtonProps} className="calendar-button">
                    ◀
                </RAButton>
                <RAHeading className="calendar-heading">{title}</RAHeading>
                <RAButton {...nextButtonProps} className="calendar-button">
                    ▶
                </RAButton>
            </header>
            <table {...gridProps}>
                <thead {...headerProps}>
                    <tr>
                        {weekDays.map((day, index) => (
                            <th key={index}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
                        <tr key={weekIndex}>
                            {state
                                .getDatesInWeek(weekIndex)
                                .map((date, i) =>
                                    date ? (
                                        <CalendarCell
                                            key={i}
                                            state={state}
                                            date={date}
                                            style={getStyle(
                                                date,
                                                data,
                                                targetCalories,
                                                selectedDate
                                            )}
                                        />
                                    ) : (
                                        <td key={i} />
                                    )
                                )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
