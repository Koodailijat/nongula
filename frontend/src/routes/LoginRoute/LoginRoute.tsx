import { Button } from '../../../stories/components/Button/Button.tsx';
import { useNavigate } from 'react-router';
import { useLoginMutation } from '../../api/queries/authQueries.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from 'react-aria-components';
import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { FormTextField } from '../../../stories/components/FormTextField/FormTextField.tsx';
import { Lock, User } from 'lucide-react';
import { LoginSchema } from '../../lib/schemas/LoginSchema.ts';
import { LoginInputDto } from '../../types/LoginDto.ts';

export function LoginRoute() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm<LoginInputDto>({
        resolver: zodResolver(LoginSchema),
        mode: 'onBlur',
    });
    const navigate = useNavigate();
    const loginMutation = useLoginMutation();

    const onSubmit: SubmitHandler<LoginInputDto> = (data: LoginInputDto) => {
        loginMutation.mutate(
            { ...data },
            {
                onSuccess: () => {
                    navigate('/dashboard');
                },
            }
        );
    };

    return (
        <Form className="loginform" onSubmit={handleSubmit(onSubmit)}>
            <Heading level={1}>Login</Heading>
            <FormTextField
                placeholder="Email"
                icon={<User />}
                type="email"
                label="Email"
                {...register('email')}
                errorText={errors.email?.message}
                onChange={(email) => setValue('email', email)}
            />
            <FormTextField
                placeholder="Password"
                icon={<Lock />}
                type="password"
                label="Password"
                {...register('password')}
                errorText={errors.password?.message}
                onChange={(password) => setValue('password', password)}
            />
            <Button type="submit">Login</Button>
        </Form>
    );
}
