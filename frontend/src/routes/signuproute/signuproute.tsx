import { Button } from '../../../stories/components/Button/Button.tsx';
import { useSignUpMutation } from '../../api/queries/authQueries.tsx';
import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from 'react-aria-components';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '../../lib/schemas/SignUpSchema.ts';
import { SignUpDto } from '../../types/SignUpDto.ts';
import { FormTextField } from '../../../stories/components/FormTextField/FormTextField.tsx';
import { Heading } from '../../../stories/components/Heading/Heading.tsx';
import { Lock, User } from 'lucide-react';

export function SignUpRoute() {
    const navigate = useNavigate();
    const signUpMutation = useSignUpMutation();
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm<SignUpDto>({
        resolver: zodResolver(SignUpSchema),
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<SignUpDto> = (data: SignUpDto) => {
        signUpMutation.mutate(
            { ...data },
            { onSuccess: () => navigate('/login') }
        );
        // onerror toast
    };

    return (
        <Form className="signupform" onSubmit={handleSubmit(onSubmit)}>
            <Heading level={1}>Sign up</Heading>
            <FormTextField
                placeholder="email"
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
            <FormTextField
                placeholder="Confirm password"
                icon={<Lock />}
                type="password"
                label="Confirm password"
                {...register('confirmPassword')}
                errorText={errors.confirmPassword?.message}
                onChange={(confirmPassword) =>
                    setValue('confirmPassword', confirmPassword)
                }
            />
            <Button type="submit">Sign Up</Button>
        </Form>
    );
}
