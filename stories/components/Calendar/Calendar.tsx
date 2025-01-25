import './calendar.scss';
import {
    Button as RAButton,
    Calendar as RACalendar,
    CalendarCell as RACalendarCell,
    CalendarGrid as RACalendarGrid,
    Heading as RAHeading,
    CalendarStateContext,
} from 'react-aria-components';
import { CalendarDate } from '@internationalized/date';
import {
    CSSProperties,
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
} from 'react';
import { format, isEqual } from 'date-fns';

interface Nutrition {
    calories: number;
    name: string;
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
    target_calories: number,
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
                ) / target_calories
            ),
            outline: isSelectedDate ? '4px solid black' : 'none',
        };
    }
    return { outline: isSelectedDate ? '4px solid black' : 'none' };
}

interface CalendarValueSelectionProps {
    selectionChangeCb: (selectedDate: Date) => void;
}

function CalendarValueSelection({
    selectionChangeCb,
}: CalendarValueSelectionProps) {
    const state = useContext(CalendarStateContext)!;
    useEffect(() => {
        const value = state?.value;
        if (value) {
            selectionChangeCb(new Date(value.toString()));
        }
    }, [selectionChangeCb, state]);
    return null;
}

interface CalendarProps {
    data: Calories;
    target_calories: number;
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
}

export function Calendar({
    data,
    selectedDate,
    setSelectedDate,
    target_calories,
}: CalendarProps) {
    return (
        <RACalendar aria-label="Stats" firstDayOfWeek="mon">
            <header>
                <RAButton className="calendar-button" slot="previous">
                    ◀
                </RAButton>
                <RAHeading />
                <RAButton className="calendar-button" slot="next">
                    ▶
                </RAButton>
            </header>
            <RACalendarGrid>
                {(date) => (
                    <RACalendarCell
                        style={getStyle(
                            date,
                            data,
                            target_calories,
                            selectedDate
                        )}
                        date={date}
                    />
                )}
            </RACalendarGrid>
            <CalendarValueSelection selectionChangeCb={setSelectedDate} />
        </RACalendar>
    );
}
