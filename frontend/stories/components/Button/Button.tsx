import { ReactNode } from 'react';
import { Button as RAButton } from 'react-aria-components';
import { AriaButtonProps as RAButtonProps } from '@react-types/button';

export interface ButtonProps extends RAButtonProps {
    /** Icon as react component */
    icon?: ReactNode;
    /** Button variant */
    variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = ({
    children,
    icon,
    variant = 'primary',
    ...props
}: ButtonProps) => {
    return (
        <RAButton
            className={['button', `button--${variant}`, 'button--primary'].join(
                ' '
            )}
            {...props}>
            {icon}
            {children}
        </RAButton>
    );
};
