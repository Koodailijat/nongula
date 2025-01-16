import { ElementType } from 'react';

export interface HeadingProps {
    /** Heading text to show **/
    children: string;
    /** Heading level **/
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

/** Primary UI component for heading */
export const Heading = ({ children, level, ...props }: HeadingProps) => {
    const HeadingElement = `h${level}` as ElementType;
    return (
        <HeadingElement
            className={['heading', `heading-level--${level}`].join(' ')}
            {...props}>
            {children}
        </HeadingElement>
    );
};
