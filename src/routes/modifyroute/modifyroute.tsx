import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { ProgressBar } from '../../../stories/components/ProgressBar/ProgressBar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CustomCaloriesModal } from './components/customcaloriesmodal.tsx';
import { AddNewFoodModal } from './components/addnewfoodmodal.tsx';
import { Pen, PlusIcon, SearchIcon, Trash } from 'lucide-react';
import './modifyroute.scss';
import { useEffect, useState } from 'react';
import { useListData } from 'react-stately';
import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { List } from '../../../stories/components/List/List.tsx';
import { ListItem } from '../../../stories/components/List/ListItem.tsx';
import { IconButton } from '../../../stories/components/IconButton/IconButton.tsx';
import { Text } from '../../../stories/components/Text/Text.tsx';
import { format, isValid } from 'date-fns';
import { useDateParamToDate } from '../../hooks/usedateparamtodate.tsx';
import { useNavigate, useParams } from 'react-router';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface FoodItem {
    id: number;
    name: {
        fi: string;
        en: string;
    };
    energyKcal: number;
}

export function ModifyRoute() {
    const [isOpen, setOpen] = useState(false);
    const [isCustomCaloriesOpen, setCustomCaloriesOpen] = useState(false);
    const isoDateString = useParams().date;
    const datetime = useDateParamToDate();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [selectedItemId, setSelectedItemId] = useState(0);
    const [selectedItemName, setSelectedItemName] = useState('');

    useEffect(() => {
        if (!isValid(datetime)) {
            navigate('/');
            return;
        }
    }, [datetime, isoDateString, navigate]);

    const fetchFoodItems = async (query: string): Promise<FoodItem[]> => {
        const response = await fetch(
            `https://fineli.fi/fineli/api/v1/foods?q=${query}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data: FoodItem[] = await response.json();
        return data.slice(0, 5); // Get the first 5 results
    };

    const {
        data: items = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['foodItems', query],
        queryFn: () => fetchFoodItems(query),
        enabled: query.trim() !== '', // Only fetch when query is not empty
        placeholderData: keepPreviousData, // Keep previous data while fetching new data
    });

    const handleIconClick = (energyKcal: number, selectedItemName: string) => {
        setSelectedItemId(energyKcal); // Set the selected item's id
        setSelectedItemName(selectedItemName);
        setOpen(true); // Open the modal
    };

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
            <Heading level={1}>{format(datetime, 'LLLL do')}</Heading>
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
                    value={query}
                    onChange={(value) => setQuery(value)}
                />
                {/* List component to display results */}
                {isLoading && <Text>Loading...</Text>}
                {isError && <Text>Error fetching data.</Text>}
                {items.length > 0 && (
                    <div className={'search-results'}>
                        <List className="food-list" items={items}>
                            {({ id, name, energyKcal }) => (
                                <ListItem
                                    className="modify-route__list-item"
                                    key={id}
                                    id={id}>
                                    <Text>{name.fi}</Text>
                                    <div className="modify-route__list-actions">
                                        <IconButton
                                            icon={
                                                <PlusIcon
                                                    strokeWidth={2}
                                                    color="green"
                                                />
                                            }
                                            onPress={() => {
                                                handleIconClick(
                                                    energyKcal,
                                                    name.fi
                                                );
                                            }}
                                        />
                                    </div>
                                </ListItem>
                            )}
                        </List>
                    </div>
                )}
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
                    onPress={() => setCustomCaloriesOpen(true)}
                    size="large"
                    icon={<PlusIcon size="16" />}>
                    Add custom calories
                </Button>
                <AddNewFoodModal
                    isOpen={isOpen}
                    setOpen={setOpen}
                    itemId={selectedItemId}
                    name={selectedItemName}
                />
                <CustomCaloriesModal
                    isOpen={isCustomCaloriesOpen}
                    setOpen={setCustomCaloriesOpen}
                />
            </div>
        </div>
    );
}
