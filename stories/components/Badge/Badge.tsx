import { ComponentProps } from 'react';

type BadgeProps = ComponentProps<'span'> & {
    /** Text color **/
    size?: 'small' | 'medium';
    children?: React.ReactNode;
};
/** Primary UI component for badge */
export const Badge = ({ children, size = 'medium', ...props }: BadgeProps) => {
    return (
        <div className={'badge-wrapper'}>
            <span className={[`badge-icon--${size}`].join(' ')} {...props}>
                {children}
            </span>
        </div>
    );
};
