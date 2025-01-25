import './calendar.scss';
import {
    Button as RAButton,
    Calendar as RACalendar,
    CalendarCell as RACalendarCell,
    CalendarGrid as RACalendarGrid,
    Heading as RAHeading,
} from 'react-aria-components';

import { CalendarDate } from '@internationalized/date';
import { CSSProperties } from 'react';

interface Nutrition {
    calories: number;
}

export interface Calories {
    [key: string]: Nutrition;
}

interface CalendarProps {
    data: Calories;
    target_calories: number;
}

function getColor(value: number) {
    if (value < 0.2) {
        return '#8EFFC1';
    } else if (value < 0.4) {
        return '#1DBC60';
    } else if (value < 0.6) {
        return '#0DAC50';
    } else if (value < 0.8) {
        return '#009C41';
    } else if (value < 0.9) {
        return '#007A2A';
    } else if (value < 1.1) {
        return '#D4D23A';
    } else if (value < 1.3) {
        return '#D84F3A';
    }
    return '#E02323';
}

function getStyle(
    date: CalendarDate,
    data: Calories,
    target_calories: number
): CSSProperties {
    const isoDate = `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`;

    if (data?.[isoDate]?.calories) {
        return {
            background: getColor(data[isoDate].calories / target_calories),
        };
    }
    return {};
}

export function Calendar({ data, target_calories }: CalendarProps) {
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
                        style={getStyle(date, data, target_calories)}
                        date={date}
                    />
                )}
            </RACalendarGrid>
        </RACalendar>
    );
}
