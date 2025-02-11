import { useMemo } from 'react';
import { useAuthLocalStorage } from './useauthlocalstorage.tsx';

export function useAuth() {
    const [getAccessToken] = useAuthLocalStorage();
    const isAuthenticated = useMemo(() => !!getAccessToken, [getAccessToken]);

    return {
        isAuthenticated,
    };
}
