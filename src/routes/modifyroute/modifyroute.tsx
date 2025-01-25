import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { ProgressBar } from '../../../stories/components/ProgressBar/ProgressBar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CirclePlus } from 'lucide-react';

export function ModifyRoute() {
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
                <Button
                    icon={<CirclePlus color="white" />}
                    children={'Custom calories'}
                />
            </div>
        </div>
    );
}
