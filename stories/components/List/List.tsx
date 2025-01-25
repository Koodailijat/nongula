import { ListBox, ListBoxProps } from 'react-aria-components';

export function List<T extends object>({
    children,
    className,
    ...props
}: ListBoxProps<T>) {
    return (
        <ListBox {...props} className={`list ${className}`} autoFocus={false}>
            {children}
        </ListBox>
    );
}
