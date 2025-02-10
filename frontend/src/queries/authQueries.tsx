import { storageKeys } from '../constants/storageKeys.ts';
import { mutationKeys } from '../constants/mutationKeys.ts';
import { loginRequest, signUpRequest } from '../services/authRequest.ts';
import { useMutation } from '@tanstack/react-query';

export function useLoginMutation() {
    return useMutation({
        mutationFn: loginRequest,
        mutationKey: [mutationKeys.login],
        onSuccess: (data) => {
            localStorage.setItem(storageKeys.accessToken, data.token);
        },
    });
}

export function useSignUpMutation() {
    return useMutation({
        mutationFn: signUpRequest,
        mutationKey: [mutationKeys.singup],
    });
}
