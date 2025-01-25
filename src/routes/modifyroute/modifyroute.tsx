import { useState } from 'react';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CustomCaloriesModal } from './customcaloriesmodal.tsx';

export function ModifyRoute() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div>Modify calories here!</div>
            <Button onPress={() => setOpen(true)}>Custom calories</Button>
            <CustomCaloriesModal isOpen={isOpen} setOpen={setOpen} />
        </div>
    );
}
