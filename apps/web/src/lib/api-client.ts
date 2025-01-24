import { notification } from '@repo/ui/hooks';
import Axios, { InternalAxiosRequestConfig } from 'axios';

import { env } from '@/config/env';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
};

export const apiRefreshClient = Axios.create({
  baseURL: env.API_URL,
});
apiRefreshClient.interceptors.request.use(authRequestInterceptor);

export const apiClient = Axios.create({
  baseURL: env.API_URL,
});
apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;

      try {
        await apiRefreshClient.get('auth/refresh');
        return apiClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    const message = error.response?.data?.message || error.message;
    notification({
      title: 'Something went wrong',
      description: message,
      variant: 'filled',
      status: 'error',
    });

    return Promise.reject(error);
  },
);
