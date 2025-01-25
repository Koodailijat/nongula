import { TextField } from '../../../../stories/components/TextField/TextField.tsx';
import { SegmentedControl } from '../../../../stories/components/SegmentedControl/SegmentedControl.tsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { Button } from '../../../../stories/components/Button/Button.tsx';
import { Modal } from '../../../../stories/components/Modal/Modal.tsx';
import { Heading } from '../../../../stories/components/Heading/Heading.tsx';
import './customcaloriesmodal.scss';

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
            <div className={'custom-modal'}>
                <Heading level={2}>Custom calories</Heading>
                <div className="custom-modal__content">
                    <TextField
                        isRequired={true}
                        label="Food name"
                        placeholder="Search"
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
                        />
                    ) : (
                        <>
                            <TextField
                                label={'Kcal/100g'}
                                placeholder={'Kcal/100g'}
                            />
                            <TextField
                                label={'Weight'}
                                placeholder={'Weight'}
                            />
                        </>
                    )}
                </div>

                <div className="custom-modal__actions">
                    <Button icon={<PlusIcon color="white" />}>Add</Button>
                    <Button variant="danger" onPress={() => setOpen(false)}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
