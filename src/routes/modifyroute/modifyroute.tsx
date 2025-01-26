import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { ProgressBar } from '../../../stories/components/ProgressBar/ProgressBar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CustomCaloriesModal } from './components/customcaloriesmodal.tsx';
import { Pen, PlusIcon, SearchIcon, Trash } from 'lucide-react';
import './modifyroute.scss';
import { useMemo, useState } from 'react';
import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { List } from '../../../stories/components/List/List.tsx';
import { ListItem } from '../../../stories/components/List/ListItem.tsx';
import { IconButton } from '../../../stories/components/IconButton/IconButton.tsx';
import { Text } from '../../../stories/components/Text/Text.tsx';
import { format } from 'date-fns';
import { useDateParamToDate } from '../../hooks/usedateparamtodate.tsx';
import { useNutritionLocalStorage } from '../../hooks/usenutritionlocalstorage.tsx';
import { useParams } from 'react-router';
import { useTargetCaloriesLocalStorage } from '../../hooks/usetargetcalorieslocalstorage.tsx';
import { deepClone } from '../../utils/deepclone.ts';

export function ModifyRoute() {
    const [isOpen, setOpen] = useState(false);
    const datetime = useDateParamToDate();
    const dateString = useParams().date!;
    const [nutrition, setNutrition] = useNutritionLocalStorage();

    const currentDayCalories = useMemo(() => {
        if (!nutrition[dateString]) {
            return 0;
        }
        return nutrition[dateString].reduce(
            (totalCalories, food) => totalCalories + food.calories,
            0
        );
    }, [dateString, nutrition]);
    const [targetCalories] = useTargetCaloriesLocalStorage();
    const onDelete = (id: string) => {
        const newNutrition = deepClone(nutrition);
        newNutrition[dateString] = newNutrition[dateString].filter(
            (food) => food.id !== id
        );
        setNutrition(newNutrition);
    };

    return (
        <div className="modify-route">
            <Heading level={1}>{format(datetime, 'LLLL do')}</Heading>
            <div className="modify-route__content">
                <div className="modify-route__progress-bar">
                    <ProgressBar
                        label={"Today's calories"}
                        value={(currentDayCalories / targetCalories) * 100}
                        valueText={'2000 kcal'}
                    />
                </div>
                <TextField
                    iconSide={'left'}
                    icon={<SearchIcon />}
                    placeholder={'Search'}
                />
                <List
                    className="modify-route__list"
                    items={nutrition[dateString]}>
                    {({ calories, name, id }) => {
                        if (!id) {
                            return null;
                        }
                        return (
                            <ListItem
                                className="modify-route__list-item"
                                key={id}
                                id={id}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}>
                                    <Text size={'large'}>{name}</Text>
                                    <Text size={'large'}>
                                        {calories} calories
                                    </Text>
                                </div>
                                <div className="modify-route__list-actions">
                                    <IconButton
                                        icon={<Pen strokeWidth={2} />}
                                    />
                                    <IconButton
                                        icon={
                                            <Trash
                                                strokeWidth={2}
                                                color="red"
                                            />
                                        }
                                        onPress={() => onDelete(id)}
                                    />
                                </div>
                            </ListItem>
                        );
                    }}
                </List>
                <Button
                    onPress={() => setOpen(true)}
                    size="large"
                    icon={<PlusIcon size="16" />}>
                    Add custom calories
                </Button>
                <CustomCaloriesModal isOpen={isOpen} setOpen={setOpen} />
            </div>
        </div>
    );
}
