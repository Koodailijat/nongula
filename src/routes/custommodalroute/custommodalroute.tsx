import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { SegmentedControl } from '../../../stories/components/SegmentedControl/SegmentedControl.tsx';
import { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import { Button } from '../../../stories/components/Button/Button.tsx';

export function CustomModalRoute() {
    const [selected, setSelected] = useState(0);
    const segments = ['Total', 'Kcal/g'];
    return (
        <div className="custom-modal">
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
                <TextField label={'Total calories'} placeholder={'Search'} />
                <Button
                    style={{ width: 'inherit' }}
                    children={'Add calories'}
                    icon={<CirclePlus color="white" />}
                />
            </div>
        </div>
    );
}
