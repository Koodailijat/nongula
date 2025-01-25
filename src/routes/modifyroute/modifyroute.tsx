import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { ProgressBar } from '../../../stories/components/ProgressBar/ProgressBar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CustomCaloriesModal } from './components/customcaloriesmodal.tsx';
import { Pen, PlusIcon, SearchIcon, Trash } from 'lucide-react';
import './modifyroute.scss';
import { useState } from 'react';
import { useListData } from 'react-stately';
import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { List } from '../../../stories/components/List/List.tsx';
import { ListItem } from '../../../stories/components/List/ListItem.tsx';
import { IconButton } from '../../../stories/components/IconButton/IconButton.tsx';
import { Text } from '../../../stories/components/Text/Text.tsx';

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
        <div className="modify-route">
            <Heading level={4}>Tuesday 21st</Heading>
            <div className="modify-route__content">
                <div className="modify-route__progress-bar">
                    <ProgressBar
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
                <List className="modify-route__list" items={list.items}>
                    {({ id, text }) => (
                        <ListItem
                            className="modify-route__list-item"
                            key={id}
                            id={id}>
                            <Text>{text}</Text>
                            <div className="modify-route__list-actions">
                                <IconButton icon={<Pen strokeWidth={2} />} />
                                <IconButton
                                    icon={<Trash strokeWidth={2} color="red" />}
                                    onPress={() => {
                                        list.remove(id);
                                    }}
                                />
                            </div>
                        </ListItem>
                    )}
                </List>
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
