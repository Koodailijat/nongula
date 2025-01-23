import React from 'react';
import { Button as RAButton } from 'react-aria-components';
import { AriaButtonProps as RAButtonProps } from "@react-types/button";

export interface ButtonProps extends RAButtonProps {
    /** Button size */
    size?: 'small' | 'medium' | 'large';
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
