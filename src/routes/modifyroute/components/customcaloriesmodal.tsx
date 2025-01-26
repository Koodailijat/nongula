import { TextField } from '../../../../stories/components/TextField/TextField.tsx';
import { SegmentedControl } from '../../../../stories/components/SegmentedControl/SegmentedControl.tsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { Button } from '../../../../stories/components/Button/Button.tsx';
import { Modal } from '../../../../stories/components/Modal/Modal.tsx';
import { Heading } from '../../../../stories/components/Heading/Heading.tsx';
import './customcaloriesmodal.scss';
import { useNutritionLocalStorage } from '../../../hooks/usenutritionlocalstorage.tsx';
import { useParams } from 'react-router';
import { deepClone } from '../../../utils/deepclone.ts';

interface CustomCaloriesModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export function CustomCaloriesModal({
    isOpen,
    setOpen,
}: CustomCaloriesModalProps) {
    const [selected, setSelected] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    const [kcal, setKcal] = useState(0);
    const [weight, setWeight] = useState(0);
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useNutritionLocalStorage();
    const segments = ['Total', 'Kcal / g'];
    const datetime = useParams().date!;
    const onChange = (nextValue: boolean) => {
        setOpen(nextValue);
    };

    const onAdd = () => {
        const newCalories = deepClone(calories);
        const caloriesValue =
            totalCalories === 0 ? kcal * (weight / 100) : totalCalories;
        newCalories[datetime] = newCalories[datetime] || [];

        const newNutritionValue = {
            calories: caloriesValue,
            name: foodName,
            id: crypto.randomUUID(),
        };
        newCalories[datetime].push(newNutritionValue);

        setTotalCalories(0);
        setCalories(newCalories);
        setOpen(false);
    };

    return (
        <Modal
            ariaLabel="Custom calories modal"
            isOpen={isOpen}
            onChange={onChange}
            aria-label="Custom calories modal">
            <div className={'custom-modal'} aria-label="Custom calories modal">
                <Heading level={2} slot="title">
                    Custom calories
                </Heading>
                <div className="custom-modal__content">
                    <TextField
                        isRequired={true}
                        label="Food name"
                        placeholder="Search"
                        onChange={setFoodName}
                    />
                    <SegmentedControl
                        selected={selected}
                        setSelected={setSelected}
                        segments={segments}
                    />
                    {selected === 0 ? (
                        <TextField
                            label={'Total calories'}
                            placeholder={'Input calories'}
                            onChange={(value) =>
                                setTotalCalories(Number(value))
                            }
                        />
                    ) : (
                        <>
                            <TextField
                                label="Calories (Kcal / 100g)"
                                placeholder="Calories (Kcal / 100g)"
                                onChange={(value) => setKcal(Number(value))}
                            />
                            <TextField
                                label="Weight (g)"
                                placeholder="Weight (g)"
                                onChange={(value) => setWeight(Number(value))}
                            />
                        </>
                    )}
                </div>
                <div className="custom-modal__actions">
                    <Button
                        onPress={onAdd}
                        icon={<PlusIcon color="white" size="16" />}>
                        Add
                    </Button>
                    <Button variant="danger" onPress={() => setOpen(false)}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
