import {
    TextField as RATextfield,
    Label as RALabel,
    Input as RAInput,
} from 'react-aria-components';
import { AriaTextFieldProps as RATextFieldProps } from '@react-types/textfield';
import { ReactNode } from 'react';

export interface TextFieldProps extends RATextFieldProps {
    /** Text color, defaults to primary **/
    mode?: 'primary' | 'secondary';
    /** Side of the icon **/
    iconSide?: 'left' | 'right';
    /** Icon component **/
    icon?: ReactNode;
}

function getIconInputStyle(icon: ReactNode, iconSide: 'left' | 'right') {
    if (icon) {
        if (iconSide === 'left') {
            return 'icon-left';
        } else if (iconSide === 'right') {
            return 'icon-right';
        }
    }
    return '';
}

/** Primary UI component for text field */
export const TextField = ({
    iconSide = 'left',
    icon,
    label,
    ...props
}: TextFieldProps) => {
    return (
        <RATextfield className="textfield" {...props}>
            {label && <RALabel className={'RALabel'}>{label}</RALabel>}
            <div className="input-container">
                {iconSide === 'left' && icon && (
                    <div className="textfield-icon textfield-icon--left">
                        {icon}
                    </div>
                )}
                <RAInput
                    className={`input ${getIconInputStyle(icon, iconSide)}`}></RAInput>
                {iconSide === 'right' && icon && (
                    <div className="textfield-icon textfield-icon--right">
                        {icon}
                    </div>
                )}
            </div>
        </RATextfield>
    );
};
