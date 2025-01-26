import {
    ProgressBar as RAProgressBar,
    Label as RALabel,
} from 'react-aria-components';

interface ProgressBarProps {
    label: string;
    targetValue?: number;
    value: number;
    valueText: string;
}

/** Primary UI component for progress bar */
export const ProgressBar = ({
    label,
    value,
    targetValue,
    valueText,
}: ProgressBarProps) => {
    const target = targetValue ?? 100;
    return (
        <RAProgressBar value={value} className="progress-bar">
            <RALabel>{label}</RALabel>
            <span className="progress-bar__value">{valueText}</span>
            <div className="progress-bar__bar">
                <div
                    className="progress-bar__bar-fill"
                    style={{ width: value / target + '%' }}
                />
            </div>
        </RAProgressBar>
    );
};
