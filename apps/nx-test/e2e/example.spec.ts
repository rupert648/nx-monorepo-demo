import { test, expect, request } from '@playwright/test';

test('has title', async () => {
  const api = await request.newContext();
  const result = await api.get('http://localhost:3333/api');
  const body = await result.json();
  console.log(body);
  // Expect h1 to contain a substring.
  expect(body).toEqual({
    message: 'Welcome to nx-test!',
    result: 'auth'
  });
});
