import { ComponentProps } from 'react';

type TextProps = ComponentProps<'span'> & {
    /** Text color **/
    mode?: 'primary' | 'secondary';
    /** Text size **/
    size?: 'small' | 'medium' | 'large';
};

/** Primary UI component for text */
export const Text = ({
    children,
    size = 'medium',
    mode = 'primary',
    ...props
}: TextProps) => {
    return (
        <span
            className={[`text--${size}`, `text--${mode}`, 'text'].join(' ')}
            {...props}>
            {children}
        </span>
    );
};
