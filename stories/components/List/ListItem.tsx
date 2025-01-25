import { ListBoxItem, ListBoxItemProps } from 'react-aria-components';

export function ListItem({ className, ...props }: ListBoxItemProps) {
    return (
        <ListBoxItem
            {...props}
            className={`list-item ${className}`}
            isDisabled={true}
        />
    );
}
