import { useState } from 'react';
import {
    TextField as RATextfield,
    Label as RALabel,
    Input as RAInput,
} from 'react-aria-components';

export interface TextfieldProps {
    /** Text to show **/
    children: string;
    /** Text color, defaults to primary **/
    mode?: 'primary' | 'secondary';
    /** Text size, defaults to medium **/
    size?: 'small' | 'medium' | 'large';
    /** Side of the icon **/
    iconSide?: 'left' | 'right';
    /** URL of the icon image **/
    icon?: string;
}

/** Primary UI component for text */
export const Textfield = ({
    children,
    size = 'medium',
    mode = 'primary',
    iconSide = 'left',
    icon = '../../../search_icon_textfield.PNG',
    ...props
}: TextfieldProps) => {
    const [text, setText] = useState('');

    return (
        <div className="textfield-wrapper">
            {iconSide === 'left' && icon && (
                <div className="textfield-icon">
                    <img
                        src={icon}
                        alt="Icon"
                        className="textfield-icon"
                        style={{ width: '20px' }}
                    />
                </div>
            )}
            <div className="textfield-content">
                <RATextfield
                    id={'textfield-span'}
                    className={['text', `text--${size}`, `text--${mode}`].join(
                        ' '
                    )}
                    {...props}
                    onChange={setText}>
                    <RAInput>{text}</RAInput>
                </RATextfield>
            </div>
            {iconSide === 'right' && icon && (
                <div className="textfield-icon">
                    <img src={icon} alt="Icon" className="textfield-icon" />
                </div>
            )}
            {children}
        </div>
    );
};
