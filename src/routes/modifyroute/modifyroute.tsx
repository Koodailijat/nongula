import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { ProgressBar } from '../../../stories/components/ProgressBar/ProgressBar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CirclePlus, Pen, SearchIcon, Trash } from 'lucide-react';
import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { CustomCaloriesModal } from './customcaloriesmodal.tsx';
import { useState } from 'react';
import { List } from '../../../stories/components/List/List.tsx';
import { useListData } from 'react-stately';
import { ListItem } from '../../../stories/components/List/ListItem.tsx';
import { Text } from '../../../stories/components/Text/Text.tsx';
import { IconButton } from '../../../stories/components/IconButton/IconButton.tsx';

export function ModifyRoute() {
    const [isOpen, setOpen] = useState(false);

    // Mock data
    const initialItems = [
        { id: 1, text: '300 calories' },
        { id: 2, text: '300 calories' },
        { id: 3, text: '300 calories' },
        { id: 4, text: '300 calories' },
        { id: 5, text: '300 calories' },
    ];

    const list = useListData({
        initialItems,
    });

    return (
        <div className={'modify'}>
            <div className={'modify-wrapper'}>
                <Heading level={4}>Tuesday 21st</Heading>
                <div
                    className={'modify-progress-bar'}
                    style={{ width: '100%' }}>
                    <ProgressBar
                        style={{ width: '250px' }}
                        label={"Today's calories"}
                        value={30}
                        valueText={'2000 kcal'}
                    />
                </div>

                <TextField
                    iconSide={'left'}
                    icon={<SearchIcon />}
                    placeholder={'Search'}
                />
                <List style={{ width: '100%' }} items={list.items}>
                    {(item) => (
                        <ListItem key={item.id} id={item.id}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '16px',
                                }}>
                                <Text>{item.text}</Text>
                                <div style={{ display: 'flex' }}>
                                    <IconButton
                                        icon={<Pen strokeWidth={3} />}
                                    />
                                    <IconButton
                                        icon={
                                            <Trash
                                                strokeWidth={3}
                                                color="red"
                                            />
                                        }
                                        onPress={() => {
                                            list.remove(item.id);
                                        }}
                                    />
                                </div>
                            </div>
                        </ListItem>
                    )}
                </List>
                <Button
                    style={{ width: '100%' }}
                    icon={<CirclePlus color="white" />}
                    onPress={() => setOpen(true)}
                    children={'Custom calories'}></Button>
                <CustomCaloriesModal isOpen={isOpen} setOpen={setOpen} />
            </div>
        </div>
    );
}
