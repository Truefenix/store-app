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
import { TitleFormH1 } from './TitleForm';
import {
  ShadInput,
  StyleAuthForm,
  StyledButton,
  StyleFormItem,
  StyleFormLabel,
  StyleFormMessage,
} from './styleForm';
import { useState } from 'react';
import { StyleImageUm } from './styleImage';
import { StyleErrorMessage } from './styleErrorMessage';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required').max(50),
  email: z.string().email('Invalid email address'),
});

type FormType = 'sign-in' | 'sign-up';

function AuthForm({ type }: { type: FormType }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
        <div></div>
      </StyleAuthForm>
    </Form>
  );
}

export default AuthForm;
