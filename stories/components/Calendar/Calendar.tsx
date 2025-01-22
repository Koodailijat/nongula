import './calendar.scss';
import {
    Button as RAButton,
    Calendar as RACalendar,
    CalendarCell as RACalendarCell,
    CalendarGrid as RACalendarGrid,
    Heading as RAHeading,
} from 'react-aria-components';

import {CalendarDate} from "@internationalized/date";
import { CSSProperties } from 'react';


interface Nutrition {
    calories: number;
}

interface Calories {
    [key: number]: {
        [key: number]: {
            [key: number]: Nutrition;
        };
    };
}

interface CalendarProps {
    data: Calories
    target_calories: number;
}

function getColor(value: number){
    return value < 0.3 ? `hsl(${((1 - value) * 120).toString(10)},100%,50%)` : `hsl(${((1.6 - value) * 120).toString(10)},100%,50%)` ;
}

function getStyle(date: CalendarDate, data: Calories, target_calories: number): CSSProperties {
    if (data?.[date.year]?.[date.month]?.[date.day]?.calories) {
        return {
            background: getColor(data[date.year][date.month][date.day].calories / target_calories)
        }
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
                {(date) => <RACalendarCell style={getStyle(date, data, target_calories)} date={date} />}
            </RACalendarGrid>
        </RACalendar>
    );
}
