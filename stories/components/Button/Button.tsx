import { ReactNode } from 'react';
import { Button as RAButton } from 'react-aria-components';
import { AriaButtonProps as RAButtonProps } from '@react-types/button';

export interface ButtonProps extends RAButtonProps {
    /** Button size */
    size?: 'small' | 'medium' | 'large';
    /** Icon as react component */
    icon?: ReactNode;
    /** Button variant */
    variant?: 'primary' | 'danger';
}

export const Button = ({
    size = 'medium',
    children,
    icon,
    variant = 'primary',
    ...props
}: ButtonProps) => {
    return (
        <RAButton
            className={[
                'button',
                `button--${size}`,
                `button--${variant}`,
                'button--primary',
            ].join(' ')}
            {...props}>
            {icon}
            {children}
        </RAButton>
    );
};
