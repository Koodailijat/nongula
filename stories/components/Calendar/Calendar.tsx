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
import { CalendarState } from 'react-stately';
import { DateValue } from '@react-types/datepicker';
import { useSelectedDate } from './useSelectedDate.tsx';

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

interface CalendarProps<TData> extends RACalendarProps<DateValue> {
    data: TData;
    targetCalories: number;
    state: CalendarState;
    locale: string;
    cellStyleFn: (
        date: CalendarDate,
        data: TData,
        targetCalories: number,
        selectedDate: Date
    ) => CSSProperties;
}

export function Calendar<TData>({
    data,
    state,
    locale,
    targetCalories,
    cellStyleFn,
    ...props
}: CalendarProps<TData>) {
    const selectedDate = useSelectedDate(state);
    const { calendarProps, prevButtonProps, nextButtonProps, title } =
        useCalendar(props, state);
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
                                            style={cellStyleFn(
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
