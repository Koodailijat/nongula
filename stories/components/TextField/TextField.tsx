import {
    TextField as RATextfield,
    Input as RAInput,
    TextFieldProps as RATextFieldProps,
} from 'react-aria-components';

export interface TextFieldProps extends RATextFieldProps {
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
    placeholder?: string;
}

/** Primary UI component for text field */
export const TextField = ({
    children,
    iconSide = 'left',
    icon,
    size = 'medium',
    ...props
}: TextFieldProps) => {
    return (
        <div className="textfield-wrapper">
            {iconSide === 'left' && icon && (
                <div className={'icon-and-text'}>
                    <div className="textfield-icon">
                        <img
                            src={icon}
                            alt="Icon"
                            className="textfield-icon"
                            style={{ width: '20px' }}
                        />
                    </div>
                </div>
            )}
            <div>
                <RATextfield
                    id={'textfield-span'}
                    className={['textfield-content', `text--${size}`].join(' ')}
                    placeholder={children}
                    {...props}>
                    <RAInput id={'textfield-RAInput'}></RAInput>
                </RATextfield>
            </div>
            {iconSide === 'right' && icon && (
                <div className={'icon-and-text'}>
                    <div className="textfield-icon">
                        <img
                            src={icon}
                            alt="Icon"
                            className="textfield-icon"
                            style={{ width: '20px' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
