import React from 'react';
import { Button as RAButton } from 'react-aria-components';

export interface ButtonProps {
    /** Button size */
    size?: 'small' | 'medium' | 'large';
    /** Button Text */
    children: string;
    /** Optional click handler */
    onClick?: () => void;
    /** Icon as react component */
    icon?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({
    size = 'medium',
    children,
    icon,
    ...props
}: ButtonProps) => {
    return (
        <RAButton
            className={['button', `button--${size}`, 'button--primary'].join(
                ' '
            )}
            {...props}>
            {icon}
            {children}
        </RAButton>
    );
};
