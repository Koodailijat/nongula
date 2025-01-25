import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { ProgressBar } from '../../../stories/components/ProgressBar/ProgressBar.tsx';
import { Button } from '../../../stories/components/Button/Button.tsx';
import { CustomCaloriesModal } from './components/customcaloriesmodal.tsx';
import { Pen, PlusIcon, SearchIcon, Trash } from 'lucide-react';
import './modifyroute.scss';
import { useEffect, useMemo, useState } from 'react';
import { useListData } from 'react-stately';
import { TextField } from '../../../stories/components/TextField/TextField.tsx';
import { List } from '../../../stories/components/List/List.tsx';
import { ListItem } from '../../../stories/components/List/ListItem.tsx';
import { IconButton } from '../../../stories/components/IconButton/IconButton.tsx';
import { Text } from '../../../stories/components/Text/Text.tsx';
import { useNavigate, useParams } from 'react-router';
import { format, isValid, parseISO } from 'date-fns';

interface FoodItem {
    id: number;
    name: {
        fi: string;
        en: string;
    };
}

export function ModifyRoute() {
    const [isOpen, setOpen] = useState(false);
    const isoDateString = useParams().date;
    const datetime = useMemo(() => parseISO(isoDateString!), [isoDateString]);
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [items, setItems] = useState<FoodItem[]>([]); // State to store the first 5 results

    useEffect(() => {
        if (!isValid(datetime)) {
            navigate('/');
            return;
        }
    }, [datetime, isoDateString, navigate]);

    // Debounce logic to reduce API calls
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500); // Wait for 500ms before updating debouncedQuery
        return () => clearTimeout(handler); // Clear timeout on cleanup
    }, [query]);

    // Fetch data when debouncedQuery changes
    useEffect(() => {
        if (debouncedQuery.trim() === '') return;

        const fetchData = async () => {
            console.log(
                `https://fineli.fi/fineli/api/v1/foods?q=${debouncedQuery}`
            );
            try {
                const response = await fetch(
                    `https://fineli.fi/fineli/api/v1/foods?q=${debouncedQuery}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: FoodItem[] = await response.json();
                const firstFive = data.slice(0, 5); // Get the first 5 results
                console.log(firstFive);
                setItems(firstFive); // Save the first 5 results in state
                console.log(items.length);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [debouncedQuery]);

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
                {items.length > 0 && (
                    <List className="food-list" items={items}>
                        {({ id, name }) => (
                            <ListItem
                                className="modify-route__list-item"
                                key={id}
                                id={id}>
                                <Text>{name.fi}</Text>
                                <div className="modify-route__list-actions">
                                    <IconButton
                                        icon={
                                            <Trash
                                                strokeWidth={2}
                                                color="red"
                                            />
                                        }
                                        onPress={() => {
                                            list.remove(id);
                                        }}
                                    />
                                </div>
                            </ListItem>
                        )}
                    </List>
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
                    onPress={() => setOpen(true)}
                    size="large"
                    icon={<PlusIcon size="16" />}>
                    Add custom calories
                </Button>
                <CustomCaloriesModal isOpen={isOpen} setOpen={setOpen} />
            </div>
        </div>
    );
}
