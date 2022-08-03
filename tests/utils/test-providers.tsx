import { QueryClientProvider } from '@tanstack/react-query';

import { FCC } from '@/types/react';

import testQueryClient from './test-query-client';

const TestProviders: FCC = ({ children }) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
);

export default TestProviders;
