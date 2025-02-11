import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { CircularProgressBar } from '../../../stories/components/CircularProgressBar/CircularProgressBar.tsx';
import { Calendar } from '../../../stories/components/Calendar/Calendar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { format, formatISO } from 'date-fns';
import { useNutritionLocalStorage } from '../../hooks/usenutritionlocalstorage.tsx';
import { useTargetCaloriesLocalStorage } from '../../hooks/usetargetcalorieslocalstorage.tsx';
import { useMemo, useState } from 'react';
import { useCurrentDayCalories } from '../../hooks/usecurrentdaycalories.tsx';
import { useNongulaCalendarState } from '../../../stories/components/Calendar/useNongulaCalendarState.tsx';
import { useSelectedDate } from '../../../stories/components/Calendar/useSelectedDate.tsx';
import { getCellStyle } from './getcellstyle.ts';
import { Streak } from './components/streak.tsx';
import { ChangeTargetCaloriesModal } from './components/changetargetcaloriesmodal.tsx';

export function DashboardRoute() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [state, locale] = useNongulaCalendarState();
    const selectedDate = useSelectedDate(state);
    const ISODate = useMemo(
        () => formatISO(selectedDate.toString(), { representation: 'date' }),
        [selectedDate]
    );
    const [nutrition] = useNutritionLocalStorage();
    const [targetCalories] = useTargetCaloriesLocalStorage();
    const currentDayCalories = useCurrentDayCalories(ISODate, nutrition);

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <Heading level={1}>{format(selectedDate, 'LLLL do')}</Heading>
                <Streak></Streak>
            </div>
            <div className="dashboard__content">
                <CircularProgressBar
                    value={currentDayCalories}
                    heading="Calories"
                    target={targetCalories}
                />
                <Calendar
                    data={nutrition}
                    targetCalories={targetCalories}
                    state={state}
                    locale={locale.locale}
                    firstDayOfWeek="mon"
                    cellStyleFn={getCellStyle}
                />
                <div className="dashboard__button-container">
                    <Button
                        onPress={() => navigate(`/modify/${ISODate}`)}
                        icon={<PlusIcon size="16" />}>
                        Add calories
                    </Button>
                    <Button variant="secondary" onPress={() => setIsOpen(true)}>
                        Change target
                    </Button>
                </div>
            </div>
            <ChangeTargetCaloriesModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}
