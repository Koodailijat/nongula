import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { Badge } from '../../../stories/components/Badge/Badge.tsx';
import './dashboardroute.scss';
import { Text } from '../../../stories/components/Text/Text.tsx';
import { CircularProgressBar } from '../../../stories/components/CircularProgressBar/CircularProgressBar.tsx';
import { Calendar } from '../../../stories/components/Calendar/Calendar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { PlusIcon } from 'lucide-react';
import { months } from '../../utils/months.ts';
import { useNavigate } from 'react-router';

export function DashboardRoute() {
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <Heading level={1}>
                    {months[month]} {date}.
                </Heading>
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
                <Calendar
                    data={{
                        2025: {
                            1: {
                                1: { calories: 150 },
                                2: { calories: 260 },
                                3: { calories: 340 },
                                4: { calories: 450 },
                                5: { calories: 560 },
                                6: { calories: 1999 },
                                7: { calories: 1583 },
                                8: { calories: 1800 },
                                9: { calories: 2100 },
                            },
                        },
                    }}
                    target_calories={2100}
                />
                <Button
                    size="large"
                    onPress={() => navigate('/modify')}
                    icon={<PlusIcon size="16" />}>
                    Add calories
                </Button>
            </div>
        </div>
    );
}
