import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import createNextHeadMock from '@tests/mocks/next-head';
import testServer from '@tests/test-server';

import testQueryClient from './test-query-client';

beforeAll(async () => {
  testServer.listen();
});

beforeEach(() => {
  testServer.resetHandlers();
  testQueryClient.clear();
});

afterAll(() => {
  testServer.close();
});

jest.mock('next/head', () => createNextHeadMock());
