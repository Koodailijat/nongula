import {
    TextField as RATextfield,
    Label as RALabel,
    Input as RAInput,
    Text,
} from 'react-aria-components';
import { AriaTextFieldProps as RATextFieldProps } from '@react-types/textfield';
import { ReactNode } from 'react';

export interface FormTextFieldProps extends RATextFieldProps {
    /** Side of the icon **/
    iconSide?: 'left' | 'right';
    /** Icon component **/
    icon?: ReactNode;
    /** Label **/
    label?: string;
    errorText?: string;
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

/** Primary UI component for form text field */
export const FormTextField = ({
    iconSide = 'left',
    icon,
    label,
    errorText,
    ...props
}: FormTextFieldProps) => {
    return (
        <RATextfield className="formtextfield" {...props}>
            <RALabel className="formRALabel">{label}</RALabel>
            <div className="forminput-container">
                {iconSide === 'left' && icon && (
                    <div className="formtextfield-icon formtextfield-icon--left">
                        {icon}
                    </div>
                )}
                <RAInput
                    className={`forminput ${getIconInputStyle(icon, iconSide)}`}></RAInput>
                {iconSide === 'right' && icon && (
                    <div className="formtextfield-icon formtextfield-icon--right">
                        {icon}
                    </div>
                )}
                <Text slot="errorMessage" className="formtextfield-error">
                    {errorText}
                </Text>
            </div>
        </RATextfield>
    );
};
