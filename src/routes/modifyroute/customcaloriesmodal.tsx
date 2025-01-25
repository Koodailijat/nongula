import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { SegmentedControl } from '../../../stories/components/SegmentedControl/SegmentedControl.tsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { CirclePlus } from 'lucide-react';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { Modal } from '../../../stories/components/Modal/Modal.tsx';

interface CustomCaloriesModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export function CustomCaloriesModal({
    isOpen,
    setOpen,
}: CustomCaloriesModalProps) {
    const [selected, setSelected] = useState(0);
    const segments = ['Total', 'Kcal/g'];

    const onChange = (nextValue: boolean) => {
        setOpen(nextValue);
    };

    return (
        <Modal isOpen={isOpen} onChange={onChange}>
            <div className={'custom-modal-wrapper'}>
                <TextField
                    label={'*Food name'}
                    placeholder={'Food name'}
                    children={'Search'}
                />
                <SegmentedControl
                    selected={selected}
                    setSelected={setSelected}
                    segments={segments}
                />
                {selected === 0 ? (
                    <TextField
                        label={'Total calories'}
                        placeholder={'Search'}
                    />
                ) : (
                    <>
                        <TextField label={'Kcal/100g'} placeholder={'Search'} />
                        <TextField label={'Weight'} placeholder={'Search'} />
                    </>
                )}
                <Button
                    style={{ width: 'inherit' }}
                    children={'Add calories'}
                    icon={<CirclePlus color="white" />}
                />
                <Button onPress={() => setOpen(false)}>Cancel</Button>
            </div>
        </Modal>
    );
}
