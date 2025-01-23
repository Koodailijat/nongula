import {
    TextField as RATextfield,
    Input as RAInput,
} from 'react-aria-components';
import { AriaTextFieldProps as RATextFieldProps } from "@react-types/textfield";
import React from 'react';

export interface TextFieldProps extends RATextFieldProps {
    /** Text color, defaults to primary **/
    mode?: 'primary' | 'secondary';
    /** Text size, defaults to medium **/
    size?: 'small' | 'medium' | 'large';
    /** Side of the icon **/
    iconSide?: 'left' | 'right';
    /** URL of the icon image **/
    icon?: React.ReactNode;
}

/** Primary UI component for text field */
export const TextField = ({
    iconSide = 'left',
    icon,
    size = 'medium',
    ...props
}: TextFieldProps) => {
    return (
        <div className="textfield-wrapper">
            {iconSide === 'left' && icon && (
                <div className={'icon-and-text'}>
                    <div className="textfield-icon">{icon}</div>
                </div>
            )}
            <div>
                <RATextfield
                    id={'textfield-span'}
                    className={['textfield-content', `text--${size}`].join(' ')}
                    {...props}>
                    <RAInput id={'textfield-RAInput'}></RAInput>
                </RATextfield>
            </div>
            {iconSide === 'right' && icon && (
                <div className={'icon-and-text'}>
                    <div className="textfield-icon">{icon}</div>
                </div>
            )}
        </div>
    );
};
