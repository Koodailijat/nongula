import { request } from './request.ts';
import { SignUpDto } from '../../types/SignUpDto.ts';
import { LoginInputDto, LoginOuputDto } from '../../types/LoginDto.ts';

export async function loginRequest(
    values: LoginInputDto
): Promise<LoginOuputDto> {
    return request({
        method: 'POST',
        url: 'api/login',
        data: {
            email: values.email,
            password: values.password,
        },
    });
}

export async function signUpRequest(values: SignUpDto) {
    return request({
        method: 'POST',
        url: 'api/signup',
        data: {
            email: values.email,
            password: values.password,
            password_confirm: values.confirmPassword,
        },
    });
}
