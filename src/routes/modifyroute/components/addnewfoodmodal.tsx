import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '../../../../stories/components/Button/Button.tsx';
import { Modal } from '../../../../stories/components/Modal/Modal.tsx';
import { Heading } from '../../../../stories/components/Heading/Heading.tsx';
import './addnewfoodmodal.scss';
import { TextField } from '../../../../stories/components/TextField/TextField.tsx';
import { useNutritionLocalStorage } from '../../../hooks/usenutritionlocalstorage.tsx';
import { PlusIcon } from 'lucide-react';
import { useParams } from 'react-router';
import { deepClone } from '../../../utils/deepclone.ts';

interface AddNewFoodModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    itemId: number;
    name: string;
}

export function AddNewFoodModal({
    isOpen,
    setOpen,
    name,
    itemId,
}: AddNewFoodModalProps) {
    const onChange = (nextValue: boolean) => {
        setOpen(nextValue);
    };

    console.log('Testi');
    console.log(name, itemId);

    const kalories: number = Math.round(itemId);
    const [weight, setWeight] = useState(0);
    const datetime = useParams().date!;
    const [totalCalories, setTotalCalories] = useState(0);
    const [calories, setCalories] = useNutritionLocalStorage();
    const [kcal, setKcal] = useState(0);
    const [foodName, setFoodName] = useState(name);

    const onAdd = () => {
        const newCalories = deepClone(calories);

        if (totalCalories === 0) {
            if (newCalories[datetime]) {
                newCalories[datetime].push({
                    calories: kcal * (weight / 100),
                    name: foodName,
                });
            } else {
                newCalories[datetime] = [
                    { calories: kcal * (weight / 100), name: foodName },
                ];
            }
        } else {
            if (newCalories[datetime]) {
                newCalories[datetime].push({
                    calories: totalCalories,
                    name: foodName,
                });
            } else {
                newCalories[datetime] = [
                    { calories: totalCalories, name: foodName },
                ];
            }
            setTotalCalories(0);
        }

        setCalories(newCalories);
        setOpen(false);
    };

    return (
        <Modal isOpen={isOpen} onChange={onChange}>
            <div className={'custom-modal'}>
                <Heading level={2}>Läski calories</Heading>
                {itemId}
                <TextField
                    isRequired={true}
                    label="Food name"
                    placeholder="Food name"
                    onChange={setFoodName}
                    value={foodName}
                />
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
