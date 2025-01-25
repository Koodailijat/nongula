import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { Badge } from '../../../stories/components/Badge/Badge.tsx';
import './dashboardroute.scss';
import { Text } from '../../../stories/components/Text/Text.tsx';
import { CircularProgressBar } from '../../../stories/components/CircularProgressBar/CircularProgressBar.tsx';
import { Calendar } from '../../../stories/components/Calendar/Calendar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { PlusIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { format, formatISO } from 'date-fns';
import { useNutritionLocalStorage } from '../../hooks/usenutritionlocalstorage.tsx';

export function DashboardRoute() {
    const datetime = new Date();
    const dateString = formatISO(datetime, { representation: 'date' });
    const navigate = useNavigate();
    const [value] = useNutritionLocalStorage();

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <Heading level={1}>{format(datetime, 'LLLL do')}</Heading>
                <Badge>
                    <Text mode="secondary" size="large">
                        4 🔥
                    </Text>
                </Badge>
            </div>
            <div className="dashboard__content">
                <CircularProgressBar
                    value={1931}
                    heading="Calories"
                    target={2100}
                />
                <Calendar data={value} target_calories={2100} />
                <Button
                    size="large"
                    onPress={() => navigate(`/modify/${dateString}`)}
                    icon={<PlusIcon size="16" />}>
                    Add calories
                </Button>
            </div>
        </div>
    );
}
