import React from 'react';
import { Button as RAButton } from 'react-aria-components';
import { AriaButtonProps as RAButtonProps } from '@react-types/button';

export interface ButtonProps extends RAButtonProps {
    /** Button size */
    size?: 'small' | 'medium' | 'large';
    /** Icon as react component */
    icon?: React.ReactNode;
    /** Button variant */
    variant?: 'primary' | 'danger';
}

/** Primary UI component for user interaction */
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
