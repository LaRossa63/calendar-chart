import axios from 'axios';
import { QueryClient } from 'react-query';

import { LinksApi } from 'types/types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },

    mutations: {
      retry: 0,
    },
  },
});

export const Axios = axios.create({
  baseURL: LinksApi.BASE_URL,
  headers: {
    Accept: 'application/json',
    AcceptControlAllowOrigin: '*',
  },
});

Axios.interceptors.response.use((config) => {
  return config.data;
});
