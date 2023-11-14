import { test, expect, request } from '@playwright/test';

test('has title', async () => {
  const api = await request.newContext();
  const result = await api.get('http://localhost:3000');
  const body = await result.json();
  console.log(body);
  expect(body).toEqual({
    message: 'Hello API',
    result: false
  });
});
