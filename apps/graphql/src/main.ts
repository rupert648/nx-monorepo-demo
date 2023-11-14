import express from 'express';

import { isOdd } from '@nx-test/is-even';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API', result: isOdd(2) });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
