import { notification } from '@repo/ui/hooks';
import { redirect } from '@tanstack/react-router';
import Axios, {
  AxiosError,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';

import { env } from '@/config/env';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
};

export const apiClient = Axios.create({
  baseURL: env.API_URL,
});

apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<{ message?: string }>) => {
    const message = error.response?.data?.message || error.message;
    if (error.status === HttpStatusCode.Unauthorized) {
      throw redirect({ to: '/auth/login' });
    } else {
      notification({
        title: 'Something went wrong',
        description: message,
        variant: 'filled',
        status: 'error',
      });
    }

    return Promise.reject(error);
  },
);
