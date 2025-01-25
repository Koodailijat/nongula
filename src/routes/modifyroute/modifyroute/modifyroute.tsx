import { useState } from 'react';
import { Button } from '../../../../stories/components/Button/Button.tsx';
import { CustomCaloriesModal } from '../customcaloriesmodal/customcaloriesmodal.tsx';
import { PlusIcon } from 'lucide-react';
import './modifyroute.scss';

export function ModifyRoute() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="modify-route">
            <div className="modify-route__content">
                <Button
                    onPress={() => setOpen(true)}
                    size="large"
                    icon={<PlusIcon />}>
                    Add custom calories
                </Button>
                <CustomCaloriesModal isOpen={isOpen} setOpen={setOpen} />
            </div>
        </div>
    );
}
