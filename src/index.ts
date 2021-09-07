import express, { Application, Request, Response } from 'express';

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello brewerydb-endpoint');
});

app.listen(PORT, function () {
  console.log(`App is listening at http://localhost:${PORT} !`);
});
