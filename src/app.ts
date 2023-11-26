import express, { Application, Request, Response } from 'express';
import corse from 'cors';
const app: Application = express();

// parser
app.use(express.json());

app.use(corse());

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
