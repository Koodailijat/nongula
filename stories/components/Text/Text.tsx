export interface TextProps {
    /** Text to show **/
    children: string;
    /** Text color **/
    mode?: 'primary' | 'secondary';
    /** Text size **/
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
            className={[`text--${size}`, `text--${mode}`].join(' ')}
            {...props}>
            {children}
        </span>
    );
};
