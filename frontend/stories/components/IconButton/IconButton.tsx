import { Button as RAButton } from 'react-aria-components';
import { AriaButtonProps as RAButtonProps } from '@react-types/button';
import { ReactNode } from 'react';

export interface IconButtonProps extends Omit<RAButtonProps, 'children'> {
    icon: ReactNode;
    className?: string;
}

export function IconButton({ icon, className, ...props }: IconButtonProps) {
    return (
        <RAButton {...props} className={`icon-button ${className}`}>
            {icon}
        </RAButton>
    );
}
