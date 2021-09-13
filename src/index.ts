import express, { Application, Request, Response } from 'express';
import BreweriesETL from './etl/breweriesETL';

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.get('/breweries', (req: Request, res: Response) => {
  new BreweriesETL({ res }).run();
});

app.listen(PORT, function () {
  console.log(`App is listening at http://localhost:${PORT} !`);
});
