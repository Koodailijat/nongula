import { ComponentProps } from 'react';

export function Badge({ children, ...props }: ComponentProps<'span'>) {
    return (
        <div className="badge-wrapper">
            <span {...props}>{children}</span>
        </div>
    );
}
