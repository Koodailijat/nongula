import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '../../../../stories/components/Button/Button.tsx';
import { Modal } from '../../../../stories/components/Modal/Modal.tsx';
import { Heading } from '../../../../stories/components/Heading/Heading.tsx';
import './addnewfoodmodal.scss';

interface AddNewFoodModalProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    itemId: number;
}

export function AddNewFoodModal({
    isOpen,
    setOpen,
    itemId,
}: AddNewFoodModalProps) {
    const onChange = (nextValue: boolean) => {
        setOpen(nextValue);
    };

    console.log('Testi');

    return (
        <Modal isOpen={isOpen} onChange={onChange}>
            <div className={'custom-modal'}>
                <Heading level={2}>Läski calories</Heading>
                {itemId}
                <Button variant="danger" onPress={() => setOpen(false)}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
}
