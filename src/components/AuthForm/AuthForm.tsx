'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  // FormMessage,
} from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
import { TitleFormH1 } from './style/TitleForm';
import {
  ShadInput,
  StyleAuthForm,
  StyledButton,
  StyleFormItem,
  StyleFormLabel,
  StyleFormMessage,
} from './style/styleForm';
import { useState } from 'react';
import { StyleImageUm } from './style/styleImage';
import { StyleErrorMessage } from './style/styleErrorMessage';
import { BodyTitleDois } from './style/styleBodyTitle';
import { StyleLink } from './style/styleLink';

type FormType = 'sign-in' | 'sign-up';

const authFormShema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName:
      formType === 'sign-up'
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};

function AuthForm({ type }: { type: FormType }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formSchema = authFormShema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <StyleAuthForm onSubmit={form.handleSubmit(onSubmit)}>
        <TitleFormH1 className="form-title">
          {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </TitleFormH1>

        {type === 'sign-up' && (
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <StyleFormItem>
                  <StyleFormLabel>Full Name</StyleFormLabel>

                  <FormControl>
                    <ShadInput placeholder="Enter your full name" {...field} />
                  </FormControl>
                </StyleFormItem>
                <StyleFormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <StyleFormItem>
                <StyleFormLabel>Email</StyleFormLabel>

                <FormControl>
                  <ShadInput placeholder="Enter your email" {...field} />
                </FormControl>
              </StyleFormItem>
              <StyleFormMessage />
            </FormItem>
          )}
        />

        <StyledButton type="submit" disabled={isLoading}>
          {type === 'sign-in' ? 'Sign In' : 'Sign Up'}

          {isLoading && (
            <StyleImageUm
              src="/assets/icons/loader.svg"
              alt="loader"
              width={24}
              height={24}
            />
          )}
        </StyledButton>
        {errorMessage && <StyleErrorMessage>*{errorMessage}</StyleErrorMessage>}

        <BodyTitleDois>
          <p style={{ color: 'Blue' }}>
            {type === 'sign-in'
              ? `Don't have an account?`
              : `Already have an account?`}

            <StyleLink href={type === 'sign-in' ? 'sign-up' : 'sign-in'}>
              {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            </StyleLink>
          </p>
        </BodyTitleDois>
      </StyleAuthForm>
    </Form>
  );
}

export default AuthForm;
