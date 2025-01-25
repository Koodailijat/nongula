import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { ProgressBar } from '../../../stories/components/ProgressBar/ProgressBar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CirclePlus, SearchIcon } from 'lucide-react';
import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { CustomCaloriesModal } from './customcaloriesmodal.tsx';
import { useState } from 'react';

export function ModifyRoute() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={'modify'}>
            <div className={'modify-wrapper'}>
                <Heading level={4}>Tuesday 21st</Heading>
                <ProgressBar
                    style={{ width: '250px' }}
                    label={"Today's calories"}
                    value={30}
                    valueText={'2000 kcal'}
                />
                <TextField
                    iconSide={'left'}
                    icon={<SearchIcon />}
                    placeholder={'Search'}
                />
                <Button
                    style={{ width: '100%' }}
                    icon={<CirclePlus color="white" />}
                    onPress={() => setOpen(true)}>
                    children={'Custom calories'}
                </Button>
                <CustomCaloriesModal isOpen={isOpen} setOpen={setOpen} />
            </div>
        </div>
    );
}
