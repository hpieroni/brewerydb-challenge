import config from './config';
import express, { Application, Request, Response } from 'express';
import BreweriesETL from './etls/breweries/breweriesETL';
import auth from './middlewares/auth';

const app: Application = express();

// I'll keep it simple here In a real worl scenario I would modularize it
// using an express router and maybe having a controllers folder.
app.get('/breweries', auth, (req: Request, res: Response) => {
  new BreweriesETL({ res }).run();
});

app.listen(config.port, function () {
  console.log(`App is listening at http://localhost:${config.port} !`);
});
