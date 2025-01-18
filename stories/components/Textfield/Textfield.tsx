import React from "react";

export interface TextfieldProps {
    /** Text to show **/
    children: string;
    /** Text color, defaults to primary **/
    mode?: 'primary' | 'secondary';
    /** Text size, defaults to medium **/
    size?: 'small' | 'medium' | 'large';
    /** Side of the icon **/
    icon_side?: "left" | "right";
    /** URL of the icon image **/
    icon?: string;
}

/** Primary UI component for text */
export const Textfield = ({
    children,
    size = 'medium',
    mode = 'primary',
    icon_side = 'left',
    icon = "../../../search_icon_textfield.PNG",
    ...props
}: TextfieldProps) => {
    return (
        <div className="storybook-textfield-wrapper" 
        style={{
            display: "flex", 
            flexDirection: "row", 
            gap: "10px", 
            outline: "1px solid black",
            borderRadius: "15px",
            padding: "10px",
            justifyContent: icon_side === "right" ? "flex-end" : "flex-start",
            width: "200px",
            alignItems: "center"
        }}>
            {icon_side === "left" && icon && (
                <div className="storybook-textfield-icon" style={{display: "flex", alignItems: "center"}}>
                    <img src={icon} alt="Icon" className="storybook-textfield-icon" style={{width: "20px"}}/>
                </div>
            )}
            <div className="storybook-textfield-content">
                <span
                    className={['text', `text--${size}`, `text--${mode}`].join(' ')}
                    {...props}>
                    {children}
                </span>
            </div>
            {icon_side === "right" && icon && (
                <div className="storybook-textfield-icon" style={{display: "flex", alignItems: "center"}}>
                    <img src={icon} alt="Icon" className="storybook-textfield-icon" style={{width: "20px", alignItems: "center"}}/>
                </div>
            )}
        </div>
    );
};
