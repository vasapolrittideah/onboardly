import { redirect } from '@tanstack/react-router';
import Axios, { InternalAxiosRequestConfig } from 'axios';

import { env } from '@/config/env';
import { notification } from '@/hooks/use-notification';

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
  (error) => {
    const message = error.response?.data?.message || error.message;
    notification({
      title: 'Something went wrong',
      description: message,
      variant: 'filled',
      status: 'error',
    });

    if (error.response?.status === 401) {
      throw redirect({ to: '/auth/login' });
    }

    return Promise.reject(error);
  },
);
