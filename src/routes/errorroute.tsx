import { useNavigate } from 'react-router';
import { Heading } from '../../stories/components/Heading/Heading.tsx';
import { Button } from '../../stories/components/Button/Button.tsx';
import { ArrowLeft } from 'lucide-react';

export function ErrorRoute() {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
            }}>
            <Heading level={1}>Something went wrong 🤔</Heading>
            <Button onPress={() => navigate(-1)} icon={<ArrowLeft />}>
                Go back to previous page
            </Button>
        </div>
    );
}
