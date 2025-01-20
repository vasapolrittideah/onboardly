import { redirect } from '@tanstack/react-router';
import Axios, { InternalAxiosRequestConfig } from 'axios';

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
  (error) => {
    if (error.response?.status === 401) {
      throw redirect({ to: '/auth/login' });
    }
  },
);
