import { configureAuth } from 'react-query-auth';

import { getUser } from '@/features/auth/api/get-user';
import {
  loginWithEmailAndPassword,
  LoginWithEmailAndPasswordInput,
} from '@/features/auth/api/login';
import { logout } from '@/features/auth/api/logout';
import { register, RegisterInput } from '@/features/auth/api/register';

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn: getUser,
  loginFn: async (input: LoginWithEmailAndPasswordInput) => {
    const response = await loginWithEmailAndPassword(input);
    return response;
  },
  registerFn: async (input: RegisterInput) => {
    const response = await register(input);
    return response;
  },
  logoutFn: logout,
});
