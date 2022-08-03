import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { FC, useRef } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const queryClient = useRef(new QueryClient()).current;

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
