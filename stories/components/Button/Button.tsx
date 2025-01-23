export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Button style */
    style?: 'outlined' | 'none';
    /** Optional click handler */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    style = 'none',
    ...props
}: ButtonProps) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <div
            className={[
                'button-wrapper',
                `button-wrapper--${style}`,
                `button--${style}`,
            ].join(' ')}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-circle-plus">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
            </svg>
            <button
                type="button"
                className={['button', `button--${size}`, mode].join(' ')}
                style={{ backgroundColor }}
                {...props}>
                {label}
            </button>
        </div>
    );
};
