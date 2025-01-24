import { ComponentProps } from 'react';

type BadgeProps = ComponentProps<'span'> & {
    children?: React.ReactNode;
};
/** Primary UI component for badge */
export const Badge = ({ children, ...props }: BadgeProps) => {
    return (
        <div className={'badge-wrapper'}>
            <span {...props}>{children}</span>
        </div>
    );
};
