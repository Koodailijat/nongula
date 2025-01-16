import './text.scss';

export interface TextProps {
    /** Text to show **/
    children: string;
    /** Text color, defaults to primary **/
    mode?: 'primary' | 'secondary';
    /** Text size, defaults to medium **/
    size?: 'small' | 'medium' | 'large';
}

/** Primary UI component for text */
export const Text = ({
    children,
    size = 'medium',
    mode = 'primary',
    ...props
}: TextProps) => {
    return (
        <span
            className={['text', `text--${size}`, `text--${mode}`].join(' ')}
            {...props}>
            {children}
        </span>
    );
};
