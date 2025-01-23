import React from 'react';

export interface ButtonProps {
    /** Button size */
    size?: 'small' | 'medium' | 'large';
    /** Button Text */
    label: string;
    /** Button outline */
    outline?: boolean;
    /** Optional click handler */
    onClick?: () => void;
    /** Icon as react component */
    icon?: React.ReactNode;
}

/** Primary UI component for user interaction */
export const Button = ({
    size = 'medium',
    label,
    outline = false,
    icon,
    ...props
}: ButtonProps) => {
    return (
        <div
            className={[
                'button-wrapper',
                `${outline ? 'button-wrapper--outline' : ''}`,
            ].join(' ')}>
            {icon}
            <button
                type="button"
                className={[
                    'button',
                    `button--${size}`,
                    'button--primary',
                ].join(' ')}
                {...props}>
                {label}
            </button>
        </div>
    );
};
